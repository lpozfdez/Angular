import {  Component  } from '@angular/core';
import { Observable, fromEvent, map } from 'rxjs';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-padre',
  standalone: false,
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})

export class PadreComponent {
  message: string = '';
  messageChild: string ='';

  constructor( private msServ: MessageService ){}

  //se cambia el mensaje por input
  getMessageByInput(){
    this.message = 'EL PADRE USA UNA PROPIEDAD @INPUT';
  }

  //Se cambia el mensaje mediante observable
  getMessageByObs( elem: HTMLElement ){
    fromEvent<PointerEvent>( elem , 'click' ).pipe(
      map( elem => this.message = 'EL PADRE USA UN OBSERVABLE' )
    ).subscribe(console.log);
  }

  //Se cambia el mensaje mediante un servicio
  getMessageByService(){
    this.message = this.msServ.getMessageByService( 'PADRE' );
  }

  //Trae el mensaje desde el hijo mediante el evento Output
  getMessageChildOutput(msg: string){
    console.log(msg)
    this.messageChild = msg;
  }



}
