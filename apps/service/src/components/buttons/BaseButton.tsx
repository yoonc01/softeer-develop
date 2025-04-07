import React from "react";

interface BaseButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

function BaseButton({
  children,
  onClick,
  className = "",
  disabled,
}: BaseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${disabled ? "opacity-30 cursor-default" : "opacity-100 hover-scale-ani"} set-center rounded-full cursor-pointer ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default React.memo(BaseButton);
