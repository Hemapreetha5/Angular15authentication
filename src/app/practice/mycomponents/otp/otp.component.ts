import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit, OnDestroy {
  otpForm!: FormGroup;  // Use '!' to tell TypeScript this will be initialized in ngOnInit
  errorMessage: string = '';
  countdown: number = 300; // Set to 300 seconds (5 minutes)
  countdownDisplay: string = '05:00'; // Initial display for 5 minutes
  timer: any;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otpCode: [null, [Validators.required, Validators.maxLength(6)]]
    });

    this.startCountdown(); // Start countdown timer
  }

  // Start countdown timer
  startCountdown() {
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--; // Decrease countdown by 1 second

        // Calculate minutes and seconds
        const minutes = Math.floor(this.countdown / 60);
        const seconds = this.countdown % 60;

        // Update countdownDisplay in "MM:SS" format
        this.countdownDisplay = `${this.pad(minutes)}:${this.pad(seconds)}`;
      } else {
        clearInterval(this.timer); // Clear the timer once the countdown reaches 0
      }
    }, 1000); // Update every 1 second
  }

  // Helper function to add leading zero for minutes and seconds
  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  onLoginClick() {
    // Handle "Back" button action
    console.log('Back button clicked');
    this.router.navigate(['/login']); // Navigate back to login
  }

  onLandingClick() {
    if (this.otpForm.valid) {
      // Mock validation for OTP
      const enteredOtp = this.otpForm.get('otpCode')?.value;
      if (this.validateOtp(enteredOtp)) {
        console.log('OTP is valid');
        this.router.navigate(['/pin-reset-successful']); // Navigate to Pin Reset Successful page
        this.sendSuccessEmail(); // Simulate sending success email
      } else {
        this.errorMessage = 'The verification code you entered is incorrect or has expired. Please double-check and try again.';
      }
    } else {
      this.otpForm.markAllAsTouched();
      console.log('OTP Form is invalid');
    }
  }

  validateOtp(otp: string): boolean {
    // Simulate OTP validation logic (this could be replaced with real validation via API)
    const validOtp = '123456'; // Replace with actual validation logic
    return otp === validOtp;
  }

  sendSuccessEmail() {
    // Simulate email sending logic
    console.log('Success email sent to the registered email address');
  }

  onResendCode() {
    console.log('Resend OTP clicked');
    // Simulate resend OTP logic
    this.countdown = 300; // Reset timer to 5 minutes
    this.startCountdown(); // Restart countdown
    console.log('New OTP sent to the registered email address');
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // Clear timer when component is destroyed
    }
  }
}
