import { Component, OnInit } from '@angular/core';
import { APP_DATA } from '../constants/data';
import { FileIconService } from '../core/services/file-icon.service';
import { IFolder } from '../interfaces';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss'],
})
export class FoldersListComponent implements OnInit {
  folders = APP_DATA;
  selectedFolder: IFolder = null;
  upArrow = faArrowAltCircleUp;
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

  onFileDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
