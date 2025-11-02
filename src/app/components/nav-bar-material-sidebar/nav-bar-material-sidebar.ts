import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: 'app-nav-bar-material-sidebar',
  imports: [MatSidenavModule, MatToolbar],
  templateUrl: './nav-bar-material-sidebar.html',
  styleUrl: './nav-bar-material-sidebar.css'
})
export class NavBarMaterialSidebar {

}
