import style from "./Button.module.scss";

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, type = "button", onClick, disabled }: Props) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={style.botao}>
      {children}
    </button>
  );
};

export default Button;
