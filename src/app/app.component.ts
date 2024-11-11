import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { TopSubMenuComponent } from './top-sub-menu/top-sub-menu.component';
import { ContentListComponent } from "./content-list/content-list.component";
import { PermissionsComponent } from "./permissions/permissions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuComponent, TopSubMenuComponent, ContentListComponent, PermissionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EAMS';
}
