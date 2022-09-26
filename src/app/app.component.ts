import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'polyclinicAngular';
  public slides: Array<any>= [
    { src: "assets/images/amsterdamslide__800x600.jpg" },
    { src: "assets/images/foyleswarslide__800x600.jpg" },
    { src: "assets/images/lands-endslide__800x600.jpg" },
    { src: "assets/images/trustslide-2__800x600.jpg" }
  ];
}
