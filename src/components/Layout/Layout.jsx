import { Link, Outlet, useLocation } from 'react-router-dom';
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>User Data Management</h1>
      </header>

      <div className="main-container">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>
                <Link 
                  to="/" 
                  className={isActiveRoute('/') ? 'active' : ''}
                >
                  Add User
                </Link>
              </li>
              <li>
                <Link 
                  to="/users" 
                  className={isActiveRoute('/users') ? 'active' : ''}
                >
                  View Users
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} User Data Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;