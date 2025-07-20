import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthProvider.jsx';
import {Link} from 'react-router'
import './ProtectedRoute.css';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated, isInitialized, loading } = useContext(AuthContext);

  if (!isInitialized || loading) {
    return (
      <div className="protected-route-loading">
        <div className="protected-route-loading__container">
          <div className="protected-route-loading__spinner">
            <div className="protected-route-loading__spinner__circle"></div>
          </div>
          <p className="protected-route-loading__text">Yüklənir...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/loginregister" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return (
      <div className="protected-route-unauthorized">
        <div className="protected-route-unauthorized__container">
          <div className="protected-route-unauthorized__icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
              <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h2 className="protected-route-unauthorized__title">Giriş İcazəniz Yoxdur</h2>
          <p className="protected-route-unauthorized__message">
            Təəssüf ki, bu səhifəyə daxil olmaq üçün lazımi səlahiyyətiniz yoxdur. 
            Bu bölməyə yalnız müəyyən istifadəçi qrupları daxil ola bilər.
          </p>
          <div className="protected-route-unauthorized__details">
            <p className="protected-route-unauthorized__details__text">
              <strong>Sizin rolunuz:</strong> {user?.role || 'Müəyyən edilməyib'}
            </p>
            {allowedRoles && (
              <p className="protected-route-unauthorized__details__text">
                <strong>Lazım olan rollar:</strong> {allowedRoles.join(', ')}
              </p>
            )}
          </div>
            <Link to={'/'} className="protected-route-unauthorized__button">
            Geri Qayıt
            </Link>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;