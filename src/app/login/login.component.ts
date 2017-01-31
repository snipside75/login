import { Component, OnInit } from '@angular/core';
import {MediaService} from "../services/media.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username : string = '';
  private password : string = '';
  constructor(private mediaService : MediaService) { }

  ngOnInit() {
  }

  login = () => {
    const user = {
     username: this.username,
      password: this.password
    };
    this.mediaService.setUser(user)
    this.mediaService.login();
}
}
