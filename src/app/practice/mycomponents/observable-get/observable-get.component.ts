import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-observable-get',
  templateUrl: './observable-get.component.html',
  styleUrls: ['./observable-get.component.css']
})
export class ObservableGetComponent {
  posts: any[] = [];

  constructor(private dataService: AuthService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
