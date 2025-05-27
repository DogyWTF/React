import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import MyButton from "../ui/button/MyButton";
import MyInput from "../ui/input/MyInput";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div style={{ width: "800px", marginTop: "5px" }}>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>Log in</MyButton>
      </form>
    </div>
  );
};

export default Login;
