import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class ServicoBase {

    protected URL_PADRAO: string = "http://127.0.0.1:8080/";

    @Injectable()
    protected httpClient: HttpClient;

    constructor(private urlDoServico, protected arrayColecao: any[]) {

    }

    public listaTodos() {
        //this.httpClient.get(this.URL_PADRAO + this.urlDoServico);
        return this.arrayColecao;
    }

    public obtemPorId(id: number) {
        // this.httpClient.get(this.URL_PADRAO + this.urlDoServico + `/{id}`);

        for (let i = 0; i < this.arrayColecao.length; i++) {
            if (this.arrayColecao[i].id == id) {
                return this.arrayColecao[i];
            }
        }

        return null;
    }

  



}
