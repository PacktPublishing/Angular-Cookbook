import { Clipboard } from '@angular/cdk/clipboard';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Custom PWA Installable Prompt';

  constructor(private clipboard: Clipboard) {}

  ngOnInit() {}
}
