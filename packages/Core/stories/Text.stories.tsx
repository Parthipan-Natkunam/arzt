import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../Text";

export default {
  title: "Core/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const HeadingTemplate: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Sample Heading</Text>
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

const TextTemplate: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra
    mollis diam, id semper purus pellentesque eget. Nulla nec aliquam turpis.
    Integer ex odio, viverra ut velit vel, molestie rutrum mauris. Aenean eget
    ante at turpis viverra pulvinar eu non arcu. Donec nec neque eu sapien
    mattis hendrerit. Vivamus non blandit mauris, nec ultricies leo. Maecenas
    porttitor, odio at fermentum vulputate, diam risus suscipit mauris, ac
    convallis eros lorem a magna. Nam leo ante, aliquet sed suscipit sed,
    convallis a orci. Donec eu nibh bibendum, faucibus odio ac, malesuada
    tortor. Suspendisse consequat mollis lorem, id luctus purus egestas vel.
    Cras lacus nisi, tristique non enim quis, sollicitudin faucibus lacus.
    Curabitur consectetur molestie eleifend. Nunc et massa at ante ullamcorper
    porttitor. Aenean vulputate quis urna sit amet ultricies. Proin eget
    fermentum ante. Cras vitae urna sollicitudin, consequat nisi nec, feugiat
    orci. Ut luctus quis justo vitae porta. Duis malesuada rhoncus est a rutrum.
    Mauris sed accumsan nisi. Aenean in ultricies turpis. Maecenas dapibus, enim
    in faucibus tempus, sapien arcu porttitor tortor, vel vulputate magna urna
    id ante. Sed blandit vel ante quis cursus. Quisque mattis arcu ultricies
    turpis consectetur luctus. Phasellus vel metus orci. Pellentesque iaculis
    convallis ante id convallis. Nullam eu libero fringilla, malesuada leo at,
    tincidunt erat. Aenean a sem ut libero fermentum dignissim vel eu augue.
    Donec mollis blandit nibh, sit amet dictum neque rhoncus id.
  </Text>
);

export const Paragraph = TextTemplate.bind({});
Paragraph.args = {
  as: "p",
};

const SpanTemplate: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Inline Text</Text>
);

export const Span = SpanTemplate.bind({});
Span.args = {
  as: "span",
};
