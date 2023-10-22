import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.sesrvice';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService], //step1
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {} //step2

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status); //step 3
    this.accountsService.statusUpdated.emit(status);
  }
}
