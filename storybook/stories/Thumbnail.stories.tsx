import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Thumbnail } from "@arzt/blocks/Thumbnail";

export default {
  title: "Blocks/Thumbnail",
  component: Thumbnail,
} as ComponentMeta<typeof Thumbnail>;

const ImageTemplate: ComponentStory<typeof Thumbnail> = (args) => (
  <Thumbnail {...args} />
);

export const ThumbnailBlock = ImageTemplate.bind({});
ThumbnailBlock.args = {
  imageAlt: "Sample Image",
  imageSrc: "https://randomuser.me/api/portraits/women/70.jpg",
  heading: "Lisa Simpson",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverr mollis diam, id semper purus pellentesque eget. Nulla nec aliquam turpis.Integer ex odio, viverra ut velit vel, molestie rutrum mauris. Aenean eget ante at turpis viverra pulvinar eu non arcu. Donec nec neque eu sapienmattis hendrerit.",
  subHeading: "Product Designer",
};
