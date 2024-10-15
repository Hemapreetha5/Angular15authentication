// ... other imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit, OnDestroy {
  otpForm!: FormGroup;
  errorMessage: string = '';
  countdown: number = 60; // Set countdown to 60 seconds
  countdownDisplay: string = '01:00';
  timer: any;
  currentOtp: string = '';
  isResendDisabled: boolean = true; // Flag to disable the resend button

  constructor(private fb: FormBuilder, private router: Router, private otpService: AuthService) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otpCode: [null, [Validators.required, Validators.maxLength(6)]]
    });

    this.fetchOtp();
    this.startCountdown();
  }

  fetchOtp() {
    this.otpService.getOtp().subscribe(
      response => {
        if (response && response.length > 0) {
          this.currentOtp = response[0].code;
          console.log('Fetched OTP:', this.currentOtp);
        } else {
          console.error('No OTP found in response');
        }
      },
      error => {
        console.error('Error fetching OTP:', error);
      }
    );
  }

  startCountdown() {
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
        const minutes = Math.floor(this.countdown / 60);
        const seconds = this.countdown % 60;
        this.countdownDisplay = `${this.pad(minutes)}:${this.pad(seconds)}`;
      } else {
        clearInterval(this.timer);
        this.isResendDisabled = false; // Enable the resend button when countdown reaches 0
      }
    }, 1000);
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  onLandingClick() {
    if (this.otpForm.valid) {
      const enteredOtp = this.otpForm.get('otpCode')?.value;
      console.log('Entered OTP:', enteredOtp);
      console.log('Current OTP:', this.currentOtp);
      
      if (enteredOtp === this.currentOtp) {
        this.router.navigate(['/pin-reset-successful']);
      } else {
        this.errorMessage = 'The verification code you entered is incorrect or has expired. Please double-check and try again.';
      }
    } else {
      this.otpForm.markAllAsTouched();
    }
  }

  onResendCode() {
    console.log('Resend OTP clicked');
    this.fetchOtp(); // Fetch new OTP
    this.countdown = 60; // Reset countdown
    this.isResendDisabled = true; // Disable resend button
    this.startCountdown(); // Restart countdown
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
