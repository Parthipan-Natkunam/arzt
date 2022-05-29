import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@arzt/core/Button";

export default {
  title: "Core/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  label: "Primary Button",
  clickHandler: () => console.log("Primary Button Clicked"),
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Secondary Button",
  clickHandler: () => alert("Secondary Button Clicked"),
};

export const Tertiary = ButtonTemplate.bind({});
Tertiary.args = {
  variant: "tertiary",
  label: "Tertiary Button",
  clickHandler: () => alert("Tertiary Button Clicked"),
};

export const Success = ButtonTemplate.bind({});
Success.args = {
  variant: "success",
  label: "Success Button",
  clickHandler: () => alert("Success Button Clicked"),
};

export const Info = ButtonTemplate.bind({});
Info.args = {
  variant: "info",
  label: "Info Button",
  clickHandler: () => alert("Info Button Clicked"),
};

export const Warning = ButtonTemplate.bind({});
Warning.args = {
  variant: "warning",
  label: "Warning Button",
  clickHandler: () => alert("Warning Button Clicked"),
};

export const Danger = ButtonTemplate.bind({});
Danger.args = {
  variant: "danger",
  label: "Danger Button",
  clickHandler: () => alert("Danger Button Clicked"),
};
