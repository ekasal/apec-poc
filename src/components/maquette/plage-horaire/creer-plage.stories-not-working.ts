import { Component } from "@angular/core";
import { StoryFn, Meta } from "@storybook/angular";

// @ts-ignore
import template from "./creer-plage.htm";
@Component({ selector: "apec-creer-plage", template: template({}) })
class CreerPlage {}

export default {
  title: "Maquette/CreerPlage",
  component: CreerPlage,
  argTypes: {},
} as Meta;

export const Playground: StoryFn<CreerPlage> = (args: CreerPlage) => ({
  props: args,
});
