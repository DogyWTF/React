import style from "./Plug.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Plug() {
  return (
    <div className={style.app}>
      <Sidebar/>
      <div className={style.chat}>
        <div className={style.logo}>
          <img src={logo} alt="sendmymess" />
          <div className={style.logoText}>
            <div>S</div>
            <div>e</div>
            <div>n</div>
            <div>d</div>
            <div>m</div>
            <div>y</div>
            <div>m</div>
            <div>e</div>
            <div>s</div>
            <div>s</div>
          </div>
        </div>
        <p>
          A completely anonymous messenger that protects your data from hacking.
          Your privacy is our priority. We use advanced encryption technology to
          ensure maximum security for all your communications.
        </p>
        <Link className={style.link} to="/1">
          Start communication
        </Link>
      </div>
    </div>
  );
}

export default Plug;
