import { Injectable } from '@angular/core';
import { Logger } from '../interfaces/logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {
  constructor() { }
  info(val) {
    this.saveLog(val, 'info');
  }
  error(val) {
    this.saveLog(val, 'error');
  }
  log(val) {
    this.saveLog(val, 'log');
  }
  warn(val) {
    this.saveLog(val, 'warn');
  }

  saveLog(val, type) {
    const key = `log_${type}`;
    const logs = JSON.parse(localStorage.getItem(key) || '[]');
    logs.push(val);
    localStorage.setItem(key, JSON.stringify(logs));
  }
}
