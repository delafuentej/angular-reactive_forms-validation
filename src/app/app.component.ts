import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myForm!: FormGroup;
  ngOnInit(): void {
      this.myForm = new FormGroup({
        'name': new FormControl(null,Validators.required),
    'email': new FormControl(null,[Validators.required, Validators.email]),
    'phone': new FormControl(null, 
    [
      Validators.required, 
      Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
    ]
      
      ),
   'message': new FormControl(null, Validators.minLength(5))


      })
  }
  clickSub(){
    console.log(this.myForm.value);
    this.myForm.reset()
  }
  get name(){
    return  this.myForm.get('name');
  };
  get email(){
    return  this.myForm.get('email');
  };
  get phone(){
    return  this.myForm.get('phone');
  };
  get message(){
    return this.myForm.get('message')
  }

}
