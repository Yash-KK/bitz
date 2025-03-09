type ButtonProps = {
  text: string;
  onClick: () => void;
  className: string;
};
const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} type="button" className={`${className}`}>
      {text}
    </button>
  );
};

export default Button;
