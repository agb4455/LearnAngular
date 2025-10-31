import { Component, QueryList, signal, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarMaterial } from './components/nav-bar-material/nav-bar-material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from "@angular/material/toolbar";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarMaterial,
    MatSidenavModule,
    MatToolbar,
    CommonModule,
    MatIcon
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App{

  isMobile$!: Observable<boolean>;
  openDrawer = false;             // Control para el drawer en móvil

  ngOnInit() {
    this.isMobile$ = this.breakpointObserver
      .observe(['(max-width: 1000px)'])
      .pipe(
        map(result => result.matches),
        shareReplay(1)
      );
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleDrawer() {
    this.openDrawer = !this.openDrawer;
  }

  protected readonly title = signal('LearnAngular'); 

  openFil:boolean = false;
}

