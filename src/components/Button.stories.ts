import Button from "./Button.svelte";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  argTypes: {
    name: { control: "text" },
  },
};

export const Default = (args) => ({
  Component: Button,
  props: args,
  on: {
    click: action("clicked"),
  },
});

export const WithName = Default.bind({});
WithName.args = {
  name: "With a name",
};
