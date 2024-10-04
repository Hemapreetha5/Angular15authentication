import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { AuthService } from '../../../service/auth.service';
@Component({
  selector: 'app-viewtwo',
  templateUrl: './viewtwo.component.html',
  styleUrls: ['./viewtwo.component.css']
})
export class ViewtwoComponent {
  constructor(private sharedService: AuthService) {}

  onButtonClick() {
    this.sharedService.triggerLogFunction();
  }
}
