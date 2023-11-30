import { Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';
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
  setMessageByInput(){
    this.message = 'EL PADRE USA UNA PROPIEDAD @INPUT';
  }

  //Se cambia el mensaje mediante observable
  setMessageByObs( elem: HTMLElement ){

    fromEvent<PointerEvent>( elem , 'click' ).pipe(
      map( elem => this.message = 'EL PADRE USA UN OBSERVABLE' )
    ).subscribe(console.log);
  }

  //Se cambia el mensaje mediante un servicio
  setMessageByService(){
    this.message = this.msServ.getMessageByService( 'PADRE' );
  }

  //Trae el mensaje desde el hijo mediante el evento Output
  getMessageChildOutput(msg: string){
    console.log(msg)
    this.messageChild = msg;
  }

  //Trae el Subject con el mensaje del hijo
  getMessageChildObs( val: string ){
    this.messageChild = val;
  }

  ///Trae el mensaje mediante uso de un servicio
  getMessageByService(msg: string){
    this.messageChild = msg;
  }


}
