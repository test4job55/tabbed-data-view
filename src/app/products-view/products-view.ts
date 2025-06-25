import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ProductsService } from '../products';

@Component({
  selector: 'app-products-view',
  standalone: true,
  imports: [CommonModule, FormsModule, TabViewModule, TableModule, ButtonModule, InputTextModule],
  templateUrl: './products-view.html',
  styleUrl: './products-view.scss'
})
export class ProductsView implements OnInit {
  products: any[] = [];
  categories: string[] = [];
  activeTabIndex = 0;
  loading = true;
  filterText: string = '';
  
  constructor(private productsService: ProductsService) {}
  
  ngOnInit() {
    this.loadProducts();
  }
  
  loadProducts() {
    this.loading = true;
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.extractCategories();
        this.loading = false;
        console.log('ProductsView: Loaded', data.length, 'products');
      },
      error: (err) => {
        console.error('Error loading products in ProductsView:', err);
        this.loading = false;
      }
    });
  }
  
  private extractCategories() {
    this.categories = [...new Set(this.products.map(product => product.category))];
  }
  
  getProductsByCategory(category: string) {
    return this.filteredProducts.filter(product => product.category === category);
  }
  
  get filteredProducts() {
    return this.products.filter(item =>
      JSON.stringify(item).toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
