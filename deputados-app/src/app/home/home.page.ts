import {Component} from '@angular/core';
import {DeputadosService} from "../deputados.service";
import {Deputados} from "../deputados";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  deputados:any[]
  constructor(private  ds: DeputadosService) {
    this.deputados = []
  }

}
