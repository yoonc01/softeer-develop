import React from "react";
import BaseButton from "@/components/buttons/BaseButton";

interface WhiteButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

function WhiteButton({
  children,
  onClick,
  disabled = false,
}: WhiteButtonProps) {
  return (
    <BaseButton
      onClick={onClick}
      className="text-neutral-black bg-neutral-white"
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
}

export default React.memo(WhiteButton);
