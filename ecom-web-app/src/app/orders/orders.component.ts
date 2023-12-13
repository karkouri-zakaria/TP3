import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  orders: any;
  customerId!: number;
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.customerId = route.snapshot.params["customerId"];
  }
  ngOnInit(): void {
    this.httpClient.get("http://localhost:9999/order-service/orders/search/byCustomerId?projection=fullOrder&customerId="+this.customerId).subscribe({
      next : (data: object) => {
        this.orders = data;
      },
      error: (err: object) => {},
    })
  }

  getOrdersDetails(o: any) {
    this.router.navigateByUrl("order-details/"+o.id)
  }
}
