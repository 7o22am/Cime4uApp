import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup(
    {

      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    }

  );
  constructor(private _AuthService: AuthService, public _Router: Router) { }
  ngOnInit(): void {
     
  }

  onSubmit() {
    this._AuthService.login(this.loginForm.value).subscribe((res) => {
      if (res.message.message == "login sucess") {

        localStorage.setItem("userName", res.message.userData[0].userName);
        localStorage.setItem("email", res.message.userData[0].email);
        alert('wellcome back ..  ' + res.message.userData[0].userName);
        this._AuthService.SaveUserData();
        this._Router.navigate(['home'])
      }
      else if (res.message == "User Not Found!") {
        alert(res.message + "  Regist Free Now")
        this._Router.navigate(['register'])
      }
      else {
        alert(res.message)
      }
    })




  }

}
