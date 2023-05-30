import { Component } from '@angular/core';
import { Register } from './models/register.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  registers: Register[]=[]
  firstName!: string;
  lastName!: string;
  mail!: string;
  submitted :boolean =false
  

  onSubmit() {
      this.registers.push( new Register(this.firstName,this.lastName,this.mail));

  
      console.log(this.registers)

    }

}
  

