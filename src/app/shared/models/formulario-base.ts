import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export class FormularioBase {

    protected id: number;
    protected inscricao: Subscription;
    protected formulario: FormGroup;

    resetar() {
        this.formulario.reset();
    }

    aplicaCssErro(campo: string) {
        let validAndTouched: boolean = this.verificaValidTouched(campo);

        return {
            'has-error': validAndTouched,
            'has-feedback': validAndTouched,
        }
    }

    verificaValidTouched(campo: any): boolean {
        return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
    }

    ngOnDestroy() {
        if (this.inscricao) {
            this.inscricao.unsubscribe();
        }
    }

}
