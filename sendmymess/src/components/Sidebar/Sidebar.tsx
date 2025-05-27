import UserItem from "./UserItem/UserItem";
import style from "./sidebar.module.scss";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { userAPI } from "../../services/UserService";
import Loader from "../Loader/Loader";

function Sidebar() {
  const { data: users, isLoading } = userAPI.useFetchAllUsersQuery(20);

  return (
    <div className={style.sidebar}>
      <div className={style.search}>
        <div className={style.logo}>
          <img src={logo} alt="sendmymess" />
          <h3>Sendmymess</h3>
        </div>
        <div className={style.searchEngine}>
          <input type="text" placeholder="Search" />
          <img src={search} alt="search" />
        </div>
      </div>
      <div className={style.chat}>
        {isLoading && (
          <div className={style.loader}>
            <Loader />
          </div>
        )}
        {users && users?.map((user) => <UserItem key={user.id} user={user} />)}
      </div>
    </div>
  );
}

export default Sidebar;
