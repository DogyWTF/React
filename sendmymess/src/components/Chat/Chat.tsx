import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { userAPI } from "../../services/UserService";
import { messageAPI } from "../../services/MessageService";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Chat.module.scss";
import arrowBlack from "../../assets/arrow black.png";
import settingBlack from "../../assets/setting black.png";
import { useData, useDataMonth } from "../../hooks/time";
import Loader from "../Loader/Loader";
import Message from "./Message/Message";
import InputField from "../InputField/InputField";
import { useTextCropping } from "../../hooks/textCropping";

function Chat() {
  const params = useParams<{ id: string & number }>();
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(false);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const changeSidebarHidden = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  if (!params.id) {
    return <h1>No user ID found.</h1>;
  }
  const {
    data: messages,
    isLoading: isLoadingMsg,
    error: errorMsg,
  } = messageAPI.useGetUserMessageQuery(params.id);
  const { data: user } = userAPI.useGetUserQuery(params.id);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }
    };
    scrollToBottom();
  }, [messages]);
  return (
    <div className={isSidebarHidden ? style.appHidden : style.app}>
      <div className={isSidebarHidden ? style.sidebarHidden : style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.chat}>
        <div className={style.header}>
          <img
            onClick={changeSidebarHidden}
            className={isSidebarHidden ? style.arrowRotate : style.arrow}
            src={arrowBlack}
            alt="arrow"
          />
          <div className={style.userInfo}>
            <h2 className={style.userName}>
              {user?.name
                ? user.name.length > 45
                  ? useTextCropping(user.name, 45) + "..."
                  : user.name
                : ""}
            </h2>
            <h4 className={style.userDescription}>
              {user?.description
                ? user.description.length > 110
                  ? useTextCropping(user.description, 110) + "..."
                  : user.description
                : ""}
            </h4>
            <p className={style.lastActive}>
              {user?.isOnline
                ? "Active"
                : user?.lastActive
                ? `Was active on ${useDataMonth(user.lastActive)} ${useData(
                    user.lastActive
                  )?.getDate()} at ${useData(
                    user.lastActive
                  )?.getHours()}:${useData(user.lastActive)?.getMinutes()}`
                : ""}
            </p>
          </div>
          <img className={style.setting} src={settingBlack} alt="setting" />
        </div>
        <div ref={chatBoxRef} className={style.chatBox}>
          {isLoadingMsg && (
            <div className={style.loader}>
              <Loader />
            </div>
          )}
          {messages &&
            messages?.allMessages.map((message) => {
              if (message.msg) {
                return <Message key={message.id} message={message} />;
              }
              return (
                <div
                  key={message.dateCommunication}
                  className={style.dateCommunication}
                >
                  <p>
                    {useDataMonth(message.dateCommunication)}{" "}
                    {useData(message.dateCommunication)?.getDate()}
                  </p>
                </div>
              );
            })}
          {!!!messages?.allMessages.length && !isLoadingMsg && !errorMsg && (
            <div className={style.loader}>
              <div className={style.noMessages}>
                There are no messages. To start a conversation, write something
                in the input field.
              </div>
            </div>
          )}
        </div>
        <InputField params={params.id} />
      </div>
    </div>
  );
}

export default Chat;
