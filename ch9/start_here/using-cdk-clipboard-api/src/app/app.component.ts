import { Component, HostListener, OnInit } from '@angular/core';
import { ContentType } from './constants/content-type';
import { IMAGE_URL } from './constants/image-url';
import { LOREM_IPSUM_TEXT } from './constants/lorem-ipsum-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Using CDK Clipboard to work with system clipboard";
  contentCopied: ContentType;
  contentTypes = ContentType;
  loremIpsumText = LOREM_IPSUM_TEXT;
  imageUrl = IMAGE_URL;

  @HostListener('window:click', ['$event'])
  onClickPropagation() {
    if (this.contentCopied !== null) {
      this.resetCopiedHash();
    }
  }

  constructor() {
    this.resetCopiedHash();
  }

  copyContent($event, type: ContentType) {
    if ($event) {
      $event.stopImmediatePropagation();
    }
    this.contentCopied = type;
  }

  ngOnInit() {
  }

  resetCopiedHash() {
    this.contentCopied = null;
  }
}
