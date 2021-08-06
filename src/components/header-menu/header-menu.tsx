import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import styles from "./header-menu.module.css";

export function HeaderMenu() {
  const isAuthPage = useRouteMatch("/auth");
  const dispatch = useDispatch();
  const { removeUser } = bindActionCreators(actionCreators, dispatch);
  const { currentUser } = useSelector((state: any) => state.user);

  const handleLogOut = () => removeUser();
  return (
    <>
      {!isAuthPage ? (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light py-1">
          <div className="container">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <span
                    className={`nav-link dropdown-toggle ${styles.username}`}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>{currentUser ? currentUser.username : " "}</span>
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/profile" className={styles.link}>
                        <span
                          className={`dropdown-item ${styles.dropdownItem}`}
                        >
                          profile
                        </span>
                      </Link>
                    </li>
                    <li onClick={handleLogOut}>
                      <Link to="/" className={styles.link}>
                        <span
                          className={`dropdown-item ${styles.dropdownItem}`}
                        >
                          logout
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/" className={styles.link}>
                    <span className="nav-link active">Tasks</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gifs" className={styles.link}>
                    <span className="nav-link active">Gifs</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/users" className={styles.link}>
                    <span className="nav-link active">Users</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}
