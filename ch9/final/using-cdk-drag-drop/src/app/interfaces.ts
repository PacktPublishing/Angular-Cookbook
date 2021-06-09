import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

export interface IFile {
  name: string;
  icon?: IconDefinition;
}

export interface IFolder {
  name: string;
  files: IFile[];
}
