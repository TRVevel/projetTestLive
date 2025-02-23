import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from "./greeting/greeting.component";
import { PostListComponent } from "./post-list/post-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingComponent, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetTestLive';
}
