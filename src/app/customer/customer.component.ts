import {Component, OnInit} from '@angular/core';
import {CustomerDto} from '../dto/customer-dto';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerDto: CustomerDto = new CustomerDto();
  customerList: Array<CustomerDto> = [];
  submitted = false;

  constructor(
    private Customer: ServiceService,
  ) {
    this.getCustomer();
  }

  ngOnInit() {
  }

  customerSave(): void {
    this.Customer.customerSave(this.customerDto).subscribe(result => {
      if (result) {
        this.getCustomer();
        alert('Success');
      }
    });
  }

  getCustomer() {
    this.Customer.getCustomers('', 0, 0).subscribe(result => {
      if (result) {
        this.customerList = result;
      }
    });
  }
  deleteCustomer(cid: number) {
    if (confirm('Are you sure ? ')) {
      this.Customer.deleteCustomer(cid)
        .subscribe(result => {
            if (result) {
              this.getCustomer();
            } else {
            }
          }
        );
    }
  }
}
