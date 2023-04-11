import { StoryFn, Meta } from "@storybook/angular";
import { SlideboxComponent } from "./slidebox.component";

export default {
  title: "SI/SlideboxComponent",
  component: SlideboxComponent,
  argTypes: {},
} as Meta;

export const Playground: StoryFn<SlideboxComponent> = (
  args: SlideboxComponent
) => ({ props: args });
