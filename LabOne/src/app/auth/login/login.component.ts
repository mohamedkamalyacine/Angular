import { Component } from '@angular/core';
import { User } from 'src/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userModel= new User("","","","");
}
