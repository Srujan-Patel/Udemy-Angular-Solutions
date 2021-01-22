import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

defaultQuestion='pet';
answer='';
genders= ['male', 'female'];
submitted=false;

user={
  username:'',
  email:'',
  secretQuestion:'',
  answer:'',
  gender:''

}
  @ViewChild('f') signupForm:NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:'',

    //   },
    //   secret:'pet',
    //   questionAnswer: '',
    //   gender:'male'
    // });

    // Must be used only when the whole form needs to be set


    // Approach to set only overwrite parts of the form is given below

    this.signupForm.form.patchValue(
      {
        userData:{
          username: suggestedName
        }
      }
    );







  }

// onSubmit(form:NgForm){
//   console.log(form)
// }


// This method returns all the form components including the one's included by Angular automatically

// onSubmit(){
// console.log(this.signupForm);
// }



// This method reads the form values and sets it to the variables of the user object

onSubmit(){

this.user.username= this.signupForm.value.userData.username;
this.user.email= this.signupForm.value.userData.email;
this.user.secretQuestion= this.signupForm.value.secret;
this.user.answer= this.signupForm.value.questionAnswer;
this.user.gender= this.signupForm.value.gender;

this.signupForm.reset();

}

}
