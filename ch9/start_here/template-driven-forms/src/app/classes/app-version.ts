import { REGEXES } from '../constants/regexes';

export class AppVersion {
  value: string;

  constructor(version: string) {
    const validVersion = REGEXES.SEMANTIC_VERSION.test(version);
    if (!validVersion) {
      throw new Error('Invalid version provided. Please provide a valid version as (major.minor.patch)')
    }
    this.value = version;
  }
}
