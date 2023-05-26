import {Component, OnInit} from '@angular/core';
import {DeputadosService} from "../deputados.service";
import {Deputados} from "../deputados";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public deputados:Deputados[];
  constructor(private  ds: DeputadosService) {
    this.deputados = [];
  }

ngOnInit(){
    this.ds.obterTodos().subscribe((res:Deputados)=>{
      this.deputados = Object.values(res)[0];
      console.log(this.deputados);
    })
  }
}
