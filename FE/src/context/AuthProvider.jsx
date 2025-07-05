import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import DataContext from "./DataProvider";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const { BASE_URL } = useContext(DataContext);

  const validateToken = useCallback(
    async (token) => {
      try {
        const res = await fetch(`${BASE_URL}/user/validate-token`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        return res.ok;
      } catch (err) {
        console.error("Token validation error:", err);
        return false;
      }
    },
    [BASE_URL]
  );

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const userData = JSON.parse(storedUser);

          if (userData.token) {
            const isValid = await validateToken(userData.token);
            if (isValid) {
              setUser(userData);
            } else {
              localStorage.removeItem("user");
            }
          } else {
            localStorage.removeItem("user");
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        localStorage.removeItem("user");
      } finally {
        setIsInitialized(true);
      }
    };

    initializeAuth();
  }, [validateToken]);

  const apiRequest = useCallback(
    async (endpoint, options = {}) => {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      };

      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || `HTTP ${response.status}: ${response.statusText}`
          );
        }

        return { success: true, data };
      } catch (err) {
        console.error(`API Error (${endpoint}):`, err);
        return { success: false, error: err.message };
      }
    },
    [BASE_URL]
  );

  const login = useCallback(
    async (email, password) => {
      if (!email || !password) {
        setError("Email və şifrə sahələri tələb olunur");
        return false;
      }

      setLoading(true);
      setError(null);

      const result = await apiRequest("/user/login", {
        body: JSON.stringify({ email, password }),
      });

      if (result.success) {
        setUser(result.data);
        localStorage.setItem("user", JSON.stringify(result.data));
        setLoading(false);
        return true;
      } else {
        setError(result.error);
        setLoading(false);
        return false;
      }
    },
    [apiRequest]
  );

  const register = useCallback(
    async (username, email, password) => {
      if (!username || !email || !password) {
        setError("Bütün sahələr tələb olunur");
        return false;
      }

      if (password.length < 6) {
        setError("Şifrə ən azı 6 simvol olmalıdır");
        return false;
      }

      setLoading(true);
      setError(null);

      const result = await apiRequest("/user/register", {
        body: JSON.stringify({ username, email, password }),
      });

      if (result.success) {
        setLoading(false);
        return true;
      } else {
        setError(result.error);
        setLoading(false);
        return false;
      }
    },
    [apiRequest]
  );

  const confirmEmail = useCallback(
    async (email, confirmCode) => {
      if (!email || !confirmCode) {
        setError("Email və təsdiq kodu tələb olunur");
        return false;
      }

      if (confirmCode.length !== 6) {
        setError("Təsdiq kodu 6 rəqəm olmalıdır");
        return false;
      }

      setLoading(true);
      setError(null);

      const result = await apiRequest("/user/confirm", {
        body: JSON.stringify({ email, confirmCode }),
      });

      if (result.success) {
        setLoading(false);
        return true;
      } else {
        setError(result.error);
        setLoading(false);
        return false;
      }
    },
    [apiRequest]
  );

  const resendConfirmation = useCallback(
    async (email) => {
      if (!email) {
        setError("Email tələb olunur");
        return false;
      }

      setLoading(true);
      setError(null);

      const result = await apiRequest("/user/resend-confirmation", {
        body: JSON.stringify({ email }),
      });

      if (result.success) {
        setLoading(false);
        return true;
      } else {
        setError(result.error);
        setLoading(false);
        return false;
      }
    },
    [apiRequest]
  );

  const changePassword = useCallback(
    async (currentPassword, newPassword) => {
      if (!user?.token) {
        setError("Giriş edilməyib");
        return false;
      }

      if (!currentPassword || !newPassword) {
        setError("Cari və yeni şifrə tələb olunur");
        return false;
      }

      if (newPassword.length < 6) {
        setError("Yeni şifrə ən azı 6 simvol olmalıdır");
        return false;
      }

      setLoading(true);
      setError(null);

      const result = await apiRequest("/user/change-password", {
        headers: { Authorization: `Bearer ${user.token}` },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      if (result.success) {
        setLoading(false);
        return true;
      } else {
        setError(result.error);
        setLoading(false);
        return false;
      }
    },
    [apiRequest, user]
  );

  const updateUserProfile = useCallback(
    async (userData) => {
      if (!user?.token) {
        setError("Giriş edilməyib");
        return false;
      }

      setLoading(true);
      setError(null);

      const result = await apiRequest("/user/update-profile", {
        headers: { Authorization: `Bearer ${user.token}` },
        body: JSON.stringify(userData),
      });

      if (result.success) {
        const updatedUser = { ...user, user: result.data.user };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setLoading(false);
        return true;
      } else {
        setError(result.error);
        setLoading(false);
        return false;
      }
    },
    [apiRequest, user]
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");
    setError(null);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  const isAuthenticated = Boolean(user?.token);

  if (!isInitialized) {
    return (
      <div className="auth-loading">
        <div className="loading-spinner"></div>
        <p>Yüklənir...</p>
      </div>
    );
  }

  const value = {
    user,
    loading,
    error,
    isAuthenticated,
    isInitialized,

    login,
    logout,
    register,
    confirmEmail,
    resendConfirmation,
    changePassword,
    updateUserProfile,
    clearError,

    validateToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;