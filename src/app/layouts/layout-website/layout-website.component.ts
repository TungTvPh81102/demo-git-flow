import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-layout-website',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './layout-website.component.html',
  styleUrl: './layout-website.component.css',
})
export class LayoutWebsiteComponent {}
