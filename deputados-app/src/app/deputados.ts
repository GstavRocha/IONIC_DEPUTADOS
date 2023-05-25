import {Query} from "@angular/core";

export class Deputados{
  public id: number;
  public nome: string;
  public idLegislatura: string[];
  public siglaUf: string [];
  public siglaPartido: string[];
  public siglaSexo: string;
  constructor() {
    this.id = 0;
    this.nome = '';
    this.idLegislatura = [];
    this.siglaUf = [];
    this.siglaPartido = [];
    this.siglaSexo= '';

  }
}
