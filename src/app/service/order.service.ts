import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderDto} from '../dto/order-dto';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa('systemadmin:1234')
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getCustomers(text: string, count: number, page: number) {
    return this.http.get<Array<any>>('http://localhost:8810/api/comtech/test/customer' + '?text=' + text + '&count=' + count +
      '&page=' + page, httpOption);
  }

  saveOrder(order: OrderDto) {
    return this.http.post<Array<any>>('http://localhost:8810/api/comtech/test/item', order, httpOption);
  }
}
