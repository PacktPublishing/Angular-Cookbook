import { Component, Input, OnInit } from '@angular/core';
import { IFile } from 'src/app/interfaces';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FileIconService } from 'src/app/core/services/file-icon.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  @Input() file: IFile;
  fileIcon: IconDefinition;
  constructor(private fileIconService: FileIconService) {}

  ngOnInit(): void {
    this.fileIcon = this.fileIconService.getFileIcon(this.file.name);
  }
}
