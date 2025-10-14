import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-test',
  imports: [ReactiveFormsModule],
  templateUrl: './form-reactive-test.html',
  styleUrl: './form-reactive-test.css'
})
export class FormReactiveTest {
  formulario:FormGroup;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.email, Validators.required] ],
    });

  }

  mostrar(){
    if(this.formulario.invalid){
      console.log("El formulario COntiene errores")
    }else{
      console.log(this.formulario.value);
    }
  }

  onSubmit(){
    this.mostrar();
  }

  reset(){
    this.formulario.reset({
      nombre: "",
      email: ""
    });
  }

  

}
