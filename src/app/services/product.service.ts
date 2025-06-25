import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { ProductResponse, Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // Fallback data in case JSON loading fails
  private fallbackProducts: Product[] = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
      images: ['https://cdn.dummyjson.com/product-images/1/1.jpg']
    },
    {
      id: 2,
      title: 'iPhone X',
      description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
      images: ['https://cdn.dummyjson.com/product-images/2/1.jpg']
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description: 'Samsung\'s new variant which goes beyond Galaxy',
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
      images: ['https://cdn.dummyjson.com/product-images/3/1.jpg']
    },
    {
      id: 4,
      title: 'MacBook Pro',
      description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: 'Apple',
      category: 'laptops',
      thumbnail: 'https://cdn.dummyjson.com/product-images/6/thumbnail.png',
      images: ['https://cdn.dummyjson.com/product-images/6/1.png']
    },
    {
      id: 5,
      title: 'Samsung Galaxy Book',
      description: 'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: 'Samsung',
      category: 'laptops',
      thumbnail: 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
      images: ['https://cdn.dummyjson.com/product-images/7/1.jpg']
    }
  ];

  // Load products from static JSON file in assets folder
  getProducts(): Observable<ProductResponse> {
    // Try all possible paths for the JSON file
    return this.http.get<ProductResponse>('./assets/products.json')
      .pipe(
        catchError(() => this.http.get<ProductResponse>('assets/products.json')),
        catchError(() => this.http.get<ProductResponse>('/assets/products.json')),
        catchError(() => {
          console.log('Using fallback product data');
          // Return fallback data if all HTTP requests fail
          return of({
            products: this.fallbackProducts,
            total: this.fallbackProducts.length,
            skip: 0,
            limit: this.fallbackProducts.length
          });
        })
      );
  }
}
