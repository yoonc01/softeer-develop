import React from "react";
import BaseButton from "@/components/buttons/BaseButton";

interface BlueButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

function BlueButton({ onClick, disabled = false, children }: BlueButtonProps) {
  return (
    <BaseButton
      onClick={onClick}
      className="bg-primary-blue"
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
}

export default React.memo(BlueButton);
