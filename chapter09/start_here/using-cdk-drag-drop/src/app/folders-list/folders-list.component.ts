import { Component, OnInit } from '@angular/core';
import { APP_DATA } from '../constants/data';
import { FileIconService } from '../core/services/file-icon.service';
import { IFolder } from '../interfaces';

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss'],
})
export class FoldersListComponent implements OnInit {
  folders = APP_DATA;
  selectedFolder: IFolder = null;
  constructor(private fileIconService: FileIconService) {
    this.folders = this.folders.map((folder) => {
      return {
        ...folder,
        files: folder.files.map((file) => {
          return {
            ...file,
            icon: this.fileIconService.getFileIcon(file.name),
          };
        }),
      };
    });
  }

  ngOnInit(): void {}

  toggleFolderSelect(folder: IFolder) {
    if (folder === this.selectedFolder) {
      this.selectedFolder = null;
      return;
    }
    this.selectedFolder = folder;
  }
}
