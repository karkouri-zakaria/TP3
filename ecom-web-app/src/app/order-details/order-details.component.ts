import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    JsonPipe,
    CurrencyPipe,
    DecimalPipe
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  orderDetails: any;
  orderId!: number;
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.orderId = route.snapshot.params["orderId"];
  }
  ngOnInit(): void {
    this.httpClient.get("http://localhost:9999/order-service/fullOrder/"+this.orderId).subscribe({
      next : (data: object) => {
        this.orderDetails = data;
      },
      error: (err: object) => {},
    })
  }
}
