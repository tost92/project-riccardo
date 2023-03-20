import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  hide: boolean = true;
  user!:User;
  constructor(public loginService:LoginService,public router:Router) {
    console.log('Costruttore');
  }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin() {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

   get f(){ return this.formLogin.controls}


  accessLogin(){
    this.user = {
      username:"",
      email:this.f['email'].value,
      password:this.f['password'].value
    }

 const autenticazione = this.loginService.loginUser(this.user.email,this.user.password).valueOf();
  if(autenticazione){
  this.router.navigate(["home"])
  }else{
    alert("Password errata");
  }
  }
}
