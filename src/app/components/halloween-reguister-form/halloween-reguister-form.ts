import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { invitationType } from '../../model/Halloween';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-halloween-reguister-form',
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ],
  templateUrl: './halloween-reguister-form.html',
  styleUrl: './halloween-reguister-form.css'
})
export class HalloweenReguisterForm {

  form:FormGroup;
  invtationTypeList = Object.values(invitationType);


  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      nombre: ['', [ Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required] ],
      tipoInvitado: ['',[Validators.required, this.enumValidator(this.invtationTypeList)]],
      disfraz: ['', [Validators.required]],
      fechaLlegada: ['', ],
      aceptaReglas: ['',]

    });

  }

  // Validator personalizado
  enumValidator(enumObj: object) {
    const validValues = Object.values(enumObj);
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null; // required ya lo valida
      return validValues.includes(control.value) ? null : { invalidEnum: true };
    };
  }

  onSubmit(){

  }

}
function provideMatDatepicker(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

