import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private sharedService: AuthService,
    private http: HttpClient
  ) {}
data :any;
  ngOnInit() {
    this.getPosts();
    this.sharedService.logFunctionTriggered$.subscribe(() => {
      this.getPosts();
    });
  }

  getPosts() {
    console.log('Log function in Component A has been called!');
    this.sharedService.getPosts().subscribe(res => {
      this.data = res;
    })
  }
}
