import { Component } from "@angular/core";
import { StoryFn, Meta, moduleMetadata } from "@storybook/angular";

// @ts-ignore
import template from "./calendar.htm";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
