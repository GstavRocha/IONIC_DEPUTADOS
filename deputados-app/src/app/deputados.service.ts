import { Injectable } from '@angular/core';
import{Deputados} from "./deputados";

@Injectable({
  providedIn: 'root'
})
export class DeputadosService {
  public url: string;
  public urlOrdem: string;
  public urlOrdenar: string;
  public nome: string;
  constructor() {
    this.url = 'https://dadosabertos.camara.leg.br/api/v2/deputados?';
    this.urlOrdem = 'ordem=ASC';
    this.urlOrdenar = 'ordenarPor=';
    this.nome = '';
  }
  getLink(){
    console.log(`${this.url}${this.urlOrdem}&${this.urlOrdenar}${this.nome}`);
    return `${this.url}${this.urlOrdem}&${this.urlOrdenar}=${this.nome}`;
  }

}
