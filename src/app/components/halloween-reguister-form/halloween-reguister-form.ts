import {ChangeDetectionStrategy, Component, EventEmitter, Output, Signal, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { halloweenRegistration, invitationType } from '../../model/Halloween';



@Component({
  selector: 'app-halloween-reguister-form',
  imports: [MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule, 
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './halloween-reguister-form.html',
  styleUrl: './halloween-reguister-form.css',
})
export class HalloweenReguisterForm {

  invitationTypeList = Object.values(invitationType);

  @Output() sub  = new EventEmitter<halloweenRegistration>;

  onSubmit(){    
    if(!this.formData.invalid){
      this.sub.emit(new halloweenRegistration(
        this.formData.value.email ?? '',
        this.formData.value.name ?? '',
        this.formData.value.type ?? invitationType.Brujo,
        this.formData.value.costume ?? '',
        this.formData.value.enterDate ?? new Date,
        this.formData.value.aceptTerms ?? false
      ));
    }
  }

  formData = new FormGroup({
    email : new FormControl<String>('', [Validators.required, Validators.email]),
    name : new FormControl<String>('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    type : new FormControl <invitationType | null> (null,[Validators.required]),
    costume : new FormControl<String>('',Validators.required),
    enterDate : new FormControl <Date> (new Date,[Validators.required]),
    aceptTerms : new FormControl<boolean>(false,[Validators.requiredTrue])
  });

  emailError = signal('');
  nameError = signal('');
  costumeError = signal('');

  constructor() {
    merge(this.formData.controls['email'].statusChanges, 
      this.formData.controls['email'].valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorEmailMessage());

    merge(this.formData.controls['name'].statusChanges, 
      this.formData.controls['name'].valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorNameMessage());

    merge(this.formData.controls['costume'].statusChanges, 
      this.formData.controls['costume'].valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorCostumeMessage());
  }

  updateErrorEmailMessage() {
    if (this.formData.controls['email'].hasError('required')) {
      this.emailError.set('Debe introducir algun email');
    } else if (this.formData.controls['email'].hasError('email')) {
      this.emailError.set('Email no valido');
    } else {
      this.emailError.set('');
    }
  }

  updateErrorNameMessage() {
    if (this.formData.controls['name'].hasError('required')) {
      this.nameError.set('Debe introducir un nombre');
    } else if (this.formData.controls['name'].hasError('minlength')) {
      this.emailError.set('Debe de tener mas de 3 letras');
    }else if (this.formData.controls['name'].hasError('maxlength')) {
      this.emailError.set('Debe de tener menos de 10 letras');
    } else {
      this.emailError.set('');
    }
  }

  updateErrorCostumeMessage() {
    if (this.formData.controls['costume'].hasError('required')) {
      this.costumeError.set('Debes introducir un disfraz');
    } else {
      this.costumeError.set('');
    }
  }

}
