import { Component } from "@angular/core";
import { StoryFn, Meta } from "@storybook/angular";

// import templateNunjucks from "./creer-page.html";
// import nunjucks from "nunjucks";
// const template = nunjucks.configure({}).renderToString(templateNunjucks);

@Component({
  selector: "apec-creer-plage",
  templateUrl: "./creer-plage.html",
  // template,
})
class CreerPlageComponent {}

export default {
  title: "Maquette/CreerPlage",
  component: CreerPlageComponent,
  argTypes: {},
} as Meta;

export const Playground: StoryFn<CreerPlageComponent> = (
  args: CreerPlageComponent
) => ({ props: args });
