import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  constructor(private builder:FormBuilder,
    private service: AuthService,
    private toastr: ToastrService
  ){

  }
  get id() {
    return this.regForm.get('id');
  }
  regForm=this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required, Validators.minLength(5)])),
    name:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(2)])),
    password:this.builder.control('', Validators.compose([Validators.required, Validators.pattern(''),Validators.minLength(4)])),
    gender:this.builder.control(''),
    role:this.builder.control('', Validators.required),
    isactive:this.builder.control(''),
    favVal: this.builder.group({
      red: [false],   // default value is false (unchecked)
      green: [false],    
      blue: [false]    
    })
  })
  proceedRegister(){
    if(this.regForm.valid){
      this.service.RegUser(this.regForm.value).subscribe((response) => {
        console.log("Response is", response);
        
        this.toastr.success("Register Successfully");
      })
    }
    else{
      this.toastr.error("Please fill required fields")
    }
  }
}
