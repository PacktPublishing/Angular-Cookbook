import { ComponentHarness } from '@angular/cdk/testing';

export class ReleaseLogsComponentHarness extends ComponentHarness {
  static hostSelector = 'app-release-logs';
  protected getLogsElements = this.locatorForAll('.logs__item');

  async getLogsLength() {
    const logsElements = await this.getLogsElements();
    return logsElements.length;
  }

  async getLatestLog() {
    const logsElements = await this.getLogsElements();
    return await logsElements[0].text();
  }

  async validateLatestLog(version, app) {
    const latestLogText = await this.getLatestLog();
    return (
      latestLogText.trim() === `Version ${version} released for app ${app}`
    );
  }
}
