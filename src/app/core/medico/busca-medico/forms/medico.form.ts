import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable()
export class MedicoForm {

    constructor(
        private formBuilder: FormBuilder) {}
    
    public createForm(): FormGroup {
        return this.formBuilder.group({
            codigoRegistro: this.formBuilder.control('',[
                Validators.required,
            ]),
            tipo: this.formBuilder.control('', [
                Validators.required,
            ]),
            nome: this.formBuilder.control('', [
                Validators.required,
            ]),
            uf: this.formBuilder.control('', [
                Validators.required,
            ]),
        });

    }
}