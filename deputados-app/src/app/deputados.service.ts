import { Injectable } from '@angular/core';
import{Deputados} from "./deputados";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeputadosService {
  public URL: string;
  public urlOrdem: string;
  public urlOrdenar: string;
  public nome: string;
  public linkLista: string;
  constructor(private http: HttpClient) {
    this.URL = 'https://dadosabertos.camara.leg.br/api/v2/';
    this.urlOrdem = 'ordem=ASC';
    this.urlOrdenar = 'ordenarPor=';
    this.nome = '';
    this.linkLista ='';
  }
  updateLinkLista(nome: string){
    this.linkLista = `${this.URL}${this.urlOrdem}&${this.urlOrdenar}${nome}`;
  }
  obterTodos():Observable<Deputados>{
    return this.http.get<Deputados>(`${this.URL}deputados?ordem=ASC&ordenarPor=nome`);
  }

}
