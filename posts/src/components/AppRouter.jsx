import { Route, Routes, Navigate } from "react-router-dom";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import Login from "../pages/Login.jsx";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.js";
import Loader from "../ui/Loader/Loader.jsx";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {isAuth ? (
        <Routes>
          <Route element={<About />} path="/about" />
          <Route element={<Posts />} path="/posts" />
          <Route element={<PostIdPage />} path="/posts/:id" />
          <Route path="/login" element={<Navigate to="/posts" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route element={<Login />} path="/login" />
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
