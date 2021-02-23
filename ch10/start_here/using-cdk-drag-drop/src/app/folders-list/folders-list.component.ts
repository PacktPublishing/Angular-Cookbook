import { Component, Input, OnInit } from '@angular/core';
import { APP_DATA } from '../constants/data';
import { IFolder } from '../interfaces';

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss'],
})
export class FoldersListComponent implements OnInit {
  folders = APP_DATA;
  selectedFolder: IFolder = null;
  constructor() {}

  ngOnInit(): void {}

  toggleFolderSelect(folder: IFolder) {
    if (folder === this.selectedFolder) {
      this.selectedFolder = null;
      return;
    }
    this.selectedFolder = folder;
  }
}
