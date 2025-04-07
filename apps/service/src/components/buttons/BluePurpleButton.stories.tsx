import type { Meta, StoryObj } from "@storybook/react";
import BluePurpleButton from "@/components/buttons/BluePurpleButton";

const meta: Meta<typeof BluePurpleButton> = {
  title: "Components/BluePurpleButton",
  component: BluePurpleButton,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof BluePurpleButton>;

export const Default: Story = {
  args: {
    children: "Blue to Purple",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Can't Click",
    disabled: true,
  },
};
