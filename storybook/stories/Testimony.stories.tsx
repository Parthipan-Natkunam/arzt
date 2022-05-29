import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Testimony } from "@arzt/blocks/Testimony";

export default {
  title: "Blocks/Testimony",
  component: Testimony,
} as ComponentMeta<typeof Testimony>;

const ImageTemplate: ComponentStory<typeof Testimony> = (args) => (
  <Testimony {...args} />
);

export const TestimonyBlock = ImageTemplate.bind({});
TestimonyBlock.args = {
  imageAlt: "Sample Image",
  imageSrc: "https://randomuser.me/api/portraits/women/70.jpg",
  heading: "Lisa Simpson",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverr mollis diam, id semper purus pellentesque eget. Nulla nec aliquam turpis.Integer ex odio, viverra ut velit vel, molestie rutrum mauris. Aenean eget ante at turpis viverra pulvinar eu non arcu. Donec nec neque eu sapienmattis hendrerit.",
  subHeading: "Neuro-Surgeon (MBBS, MS in Neurology)",
};
