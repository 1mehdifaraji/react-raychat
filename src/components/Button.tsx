import { FC, HTMLProps } from "react";

interface ButtonProps {
  onClick: () => void;
  title: string;
  disabled?: boolean;
  className?: HTMLProps<HTMLButtonElement>["className"];
}

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  className = "",
  disabled,
}) => (
  <button
    disabled={disabled}
    className={`rounded-md transition-all min-w-max w-full md:w-32 py-3 md:py-2 ${
      disabled ? "bg-slate-300" : "bg-slate-900"
    } text-white text-sm ${className}`}
    title={title}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
