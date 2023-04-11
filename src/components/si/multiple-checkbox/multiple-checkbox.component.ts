import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "apec-multiple-checkbox",
  templateUrl: "./multiple-checkbox.component.html",
})
export class MultipleCheckboxComponent {
  @Input() label: string;
  @Input() data: any;
  @Input() get model() {
    return this.idsNom;
  }

  set model(val) {
    this.idsNom = val;
    this.modelChange.emit(this.idsNom);
  }
  @Output() change = new EventEmitter();
  @Output() modelChange = new EventEmitter();
  idsNom: any;

  updateCritere(id: number) {
    let selection = this.idsNom;
    if (!selection) {
      selection = [];
    }
    // si le critere est deja selectionne, on le retire de la selection
    if (selection.indexOf(id) > -1) {
      selection = selection.filter((critereId: any) => {
        return critereId !== id;
      });
    } else {
      selection.push(id);
    }

    this.model = selection;
    this.change.emit();
  }

  isCheckedBox(id: any) {
    if (this.idsNom) {
      return this.idsNom.indexOf(id) > -1;
    }
    return false;
  }

  trackByIndex(index: any) {
    return index;
  }
}
