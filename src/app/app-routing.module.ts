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

const routes: Routes = [
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},
 {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
 {path:"practice-crud",component:PracticeComponent},
 {path:"practice-interceptor",component:InterceptorComponent},
 {path:"api-tabs",component:TabContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
