import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { NgxMasonryModule } from 'ngx-masonry';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kid-art-wall';
  
  images = [
    { src: '/assets/img/christmas.jpg', alt: 'Image 1' },
    { src: '/assets/img/easter_bunnies.jpg', alt: 'Image 2' },
    { src: '/assets/img/spring_bird.jpg', alt: 'Image 3' }
  ];
}