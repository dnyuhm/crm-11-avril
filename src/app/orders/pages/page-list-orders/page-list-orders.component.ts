import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public myTitle: string;
  public headers: string[];
  public collection!: Order[];

  constructor(private ordersService: OrdersService) {
    this.myTitle = 'my list of beautiful orders';
    this.headers = [
      'Type',
      'Client',
      'nbJours',
      'tjmHT',
      'Total HT',
      'Total TTC',
      'State',
    ];

    this.ordersService.collection$.subscribe((data) => {
      this.collection = data;
      // console.log(this.collection);
    });
  }

  ngOnInit(): void {}

  public changeTitle() {
    this.myTitle = 'mon titre change par magie';
  }
}
