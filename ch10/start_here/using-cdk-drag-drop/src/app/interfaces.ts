export interface IFile {
  name: string;
}

export interface IFolder {
  name: string;
  files: IFile[];
}
