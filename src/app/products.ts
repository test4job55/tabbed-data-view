import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    console.log('Učitavanje podataka iz lokalne JSON datoteke (public direktorij)');
    
    // Koristim products.json iz public direktorija kao što je konfigurirano u angular.json
    // Prema angular.json konfiguraciji, public direktorij je uključen kao asset
    return this.http.get<any>('products.json').pipe(
      tap(response => console.log('Loaded JSON data from local file:', response)),
      map(data => {
        if (data && data.products) {
          console.log(`Found ${data.products.length} products from local JSON file`);
          return data.products;
        } else {
          console.warn('No products found in local JSON data');
          return [];
        }
      }),
      catchError(error => {
        console.error(`Error loading from products.json:`, error);
        console.error('Falling back to empty array');
        return of([]);
      })
    );
  }
}
