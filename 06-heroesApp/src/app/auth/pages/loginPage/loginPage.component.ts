import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: false,
  template: `<p>loginPage works!</p>`,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class LoginPageComponent implements OnInit {

  ngOnInit(): void { }

}
