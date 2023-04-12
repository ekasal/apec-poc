import { Component } from "@angular/core";
import { StoryFn, Meta } from "@storybook/angular";

// @ts-ignore
import template from "./calendar.htm";
@Component({ selector: "apec-calendar", template: template({}) })
class Calendar {}

export default {
  title: "Maquette/Calendar",
  component: Calendar,
  argTypes: {},
} as Meta;

export const Playground: StoryFn<Calendar> = (args: Calendar) => ({
  props: args,
});
