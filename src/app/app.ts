import { Component, QueryList, signal, ViewChild, ViewChildren, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarMaterial } from './components/nav-bar-material/nav-bar-material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from "@angular/material/toolbar";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconRegistry } from "@angular/material/icon";
import { NavBarMaterialSidebar } from "./components/nav-bar-material-sidebar/nav-bar-material-sidebar";
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';

const halloweenIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-80v-170q-39-17-68.5-45.5t-50-64.5q-20.5-36-31-77T80-520q0-158 112-259t288-101q176 0 288 101t112 259q0 42-10.5 83t-31 77q-20.5 36-50 64.5T720-250v170H240Zm80-80h40v-80h80v80h80v-80h80v80h40v-142q38-9 67.5-30t50-50q20.5-29 31.5-64t11-74q0-125-88.5-202.5T480-800q-143 0-231.5 77.5T160-520q0 39 11 74t31.5 64q20.5 29 50.5 50t67 30v142Zm100-200h120l-60-120-60 120Zm-80-80q33 0 56.5-23.5T420-520q0-33-23.5-56.5T340-600q-33 0-56.5 23.5T260-520q0 33 23.5 56.5T340-440Zm280 0q33 0 56.5-23.5T700-520q0-33-23.5-56.5T620-600q-33 0-56.5 23.5T540-520q0 33 23.5 56.5T620-440ZM480-160Z"/></svg>';
const christmasIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-246 337-145q-11 11-27.5 11T282-146q-12-11-12-27.5t12-28.5l158-158v-80h-80L201-281q-11 11-27.5 11T145-282q-11-11-11-27.5t11-27.5l101-103H119q-17 0-28-11.5T80-480q0-17 11.5-28.5T120-520h126L145-622q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l158 158h80v-80L281-758q-11-11-11-27.5t12-28.5q11-11 27.5-11t27.5 11l103 100v-126q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v126l102-100q11-11 27.5-11t28.5 11q11 12 11 28.5T678-758L520-600v80h80l158-158q11-11 27.5-11t28.5 12q11 11 11 27.5T814-622L714-520h126q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H714l100 103q11 11 11 27.5T814-282q-12 12-28.5 12T758-282L600-440h-80v80l158 159q11 11 11 27.5T677-145q-11 11-27.5 11T622-145L520-246v127q0 17-11.5 28T480-80q-17 0-28.5-11.5T440-120v-126Z"/></svg>';
const remove = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-440v-80h560v80H200Z"/></svg>';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarMaterial,
    MatSidenavModule,
    MatToolbar,
    CommonModule,
    MatIcon,
    NavBarMaterialSidebar,
    MatButtonModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App{

  isMobile$!: Observable<boolean>;
  openDrawer = false;             // Control para el drawer en móvil

  ngOnInit() {
    this.isMobile$ = this.breakpointObserver
      .observe(['(max-width: 1294px)'])
      .pipe(
        map(result => result.matches),
        shareReplay(1)
      );
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);

    iconRegistry.addSvgIconLiteral('halloweenIcon', sanitizer.bypassSecurityTrustHtml(halloweenIcon));
    iconRegistry.addSvgIconLiteral('chistmasIcon', sanitizer.bypassSecurityTrustHtml(christmasIcon));
    iconRegistry.addSvgIconLiteral('remove', sanitizer.bypassSecurityTrustHtml(remove));
  }

  toggleDrawer() {
    this.openDrawer = !this.openDrawer;
  }

  protected readonly title = signal('LearnAngular'); 

  openFil:boolean = false;
}

