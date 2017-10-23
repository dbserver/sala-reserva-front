import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reuniao-formulario',
  templateUrl: './reuniao-formulario.component.html',
  styleUrls: ['./reuniao-formulario.component.css']
})
export class ReuniaoFormularioComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });

  }

}
