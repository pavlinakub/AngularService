import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  addAccounts($event: { name: string; status: string }) {
    throw new Error('Method not implemented.');
  }
  onStatusChanged($event: { id: number; newStatus: string }) {
    throw new Error('Method not implemented.');
  }
  accounts: { name: string; status: string }[] = []; //empty array
  constructor(private accountsService: AccountsService) {}
  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
