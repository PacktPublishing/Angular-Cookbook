import { Apps } from '../constants/apps';
import { REGEXES } from '../constants/regexes';

export interface IReleaseLog {
  app: Apps;
  version: string;
}

export class ReleaseLog implements IReleaseLog {
  app: Apps;
  version: string;
  message: string;
  constructor (app: Apps, version: string) {
    this.app = app;
    const validVersion = REGEXES.SEMANTIC_VERSION.test(version);
    if (!validVersion) {
      throw new Error('Invalid version provided. Please provide a valid version as (major.minor.patch)')
    }
    this.version = version;
    this.message = `Version ${this.version} released for app ${this.app}`
  }
}
