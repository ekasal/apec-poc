import { Component } from "@angular/core";
import { StoryFn, Meta } from "@storybook/angular";

// @ts-ignore
import template from "./labo-form.htm";
@Component({ selector: "apec-labo-form", template: template({}) })
class LaboForm {}

export default {
  title: "Maquette/LaboForm",
  component: LaboForm,
  argTypes: {},
} as Meta;

export const Playground: StoryFn<LaboForm> = (args: LaboForm) => ({
  props: args,
});
