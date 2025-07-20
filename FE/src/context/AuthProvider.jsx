import {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { DataContext } from "./DataProvider";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  console.log("AuthProvider: DataContext object on import:", DataContext);

  const dataContextValue = useContext(DataContext);
  console.log("AuthProvider: DataContext value from useContext:", dataContextValue);

  if (dataContextValue === undefined) {
    console.warn("AuthProvider: DataContext value is undefined. Waiting for DataProvider to render.");
    return null; 
  }

  let BASE_URL = '';
  if (typeof dataContextValue.BASE_URL === 'undefined') {
    console.error("AuthProvider Error: DataContext dəyəri BASE_URL-i ehtiva etmir və ya undefined-dır!");
    return <p>Əsas məlumatlar yüklənir...</p>;
  } else {
    BASE_URL = dataContextValue.BASE_URL; 
  }

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false); 

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await fetch(`${BASE_URL}/user/logout`, {
        method: "POST",
        credentials: 'include' 
      });
    } catch (err) {
      console.error("Logout API call failed:", err);
    } finally {
      setUser(null); 
      localStorage.removeItem("user");
      setError(null); 
      setLoading(false); 
    }
  };

  const apiRequest = async (endpoint, options = {}) => {
    setError(null); 
    const method = options.method || "GET"; 
    const body = options.body;

    console.log(`API Request: Endpoint: ${endpoint}, Method: ${method}`);

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          ...options.headers, 
        },
        credentials: 'include', 
        body: body ? JSON.stringify(body) : undefined, 
      });

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error(`API Error: Non-JSON response from ${endpoint} (${method})`, response.statusText, jsonError);
        throw new Error(`Server cavabı JSON formatında deyil: ${response.statusText}`);
      }

      if (!response.ok) {
        if ((response.status === 401 || response.status === 403) &&
            !['/user/login', '/user/register', '/user/confirm-account'].includes(endpoint)) {
          logout(); 
          throw new Error("Sessiyanızın müddəti bitib. Zəhmət olmasa yenidən daxil olun.");
        }
        console.error(`API Error: ${endpoint} (${method}) failed with status ${response.status}`, result.message || result);
        throw new Error(result.message || `API sorğusu uğursuz oldu: HTTP ${response.status}`);
      }

      console.log(`API Success: ${endpoint} (${method})`, result);
      return { success: true, data: result.data || result }; 
    } catch (err) {
      setError(err.message); 
      console.error(`API Catch Error (${endpoint} ${method}):`, err.message);
      return { success: false, error: err.message };
    }
  };

  const checkAuthStatus = async () => {
    setLoading(true);
    try {
      const result = await apiRequest("/user/me", { method: "GET" });
      if (result.success && result.data && result.data.user) {
        setUser(result.data.user); 
        localStorage.setItem("user", JSON.stringify(result.data.user)); 
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Auth status check error:", error);
      setUser(null);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
      setIsInitialized(true); 
    }
  };

  useEffect(() => {
    if (BASE_URL && !isInitialized) {
      checkAuthStatus();
    }
  }, [BASE_URL, isInitialized]);

  const login = async (email, password) => {
    if (!email || !password) {
      setError("Email və şifrə sahələri tələb olunur");
      return false;
    }
    setLoading(true);
    setError(null);

    const result = await apiRequest("/user/login", {
      method: "POST",
      body: { email, password }, 
    });

    if (result.success) {
      await checkAuthStatus();
      setLoading(false);
      return true;
    } else {
      setError(result.error);
      setLoading(false);
      return false;
    }
  };

  const register = async (username, email, password) => {
    if (!username || !email || !password) {
      setError("İstifadəçi adı, email və şifrə sahələri tələb olunur");
      return false;
    }
    setLoading(true);
    setError(null);

    const result = await apiRequest("/user/register", {
      method: "POST",
      body: { username, email, password }, 
    });

    if (result.success) {
      setLoading(false);
      return true;
    } else {
      setError(result.error);
      setLoading(false);
      return false;
    }
  };

  const confirmEmail = async (email, confirmCode) => {
    if (!email || !confirmCode) {
      setError("Email və təsdiq kodu tələb olunur.");
      return false;
    }
    setLoading(true);
    setError(null);

    const result = await apiRequest("/user/confirm-account", {
      method: "POST",
      body: { email, confirmCode }, 
    });

    if (result.success) {
      await checkAuthStatus(); 
      setLoading(false);
      return true;
    } else {
      setError(result.error);
      setLoading(false);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, error, register, login, logout, confirmEmail, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;