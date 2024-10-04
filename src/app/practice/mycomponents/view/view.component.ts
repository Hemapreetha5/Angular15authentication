import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
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
