import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    //template: '<div> <h1>{{title}}</h1> <p>Bienvenue dans Facturation</p> </div>',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Facturation';
}