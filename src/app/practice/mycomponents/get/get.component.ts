import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
data:any;
hasError: boolean = false;
constructor(private service: AuthService){

}
ngOnInit(){
  this.service.GetRegUser().subscribe((response) => {
   this.data = response;
   console.log(response);
  })
}
}
