import { Component, Input, OnInit } from '@angular/core';
import { IFolder } from 'src/app/interfaces';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit {
  @Input() folder: IFolder;
  folderIcon = faFolder;
  constructor() {}

  ngOnInit(): void {}
}
