import Button from "../components/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonSize } from "../types/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Special/Extra/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
    icon: {
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    size: ButtonSize.MEDIUM,
    label: "Test",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: ButtonSize.LARGE,
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: ButtonSize.SMALL,
    label: "Button",
  },
};
