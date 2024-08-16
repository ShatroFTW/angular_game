import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbNavModule, InventoryComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
