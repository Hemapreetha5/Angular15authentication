import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PracticeComponent } from './practice/practice/practice.component';
import { InterceptorComponent } from './practice/mycomponents/interceptor/interceptor.component';
import { TabContentComponent } from './practice/mycomponents/tab-content/tab-content.component';
import { ClientNameComponent } from './practice/mycomponents/client-name/client-name.component';
import { LinksLocalstorageComponent } from './practice/mycomponents/links-localstorage/links-localstorage.component';
import { OtpComponent } from './practice/mycomponents/otp/otp.component';
import { ForgotPinComponent } from './practice/mycomponents/forgot-pin/forgot-pin.component';
import { StepperComponent } from './practice/mycomponents/stepper/stepper.component';

const routes: Routes = [
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},
 {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
 {path:"practice-crud",component:PracticeComponent},
 {path:"practice-interceptor",component:InterceptorComponent},
 {path:"api-tabs",component:TabContentComponent},
 {path:"client",component:ClientNameComponent},
 {path:"link-localstorage",component:LinksLocalstorageComponent},
 {path:"otp",component:OtpComponent},
 {path:"forgot-pin",component:ForgotPinComponent},
 {path:"stepper",component:StepperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
