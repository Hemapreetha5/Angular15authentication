import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp', // Component selector for HTML
  templateUrl: './otp.component.html', // Path to the HTML template
  styleUrls: ['./otp.component.css'] // Path to the component's CSS styles
})
export class OtpComponent {
  imgBack = '/featherIcons/arrow-left.svg';
  otpForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.otpForm = this.fb.group({
      otpCode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(4),
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });
  }
  get otpCode() {
    return this.otpForm.get('otpCode');
  }
  onLoginClick() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    if (this.otpForm.valid) {
      this.router.navigate(['/app']);
    } else {
      this.otpForm.markAllAsTouched();
    }
  }
}
