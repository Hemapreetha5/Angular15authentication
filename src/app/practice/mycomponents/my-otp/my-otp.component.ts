import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-my-otp',
  templateUrl: './my-otp.component.html',
  styleUrls: ['./my-otp.component.css']
})
export class MyOtpComponent implements OnInit, OnDestroy{
  otpForm!: FormGroup; // Form group for OTP input
  errorMessage: string = ''; // Variable to hold error messages
  countdown: number = 60; // Set countdown to 60 seconds
  countdownDisplay: string = '01:00'; // String for displaying countdown
  timer: any; // Variable to store the countdown timer
  currentOtp: string = ''; // Variable to hold the current OTP
  isResendDisabled: boolean = true; // Flag to disable the resend button

  constructor(private fb: FormBuilder, private router: Router, private otpService: AuthService) {}

  ngOnInit(): void {
    // Initialize the form with a control for OTP code
    this.otpForm = this.fb.group({
      otpCode: [null, [Validators.required, Validators.maxLength(6)]] // Validators for required and maxlength
    });

    this.fetchOtp(); // Fetch the initial OTP
    this.startCountdown(); // Start the countdown timer
  }

  fetchOtp() {
    // Fetch OTP from the AuthService
    this.otpService.getOtp().subscribe(
      response => {
        if (response && response.length > 0) {
          this.currentOtp = response[0].code; // Store the fetched OTP
          console.log('Fetched OTP:', this.currentOtp);
        } else {
          console.error('No OTP found in response'); // Log error if no OTP is found
        }
      },
      error => {
        console.error('Error fetching OTP:', error); // Log error if there is a fetching issue
      }
    );
  }

  startCountdown() {
    // Start the countdown for the OTP
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--; // Decrement countdown
        const minutes = Math.floor(this.countdown / 60); // Calculate minutes
        const seconds = this.countdown % 60; // Calculate seconds
        this.countdownDisplay = `${this.pad(minutes)}:${this.pad(seconds)}`; // Update countdown display
      } else {
        clearInterval(this.timer); // Stop the timer when it reaches 0
        this.isResendDisabled = false; // Enable the resend button when countdown reaches 0
      }
    }, 1000); // Update every second
  }

  pad(num: number): string {
    // Helper function to pad numbers with a leading zero if less than 10
    return num < 10 ? '0' + num : num.toString();
  }

  onLoginClick() {
    // Navigate back to the login page
    this.router.navigate(['/login']);
  }

  onLandingClick() {
    // Handle the form submission
    if (this.otpForm.valid) {
      const enteredOtp = this.otpForm.get('otpCode')?.value; // Get entered OTP
      console.log('Entered OTP:', enteredOtp);
      console.log('Current OTP:', this.currentOtp);
      
      // Check if the entered OTP matches the current OTP
      if (enteredOtp === this.currentOtp) {
        this.router.navigate(['/pin-reset-successful']); // Navigate to success page if matched
      } else {
        // Set error message if OTP is incorrect or expired
        this.errorMessage = 'The verification code you entered is incorrect or has expired. Please double-check and try again.';
      }
    } else {
      this.otpForm.markAllAsTouched(); // Mark all fields as touched to display validation errors
    }
  }

  onResendCode() {
    // Handle the resend OTP button click
    console.log('Resend OTP clicked');
    this.fetchOtp(); // Fetch a new OTP
    this.countdown = 60; // Reset the countdown
    this.isResendDisabled = true; // Disable the resend button until countdown restarts
    this.startCountdown(); // Restart the countdown
  }

  ngOnDestroy() {
    // Cleanup to clear the timer when the component is destroyed
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
