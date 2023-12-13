import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  customers: any;
  constructor(private httpClient: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.httpClient.get("http://localhost:9999/customer-service/customers?projection=fullCustomer").subscribe({
      next : (data: object) => {
        this.customers = data;
      },
      error: (err: object) => {},
    })
  }

  getOrders(c: any) {
    this.router.navigateByUrl("orders/"+c.id)
  }
}
