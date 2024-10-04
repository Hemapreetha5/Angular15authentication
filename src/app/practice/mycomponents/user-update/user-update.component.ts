import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  constructor(private sharedService: AuthService) {}

  onButtonClick() {
    this.sharedService.triggerLogFunction();
  }
}
