import { Component, OnInit } from '@angular/core';
import {ItemDto} from '../dto/item-dto';
import {ItemService} from '../service/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemDto: ItemDto = new ItemDto();
  itemList: Array<ItemDto> = [];
  constructor(private item: ItemService) {
    this.getItem();
  }

  ngOnInit() {
  }

  itemSave(): void {
    this.item.itemSave(this.itemDto).subscribe(result => {
      if (result) {
        alert('Success');
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

  deleteItem(code: number) {
    if (confirm('Are you sure ? ')) {
      this.item.deleteItem(code)
        .subscribe(result => {
            if (result) {
              this.getItem();
            } else {
            }
          }
        );
    }
  }

}
