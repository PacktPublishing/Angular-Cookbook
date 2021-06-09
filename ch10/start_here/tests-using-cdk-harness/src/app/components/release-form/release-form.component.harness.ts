import { ComponentHarness } from '@angular/cdk/testing';

export class ReleaseFormComponentHarness extends ComponentHarness {
  static hostSelector = 'app-release-form';
  protected getSubmitButton = this.locatorFor('button[type=submit]');
  protected getAppNameInput = this.locatorFor(`#appName`);
  protected getAppVersionInput = this.locatorFor(`#versionNumber`);
  protected getVersionErrorEl = async () => {
    const alerts = await this.locatorForAll('.alert.alert-danger')();
    return alerts[1];
  };

  async getSelectedAppName() {
    const appSelectInput = await this.getAppNameInput();
    return appSelectInput.getProperty('value');
  }

  async clickSubmit() {
    const submitBtn = await this.getSubmitButton();
    return await submitBtn.click();
  }

  async setNewAppVersion(version: string) {
    const versionInput = await this.getAppVersionInput();
    return await versionInput.sendKeys(version);
  }

  async isVersionErrorShown() {
    const versionErrorEl = await this.getVersionErrorEl();
    const versionErrorText = await versionErrorEl.text();
    return (
      versionErrorText.trim() === 'Please write an appropriate version number'
    );
  }
}
