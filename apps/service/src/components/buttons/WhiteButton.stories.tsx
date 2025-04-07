import type { Meta, StoryObj } from "@storybook/react";
import WhiteButton from "@/components/buttons/WhiteButton";

const meta: Meta<typeof WhiteButton> = {
  title: "Components/WhiteButton",
  component: WhiteButton,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof WhiteButton>;

export const Default: Story = {
  args: {
    children: "White Button",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Can't Click",
    disabled: true,
  },
};
