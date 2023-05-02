import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  webSitesList:any[] = ['Facebook', 'Twitter', 'Google'];
  userModel= new User("","","","");
  
  constructor(private fb:FormBuilder){}

  ngOnInit(){
  }

  /*
  registerationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  */

  registerationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]],
    email:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })

  get userName(){
    return this.registerationForm.get('userName');
  }

  get email(){
    return this.registerationForm.get('email');
  }

  get password(){
    return this.registerationForm.get('password');
  }

  get confirmPassword(){
    return this.registerationForm.get('confirmPassword');
  }
}
