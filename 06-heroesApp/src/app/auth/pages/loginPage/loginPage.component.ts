import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: 'loginPage.component.html',
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class LoginPageComponent implements OnInit {

  ngOnInit(): void { }

}
