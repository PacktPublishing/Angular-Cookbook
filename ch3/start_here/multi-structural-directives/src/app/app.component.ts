import { Component } from '@angular/core';

export enum Fruit {
  Apple = 'Apple 🍎',
  Banana = 'Banana 🍌',
  Grapes = 'Grapes 🍇',
  Cherries = 'Cherry 🍒'
}

interface IFruit {
  id: number;
  name: Fruit;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedFruit: Fruit = '' as null;
  fruits: string[] = Object.values(Fruit);
  MAX_BUCKET_LENGTH = 10;
  bucket: IFruit[] = [];
  addSelectedFruitToBucket() {
    this.bucket.push({
      id: Date.now(),
      name: this.selectedFruit
    });
  }
  deleteFromBucket(item: IFruit) {
    this.bucket = this.bucket.filter(fruit => fruit.id != item.id);
  }
}
