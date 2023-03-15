import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formLogin!: FormGroup ;
hide: any;

constructor(){

}
  ngOnInit(): void {
this.initFormLogin();
  }

  initFormLogin(){
    this.formLogin = new FormGroup({
      email: new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
    })
  }
}
