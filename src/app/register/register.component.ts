import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error:string="";
  registerationForm: FormGroup = new FormGroup(
    {
      userName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    }

  );
  constructor(public _Router:Router ,private _AuthService:AuthService ) { }
  ngOnInit(): void {
     


  }

  onSubmit() {
    localStorage.setItem("name",this.registerationForm.value.userName);
    localStorage.setItem("email",this.registerationForm.value.email);
    localStorage.setItem("password",this.registerationForm.value.password);

this._AuthService.register(this.registerationForm.value).subscribe((res)=>{
   
if(res.message == "User Created Successfully"){
  alert("User Created Successfully")
  this._Router.navigate(['login']);
}
else
{
   
 this.error=res.message;
}

})

   
  }


}
