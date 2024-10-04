import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { AuthService } from '../../../service/auth.service';
@Component({
  selector: 'app-viewtwo',
  templateUrl: './viewtwo.component.html',
  styleUrls: ['./viewtwo.component.css']
})
export class ViewtwoComponent {
  posts: any[] = []; // Array to hold the fetched posts
  private subscription: Subscription | undefined; // Initialize to undefined

  constructor(private myDataService: AuthService) {}

  ngOnInit(): void {
    this.fetchPosts(); // Fetch initial data from the server

    // Create an observable that emits every 10 seconds
    this.subscription = interval(1000).subscribe(() => {
      this.fetchPosts(); // Fetch the latest posts every 10 seconds
    });
  }

  // Method to fetch posts from the service
  fetchPosts(): void {
    this.myDataService.getPosts().subscribe(data => {
      this.posts = data; // Update the posts array with the fetched data
    });
  }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
