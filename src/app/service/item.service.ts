import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ItemDto} from '../dto/item-dto';
import {Observable} from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa('systemadmin:1234')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  itemSave(item: ItemDto) {
    return this.http.post<Array<any>>('http://localhost:8810/api/comtech/test/item', item, httpOption);
  }

  getItems(text: string, count: number, page: number) {
    return this.http.get<Array<any>>('http://localhost:8810/api/comtech/test/item' + '?text=' + text + '&count=' + count +
      '&page=' + page, httpOption);
  }

  searchItem(): Observable<Array<ItemDto>> {
    return this.http.get<Array<ItemDto>>('http://localhost:8810/api/comtech/test/item', httpOption);
  }

  deleteItem(code: number) {
    return this.http.delete<Array<any>>('http://localhost:8810/api/comtech/test/item' + code, httpOption);
  }
}
