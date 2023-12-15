import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  //Una forma de crearlo
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),//[] son validaciones
  //   price: new FormControl(0, [], []),
  //   storage: new FormControl(0, [], []),

  // });

  //Otra forma de crearlo
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: ['0', [ Validators.required, Validators.min(0) ]],
    inStorage: ['0',[ Validators.required, Validators.min(0) ]],
  })

  constructor( private fb:FormBuilder ) {}

  onSave():void{

    if( this.myForm.invalid) return;
    console.log(this.myForm.value);

  }


}
