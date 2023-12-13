import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService  implements OnInit{
  constructor(private _HttpClient: HttpClient) { }
  ngOnInit(): void {
    
  }
  userData = new BehaviorSubject('');

  SaveUserData() {
    let email = JSON.stringify(localStorage.getItem("email"));
    this.userData.next(email);
    console.log("serev .. " + this.userData);

  }

logOut(){
  localStorage.removeItem("email");
  localStorage.removeItem("userName");
  this.userData.next('');
}

  register(formData: object): Observable<any> {

    return this._HttpClient.post('http://localhost:3000/register', formData)
  }

  login(formData: object): Observable<any> {

    return this._HttpClient.post('http://localhost:3000/login', formData)
  }



}
