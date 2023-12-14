import React from "react";

import Dummy from "./Dummy";

export default {
  title: "Components/Dummy",
  component: Dummy,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Dummy {...args} />;

export const DummyComponent = Template.bind({});
