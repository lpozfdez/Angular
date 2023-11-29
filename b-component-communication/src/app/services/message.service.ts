import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessageByService( elem: string ){
    return `EL ${elem} USA UN SERVICIO`;
  }

}
