import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(NgModel) model: NgModel;
  // @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // this.input = this.model || this.control;

    this.input = this.model;

    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
    }
  }

  isValid(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  isInvalid(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
