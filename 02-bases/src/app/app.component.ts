import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primera app en Angular';
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  reset():number {
    return this.counter=10;
  }


}
