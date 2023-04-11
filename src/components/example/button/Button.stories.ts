import { StoryFn, Meta } from "@storybook/angular";
import Button from "./button.component";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Playground: StoryFn<Button> = (args: Button) => ({ props: args });
