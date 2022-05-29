import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "@arzt/core/Text";

export default {
  title: "Core/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

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
