import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import type { StoryFn, Meta } from "@storybook/angular";

import Button from "../button/button.component";
import Header from "./header.component";

export default {
  title: "Example/Header",
  component: Header,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: "fullscreen",
  },
} as Meta;

export const Playground: StoryFn<Button> = (args: Button) => ({ props: args });
