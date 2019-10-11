import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {CustomerDto} from '../dto/customer-dto';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa('systemadmin:1234')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  customerSave(customer: CustomerDto) {
    return this.http.post<Array<any>>('http://localhost:8810/api/comtech/test/customer', customer, httpOption);
  }

  customerUpdate(customer: CustomerDto) {
    return this.http.put<Array<any>>('http://localhost:8810/api/comtech/test/customer', customer, httpOption);
  }

  deleteCustomer(cid: number) {
    return this.http.delete<Array<any>>('http://localhost:8810/api/comtech/test/customer/' + cid, httpOption);
  }

  getCustomers(text: string, count: number, page: number) {
    return this.http.get<Array<any>>('http://localhost:8810/api/comtech/test/customer' + '?text=' + text + '&count=' + count +
      '&page=' + page, httpOption);
  }
}
