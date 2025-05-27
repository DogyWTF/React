import { FC } from "react";
import { useData } from "../../../hooks/time";
import style from "./Message.module.scss";
import { IUserMessage } from "../../../types/types";
import checkedBlack from "../../../assets/checked black.png";

interface MessageItem {
  message: IUserMessage;
}

const Message: FC<MessageItem> = ({ message }) => {
  return (
    <div>
      {message.isMyMsg ? (
        <div className={style.myMessage}>
          <img
            className={message.read ? style.checked : style.notChecked}
            src={checkedBlack}
            alt="✓"
          />
          <p>
            {useData(message.time)?.getHours()}:
            {useData(message.time)?.getMinutes()}
          </p>
          <div className={style.myMessageText}>{message.msg}</div>
        </div>
      ) : (
        <div className={style.thyMessage}>
          <div className={style.thyMessageText}>{message.msg}</div>
          <p>
            {useData(message.time)?.getHours()}:
            {useData(message.time)?.getMinutes()}
          </p>
          <img
            className={message.read ? style.checked : style.notChecked}
            src={checkedBlack}
            alt="✓"
          />
        </div>
      )}
    </div>
  );
};

export default Message;
