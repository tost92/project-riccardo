import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked
{
  title = 'project-riccardo';
  logged: boolean = false;
  constructor(private autService: LoginService, private changeDetector: ChangeDetectorRef) {}





  ngOnInit(): void {
    this.checkLogin();
  }
  ngAfterContentInit(): void {
    this.checkLogin();
  }
  ngAfterViewInit(): void {
    this.checkLogin();
  }
  ngAfterViewChecked(): void {
    this.checkLogin();
    this.changeDetector.detectChanges()
  }



  checkLogin() {
    this.logged = this.autService.isLogged();
  }
}
