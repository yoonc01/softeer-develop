import BaseButton from "@/components/buttons/BaseButton"; // 상대 경로 주의!
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BaseButton> = {
  title: "Components/BaseButton",
  component: BaseButton,
  argTypes: {
    onClick: { action: "clicked" }, // 클릭 이벤트 핸들러 테스트
    className: { control: "text" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {
  args: {
    children: "Click me",
    disabled: false,
    className: "",
  },
};

export const Disabled: Story = {
  args: {
    children: "Can't click this",
    disabled: true,
  },
};
