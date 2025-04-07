import type { Meta, StoryObj } from "@storybook/react";
import BlueButton from "@/components/buttons/BlueButton";

const meta: Meta<typeof BlueButton> = {
  title: "Components/BlueButton",
  component: BlueButton,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof BlueButton>;

export const Default: Story = {
  args: {
    children: "Blue Button",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Blue",
    disabled: true,
  },
};
