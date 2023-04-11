import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "apec-slidebox",
  templateUrl: "./slidebox.component.html",
})
export class SlideboxComponent {
  @Input() label: string;
  @Input() dataOn = "oui";
  @Input() dataOff = "non";
  @Input() disabled: boolean;
  @Output() change = new EventEmitter();
  @Output() modelChange = new EventEmitter();
  modelValue: any;

  @Input()
  get model() {
    return this.modelValue;
  }

  set model(val) {
    this.modelValue = val;
    this.modelChange.emit(this.modelValue);
  }
}
