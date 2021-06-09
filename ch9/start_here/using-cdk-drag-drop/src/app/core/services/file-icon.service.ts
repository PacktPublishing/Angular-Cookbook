import { Injectable } from '@angular/core';
import {
  faFileWord,
  faFilePdf,
  IconDefinition,
  faFile,
} from '@fortawesome/free-regular-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class FileIconService {
  constructor() {}

  getFileIcon(fileName: string): IconDefinition {
    const extension = fileName.substr(fileName.lastIndexOf('.'));
    switch (extension) {
      case '.txt':
        return faFileWord;
      case '.pdf':
        return faFilePdf;
      default:
        return faFile;
    }
  }
}
