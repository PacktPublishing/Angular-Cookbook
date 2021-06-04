import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Optional,
} from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { Logger } from '../../interfaces/logger';
@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent implements OnInit {
  @Input() vName;
  logs: string[] = [];
  logger: Logger;
  constructor(@Optional() private loggerService: LoggerService) {
    if (!this.loggerService) {
      this.logger = console;
    } else {
      this.logger = this.loggerService;
    }
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    const currValue = changes.vName.currentValue;
    let message;
    if (changes.vName.isFirstChange()) {
      message = `initial version is ${currValue.trim()}`;
    } else {
      message = `version changed to ${currValue.trim()}`;
      this.logger.log(message);
    }
    this.logs.push(message);
  }
}
