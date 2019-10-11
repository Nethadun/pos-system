import {Component, OnInit} from '@angular/core';
import {OrderDto} from '../dto/order-dto';
import {OrderService} from '../service/order.service';
import {CustomerDto} from '../dto/customer-dto';
import {ServiceService} from '../service/service.service';
import {ItemDto} from '../dto/item-dto';
import {ItemService} from '../service/item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dto: OrderDto = new OrderDto();
  orderList: Array<OrderDto> = [];
  customerDto: CustomerDto = new CustomerDto();
  customerList: Array<CustomerDto> = [];
  itemDto: ItemDto = new ItemDto();
  itemList: Array<ItemDto> = [];
  searchText: string;

  constructor(private orderService: OrderService, private Customer: ServiceService, private item: ItemService) {
    this.getCustomer();
    this.getItem();
    this.loadItems();
  }

  ngOnInit() {
  }

  getCustomer() {
    this.orderService.getCustomers('', 0, 0).subscribe(result => {
      if (result) {
        this.customerList = result;
      }
    });
  }

  getItem() {
    this.item.getItems('', 0, 0).subscribe(result => {
      if (result) {
        this.itemList = result;
      }
    });
  }

  orderSave(): void {
    this.orderService.saveOrder(this.dto).subscribe(result => {
      if (result) {
        alert('Success');
      }
    });
  }

  // loadIssues() {
  //   this.issueService.searchIssues()
  //     .subscribe(result => {
  //       this.issueList = result;
  //       console.log("ISSUES:" + JSON.stringify(this.issueList));
  //     });
  // }

  loadItems() {
    this.item.searchItem()
      .subscribe(result => {
        this.itemList = result;
        console.log('item: ' + JSON.stringify(this.itemList));
      });
  }
}
