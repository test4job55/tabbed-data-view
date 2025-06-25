import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import the ProductsView component
import { ProductsView } from './products-view/products-view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    ProductsView
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // The main app component is now simplified as all product handling is in ProductsView
}
