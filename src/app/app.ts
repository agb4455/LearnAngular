import { Component, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { NavBarMaterial } from './components/nav-bar-material/nav-bar-material';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarMaterial],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('LearnAngular'); 
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
