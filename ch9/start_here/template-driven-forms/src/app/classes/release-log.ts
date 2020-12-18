import { Apps } from '../constants/apps';
import { AppVersion } from './app-version';

export class ReleaseLog {
  app: Apps;
  version: AppVersion
  message: string;
  constructor (app: Apps, version: AppVersion) {
    this.app = app;
    this.version = version;
    this.message = `Version ${this.version} released for app ${this.app}`
  }
}
