import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image as ImageComponent } from "@arzt/core/Image";

export default {
  title: "Core/Image",
  component: ImageComponent,
} as ComponentMeta<typeof ImageComponent>;

const ImageTemplate: ComponentStory<typeof ImageComponent> = (args) => (
  <ImageComponent {...args} />
);

export const Image = ImageTemplate.bind({});
Image.args = {
  alt: "Sample Image",
  src: "https://randomuser.me/api/portraits/women/70.jpg",
  width: 120,
};

export const RoundedImage = ImageTemplate.bind({});
RoundedImage.args = {
  alt: "Sample Image",
  src: "https://randomuser.me/api/portraits/women/70.jpg",
  width: 120,
  rounded: true,
};
