import { MultipleCheckboxComponent } from "./multiple-checkbox.component";
import { StoryFn, Meta } from "@storybook/angular";

export default {
  title: "SI/MultipleCheckboxComponent",
  component: MultipleCheckboxComponent,
  argTypes: {
    label: { type: "string", defaultValue: "Label" },
    selected: { type: "number" },
  },
} as Meta;

export const Playground: StoryFn<MultipleCheckboxComponent> = (args: any) => {
  const data = [
    { idNomenclature: "1", libelle: "Label 1" },
    { idNomenclature: "2", libelle: "Label 2" },
    { idNomenclature: "3", libelle: "Label 3" },
  ];
  return {
    props: {
      ...args,
      idsNom: args.selected ? data[args.selected].idNomenclature : undefined,
      data,
    },
  };
};
