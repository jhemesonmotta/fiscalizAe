import { Component, OnInit } from '@angular/core';
import { MaioresGastosService } from 'src/app/services/maioresGastosService';
import { CompraSemLicitacao } from 'src/app/models/compraSemLicitacao';

@Component({
  selector: 'app-partial-listas',
  templateUrl: './partial-listas.component.html',
  styleUrls: ['./partial-listas.component.css']
})
export class PartialListasComponent implements OnInit {
  maioresGastosService: MaioresGastosService = new MaioresGastosService();
  listaMaioresGastos: Array<CompraSemLicitacao> = new Array<CompraSemLicitacao>();
  gastoSelecionado: CompraSemLicitacao = new CompraSemLicitacao('0','1','2','3','4','5','6','7',0);

  constructor() {
    this.listaMaioresGastos = this.maioresGastosService.retornaListaGastos();
    console.log('listaMaioresGastos');
    console.log(this.listaMaioresGastos);
  }

  ngOnInit() {
  }

  selecionarGasto(gastoTemp: CompraSemLicitacao){
    this.gastoSelecionado = gastoTemp;
  }
}
