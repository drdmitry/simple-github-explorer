import type { FC, PropsWithChildren } from "react";

export interface IButtonProps extends PropsWithChildren {
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<IButtonProps> = ({ disabled = false, onClick, children }) => {
  return (
    <button
      type="button"
      className="bg-sky-500 bg-gradient-to-br from-sky-300 to-sky-500 hover:to-sky-600 active:to-sky-700 text-white shadow-sm font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline disabled:from-sky-100 disabled:to-sky-200 disabled:cursor-no-drop"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
