import { StoryFn, Meta } from "@storybook/angular";
import { SlideboxComponent } from "./slidebox.component";

export default {
  title: "SI/SlideboxComponent",
  component: SlideboxComponent,
  argTypes: {
    label: { type: "string", defaultValue: "Slidebox" },
    disabled: { type: "boolean", defaultValue: false },
    dataOn: { type: "string", defaultValue: "ON" },
    dataOff: { type: "string", defaultValue: "OFF" },
  },
} as Meta;

export const Playground: StoryFn<SlideboxComponent> = (
  args: SlideboxComponent
) => ({ props: { ...args } });
