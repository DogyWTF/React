import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import MyButton from "../button/MyButton.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <div className="navbar__links">
        <MyButton
          style={{ color: "#fff", border: "1px solid #fff" }}
          onClick={logout}
        >
          Log out
        </MyButton>
        <div>
          <Link style={{ margin: "0 5px" }} className="navbar__btn" to="/about">
            About the site
          </Link>
          <Link className="navbar__btn" to="/posts">
            Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
