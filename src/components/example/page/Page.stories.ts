import { moduleMetadata, Meta, StoryFn } from "@storybook/angular";
import { CommonModule } from "@angular/common";

import Button from "../button/button.component";
import Header from "../header/header.component";
import Page from "./page.component";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    moduleMetadata({
      declarations: [Button, Header],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const Playground: StoryFn<Button> = (args: Button) => ({ props: args });
