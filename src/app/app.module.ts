import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from 'src/material.module';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { CustomerComponent } from './customer/customer.component';
import { RegComponent } from './practice/mycomponents/reg/reg.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { PracticeComponent } from './practice/practice/practice.component';
import { GetComponent } from './practice/mycomponents/get/get.component';
import { InterceptorComponent } from './practice/mycomponents/interceptor/interceptor.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewComponent } from './practice/mycomponents/view/view.component';
import { TabContentComponent } from './practice/mycomponents/tab-content/tab-content.component';
import { ObservableGetComponent } from './practice/mycomponents/observable-get/observable-get.component';
import { ViewtwoComponent } from './practice/mycomponents/viewtwo/viewtwo.component';
import { ClientNameComponent } from './practice/mycomponents/client-name/client-name.component';
import { LinksLocalstorageComponent } from './practice/mycomponents/links-localstorage/links-localstorage.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    UpdatepopupComponent,
    CustomerComponent,
    RegComponent,
    PracticeComponent,
    GetComponent,
    InterceptorComponent,
    ViewComponent,
    TabContentComponent,
    ObservableGetComponent,
    ViewtwoComponent,
    ClientNameComponent,
    LinksLocalstorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTabsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
