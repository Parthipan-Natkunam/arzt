import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "@arzt/core/Link";

export default {
  title: "Core/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const LinkTemplate: ComponentStory<typeof Link> = (args) => (
  <Link {...args}> Link Text </Link>
);

export const UnderlinedLink = LinkTemplate.bind({});
UnderlinedLink.args = {
  href: "https://www.google.com",
  target: "_blank",
  underline: true,
};

export const NonUnderlinedLink = LinkTemplate.bind({});
NonUnderlinedLink.args = {
  href: "https://www.google.com",
  target: "_blank",
};
