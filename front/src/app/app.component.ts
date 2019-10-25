import { Component } from '@angular/core';
import { environment } from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'confecciones-valentinas-front';
  urlFrontImages=environment.urlFrontImages;
  images=["http://localhost:4200/assets/images/val2.jpeg","http://localhost:4200/assets/images/val3.jpeg","http://localhost:4200/assets/images/val4.jpeg","http://localhost:4200/assets/images/val5.jpeg","http://localhost:4200/assets/images/val7.jpeg","http://localhost:4200/assets/images/val8.jpeg"];
}
