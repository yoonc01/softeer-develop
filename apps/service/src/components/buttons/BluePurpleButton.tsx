import React from "react";
import BaseButton from "@/components/buttons/BaseButton";

interface BluePurpleButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

function BluePurpleButton({
  onClick,
  disabled = false,
  children,
}: BluePurpleButtonProps) {
  return (
    <BaseButton
      onClick={onClick}
      className="bg-blue-to-purple"
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
}

export default React.memo(BluePurpleButton);
