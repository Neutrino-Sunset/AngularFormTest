import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {

   @ViewChild('f') form : NgForm;


   name: string = '';

   public model = {
      name: 'Old Name',
      email: 'test@test.com',
      street: '1 High St',
      city: 'London',
      postcode: '123456',
      modelOneWay: 'model one way binding',
      modelTwoWay: 'model two way binding'
   }


   suggestUserName() {
      const suggestedName = 'Superuser';
   }

   // You can pass the form object to the onSubmit handler when clicked.
   // onSubmit(f: NgForm) {
   //    console.log(f);
   // }

   // Or you can make the form object available via @ViewChild.
   onSubmit() {
      console.log(this.form);
   }
}
