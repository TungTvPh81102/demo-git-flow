import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideBarComponent],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css',
})
export class LayoutAdminComponent {}
