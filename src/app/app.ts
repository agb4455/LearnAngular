import { Component, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { Main } from "./pages/main/main";
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('LearnAngular'); 
}

bootstrapApplication(Main, {
  providers: [
    provideRouter(routes)
  ]
});
