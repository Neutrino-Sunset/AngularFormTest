import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';


// A subcomponent for use in a parent form.
// The viewProvider is required to enable this component to be used within a parent form.
// Field values for this subcomponent appear as a property on the JS form object created by Angular when the parent form
// is submitted.
// Any field which fails to validate in this subcomponent will correctly affect the status field of the JS form object.
@Component({
   selector: 'app-address',
   templateUrl: './address.component.html',
   styleUrls: ['./address.component.css'],
   viewProviders: [ { provide: ControlContainer, useExisting: NgForm }]
})
export class AddressComponent {

   @Input() model;



}
