import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  canDeleteItems: boolean;
}

export const APP_CONFIG = new InjectionToken<IAppConfig>('APP_CONFIG');

export const AppConfig: IAppConfig = {
  canDeleteItems: true,
};
