import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {

  @Input() public messageParent: string = '';//Propiedad q es llenada desde el htmlPadre

  @Output() public messageChildObs = new Subject<string>();
  @Output() public messageChildOutput = new EventEmitter<string>();
  @Output() public messageToParent = new EventEmitter<string>();

  constructor( private mService: MessageService ){}


  //Se cambia el mensaje mediante un evento Output
  setMessageEmit(){
    let m:string = 'EL HIJO USA UN EVENTO @OUTPUT';
    this.messageChildOutput.emit( m );
  }

  //Se cambia el mensaje mediante Subject
  setMessageByObs(){
    let m:string = 'EL HIJO USA UN OBSERVABLE';
    this.messageChildObs.next(m);
  }

  setMessageByService(){
    let m =this.mService.getMessageByService( 'HIJO' );
    this.messageToParent.emit( m );
  }

}
