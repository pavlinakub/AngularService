import { Component } from '@angular/core';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent {
  title = 'services-assignment';
}
