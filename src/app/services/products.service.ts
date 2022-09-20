import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, delay, tap, Observable, throwError } from 'rxjs';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = [];

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }

  getAll(): Observable<IProduct[]> {
    // return Observable
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromString: 'limit=5',
        }),
      })
      .pipe(
        delay(500),
        // Save products in local variable
        tap((products) => (this.products = products)),
        catchError(this.errorHandler)
      );
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        // Update local products
        tap((product) => {
          this.products.push(product);
          console.log(this.products);
        })
      );
  }
}
