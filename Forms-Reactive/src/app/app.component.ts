import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm: FormGroup;
  forbiddenUserNames=['Chris', 'Anna']
  
  ngOnInit(){
    this.signupForm=new FormGroup({
    'userData': new FormGroup({

      'username': new FormControl (null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),

    }),
    
    'gender': new FormControl('male'),
    'hobbies': new FormArray([])


    });
    
  }

  onSubmit(){

    console.log(this.signupForm);

  }


  onAddHobby(){
    const control= new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }


// A validator is just a function
forbiddenNames(control: FormControl):{[s:string]: boolean}{

  if(this.forbiddenUserNames.indexOf(control.value)){
    return{'nameIsForbidden': true}

  }
  return null;
}

}
