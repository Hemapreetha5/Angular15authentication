import { Component,OnDestroy  } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
// import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent{
  // onTabChange(event: MatTabChangeEvent) {
  //   alert(`You have switched to: ${event.tab.textLabel}`);
  // }
  data:any;
  constructor(private service: AuthService){

  }
  tab1(){
    this.service.getPosts().subscribe(res => {
      this.data = res;
    })
  }
}
