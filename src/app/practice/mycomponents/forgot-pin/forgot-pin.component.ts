import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-pin',
  templateUrl: './forgot-pin.component.html',
  styleUrls: ['./forgot-pin.component.css']
})
export class ForgotPinComponent {
  imgBack = '/featherIcons/arrow-left.svg';
  forgotPinForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.forgotPinForm = this.fb.group({
      studentNumber: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(9)]),
      ],
    });
  }
  get studentNumber() {
    return this.forgotPinForm.get('studentNumber');
  }
  onLoginClick() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    if (this.forgotPinForm.valid) {
      this.router.navigate(['/otp']);
    } else {
      this.forgotPinForm.markAllAsTouched();
    }
  }

}
