import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-reserva-formulario',
  templateUrl: './reserva-formulario.component.html',
  styleUrls: ['./reserva-formulario.component.css']
})
export class ReservaFormularioComponent implements OnInit, OnDestroy {

  id:string;
  inscricao:Subscription;

  constructor(private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params:any) => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
