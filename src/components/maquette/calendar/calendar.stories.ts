import { Component } from "@angular/core";
import { StoryFn, Meta } from "@storybook/angular";
import { Environment } from "nunjucks/index";
// import calendar from "./calendar.html";
// console.log(calendar);
// const env = nunjucks.÷configure('../../../../')

@Component({ selector: "apec-calendar", template: "./calendar.html" })
class Calendar {}

export default {
  title: "Maquette/Calendar",
  component: Calendar,
  argTypes: {},
} as Meta;

export const Playground: StoryFn<Calendar> = (args: Calendar) => ({
  props: args,
});
