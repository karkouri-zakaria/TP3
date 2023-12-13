import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products: any;
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get("http://localhost:9999/inventory-service/products?projection=fullProduct").subscribe({
      next : (data: object) => {
        this.products = data;
      },
      error: (err: object) => {},
    })
  }
}
