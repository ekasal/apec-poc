import { MultipleCheckboxComponent } from "./multiple-checkbox.component";
import { StoryFn, Meta } from "@storybook/angular";

export default {
  title: "SI/MultipleCheckboxComponent",
  component: MultipleCheckboxComponent,
  argTypes: {},
} as Meta;

export const Playground: StoryFn<MultipleCheckboxComponent> = (
  args: MultipleCheckboxComponent
) => ({
  props: {
    ...args,
    label: "Mutiple Checkbox",
    idsNom: [],
    data: [
      { idNomenclature: "1", libelle: "Label 1" },
      { idNomenclature: "2", libelle: "Label 2" },
    ],
  },
});
