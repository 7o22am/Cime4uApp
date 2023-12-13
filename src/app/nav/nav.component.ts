import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  isLogin = true;
  constructor(private _AuthService: AuthService) {

  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() != "") {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
        console.log(this._AuthService.userData.getValue())
      }
    })

  }
  logout() {
    this._AuthService.logOut();
  }

}
