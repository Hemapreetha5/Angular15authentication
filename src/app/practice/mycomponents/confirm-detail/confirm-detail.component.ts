import { Component } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-confirm-detail',
  templateUrl: './confirm-detail.component.html',
  styleUrls: ['./confirm-detail.component.css']
})
export class ConfirmDetailComponent {
  isEditVisible: boolean = false;
  addressForm: FormGroup;
  confirmDetails: FormGroup; 
  constructor(private fb: FormBuilder) {
    this.confirmDetails = this.fb.group({
      name:['',Validators.required],
      lastname:['', Validators.required]
    });
    this.addressForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
  }
  onEdit() {
    this.isEditVisible = !this.isEditVisible;
  }
  onCancel() {
    this.addressForm.reset();
  }
  onReset(){
    this.addressForm.reset();
    this.confirmDetails.reset();
  }
  onSave() {
    if (this.addressForm.valid) {
      alert("Form validated");
    }
    else {
      alert("All fields required");
    }
  }
  onSubmit() {
    if (this.confirmDetails?.valid && this.addressForm?.valid) {
      alert("Form validated");
      this.isEditVisible = false;
    }
    else {
      alert("All fields required");
      this.markAllAsTouched(this.confirmDetails);
    this.markAllAsTouched(this.addressForm);
    }
  }
  private markAllAsTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
}
