import {CustomerDto} from './customer-dto';
import {ItemDto} from './item-dto';

export class OrderDto {
  id: number;
  date: string;
  customer: CustomerDto;
  item: ItemDto;
  qyy: number;
}
