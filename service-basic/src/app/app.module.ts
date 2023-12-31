import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.sesrvice';

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
