import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import style from "./InputField.module.scss";

import myAvatarBlack from "../../assets/my avatar black.png";
import openFolder from "../../assets/open folder.png";
import closeFolder from "../../assets/close folder.png";
import emoji from "../../assets/emoji.png";
import gif from "../../assets/gif.png";
import send from "../../assets/send.png";
import { messageAPI } from "../../services/MessageService";
import { IUserMessage } from "../../types/types";

interface InputField {
  params: string;
}

const InputField: React.FC<InputField> = ({ params }) => {
  const [isFolderHover, setIsFolderHover] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const [createMessage, {}] = messageAPI.useCreateMessageMutation();

  const handleFolderEnter = () => {
    setIsFolderHover(true);
  };
  const handleFolderLeave = () => {
    setIsFolderHover(false);
  };

  const inputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const sendMessage = async () => {
    await createMessage({
      params,
      message: {
        isMyMsg: true,
        msg: text,
        time: 1690287540,
        read: false,
      } as IUserMessage,
    });
  };

  return (
    <div className={style.inputField}>
      <img className={style.myAvatar} src={myAvatarBlack} alt="avatar" />
      <div className={style.input}>
        <TextareaAutosize
          maxLength={1500}
          placeholder="Write a comment..."
          value={text}
          maxRows={18}
          onChange={inputChange}
        />

        <div className={style.inputBtn}>
          <div className={style.folder}>
            <img
              onMouseEnter={handleFolderEnter}
              onMouseLeave={handleFolderLeave}
              src={isFolderHover ? openFolder : closeFolder}
              alt="folder"
            />
          </div>
          <img src={emoji} alt="emoji" />
          <img src={gif} alt="gif" />
          <div onClick={sendMessage} className={style.send}>
            <img src={send} alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
