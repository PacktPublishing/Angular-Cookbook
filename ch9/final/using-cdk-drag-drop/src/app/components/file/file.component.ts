import { Component, Input, OnInit } from '@angular/core';
import { IFile } from 'src/app/interfaces';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  @Input() file: IFile;
  constructor() {}

  ngOnInit(): void {}
}
