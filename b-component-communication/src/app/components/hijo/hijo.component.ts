import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {

  //messageObs: string = 'EL HIJO USA UN OBSERVABLE';
  @Input() public messageParent: string = '';//Propiedad q es llenada desde el htmlPadre
  @Output() public messageChildObs = new EventEmitter<string>();//evento a pasar por observable
  @Output() public messageChildOutput = new EventEmitter<string>();

  messageEmit(){
    let m:string = 'EL HIJO USA UN EVENTO @OUTPUT';
    this.messageChildOutput.emit( m );
  }

  //Se cambia el mensaje mediante observable
  setMessageByObs(){
    let m:string = 'EL HIJO USA UN OBSERVABLE';


  }

}
