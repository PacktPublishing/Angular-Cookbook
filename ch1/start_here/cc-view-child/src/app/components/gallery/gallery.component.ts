import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pictures: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.pictures = new Array(5).fill(0).map(this.generateImage);
  }

  generateImage() {
    return `https://picsum.photos/200/200?ts${Math.random()*30 + 1}`;
  }

}
