import { FC } from "react";
import { IUser } from "../../../types/types";
import style from "./UserItem.module.scss";
import userWhite from "../../../assets/user white.png";
import { useNavigate, useParams } from "react-router-dom";
import userBlack from "../../../assets/user black.png";
import { useTextCropping } from "../../../hooks/textCropping";

interface UserItem {
  user: IUser;
}

const UserItem: FC<UserItem> = ({ user }) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const changeUserPage = () => {
    navigate(`/${user.id}`);
  };

  return (
    <div
      onClick={changeUserPage}
      className={
        user.id == Number(params.id) ? style.userActive : style.userNotActive
      }
      style={{ zIndex: `${999999 - user.id}` }}
    >
      <img
        src={
          user.avatar
            ? user.avatar
            : user.id == Number(params.id)
            ? userWhite
            : userBlack
        }
        alt="user"
      />
      <div className={style.userText}>
        <div className={style.userTextActive}>
          <h2 className={style.userName}>
            {user.name.length > 18
              ? useTextCropping(user.name, 18) + "..."
              : user.name}
          </h2>
          <div className={user.unread ? style.userUnread : ""}>
            {user.unread > 99 ? "99+" : user.unread === 0 ? "" : user.unread}
          </div>
          <div className={user.isOnline ? style.userOnline : ""}></div>
        </div>
        <p className={style.usetLastMsg}>
          {!user.lastMsg
            ? "You have no recent messages"
            : user.lastMsg.length > 100
            ? useTextCropping(user.lastMsg, 100)+"..."
            : user.lastMsg}
        </p>
      </div>
    </div>
  );
};

export default UserItem;
