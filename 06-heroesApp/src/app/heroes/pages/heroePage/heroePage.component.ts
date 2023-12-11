import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-page',
  standalone: false,
  template: `<p>heroePage works!</p>`,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class HeroePageComponent implements OnInit {

  ngOnInit(): void { }

}
