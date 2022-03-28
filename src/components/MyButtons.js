const MyButton = ({ text, type, onClick }) => {
  // type이 positive면 type=positive이고 나머지는 type=default로
  const btnType = ["positive"].includes(type) ? type : "default";
  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
