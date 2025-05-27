import style from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [style.myModal];
  if (visible) {
    rootClasses.push(style.active);
  }

  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={style.myModalContent}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
