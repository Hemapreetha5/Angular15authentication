// import { Component, inject } from '@angular/core';
// import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  // private _formBuilder = inject(FormBuilder);

  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // isLinear = false;


  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isLinear = true;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    // Step 1 form group
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    // Step 2 form group
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  // Method to print form values to the console
  saveForm() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      console.log('First Step Value:', this.firstFormGroup.value);
      console.log('Second Step Value:', this.secondFormGroup.value);
    } else {
      console.log('Please complete the form!');
    }
  }
}
