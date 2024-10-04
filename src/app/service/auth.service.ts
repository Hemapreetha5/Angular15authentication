import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }


  private logFunctionSubject = new Subject<void>();

  // Observable for the log function trigger
  logFunctionTriggered$ = this.logFunctionSubject.asObservable();

  // Method to trigger the log function
  triggerLogFunction() {
    this.logFunctionSubject.next();
  }


  
  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
  RegUser(inputDataVal:any){
    return this.http.post('http://localhost:3000/reguser', inputDataVal);
  }
  GetRegUser(){
    return this.http.get('http://localhost:3000/reguser');
  }
  getPosts(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/data');
  }
  
}
