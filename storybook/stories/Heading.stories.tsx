import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "@arzt/core/Heading";

export default {
  title: "Core/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const HeadingTemplate: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>Sample Heading</Heading>
);

export const Heading1 = HeadingTemplate.bind({});
Heading1.args = {
  as: "h1",
};

export const Heading2 = HeadingTemplate.bind({});
Heading2.args = {
  as: "h2",
};

export const Heading3 = HeadingTemplate.bind({});
Heading3.args = {
  as: "h3",
};

export const Heading4 = HeadingTemplate.bind({});
Heading4.args = {
  as: "h4",
};

export const Heading5 = HeadingTemplate.bind({});
Heading5.args = {
  as: "h5",
};

export const Heading6 = HeadingTemplate.bind({});
Heading6.args = {
  as: "h6",
};
