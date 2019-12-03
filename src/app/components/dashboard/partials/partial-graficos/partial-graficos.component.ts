import { Component, OnInit } from '@angular/core';
import { YearMedianService } from 'src/app/services/yearMedianService';
import { BarChartItem } from 'src/app/models/barChartItem';
import { YearAccumulatedService } from 'src/app/services/yearAccumulatedService';
import { MonthMedianService } from 'src/app/services/monthMedianService';
import { MedianaGastosPredicaoService } from 'src/app/services/medianaGastosPredicaoService';
import { SomatorioGastosPredicaoService } from 'src/app/services/somaGastosPredicaoService';

@Component({
  selector: 'app-partial-graficos',
  templateUrl: './partial-graficos.component.html',
  styleUrls: ['./partial-graficos.component.css']
})
export class PartialGraficosComponent implements OnInit {
  xAxisLabel = 'País';
  yAxisLabel = 'População';
  viewcol6: any[] = [500, 300];
  viewcol12: any[] = [1024, 300];

  somaGastosPredicaoService: SomatorioGastosPredicaoService = new SomatorioGastosPredicaoService();
  medianaGastosPredicaoService: MedianaGastosPredicaoService = new MedianaGastosPredicaoService();
  monthMedianService: MonthMedianService = new MonthMedianService();
  yearMedianService: YearMedianService = new YearMedianService();
  yearAccumulatedService: YearAccumulatedService = new YearAccumulatedService();

  somaPrevisao: Array<BarChartItem> = new Array<BarChartItem>();
  medianaPrevisao: Array<BarChartItem> = new Array<BarChartItem>();
  medianaPorMes: Array<BarChartItem> = new Array<BarChartItem>();
  medianaPorAno: Array<BarChartItem> = new Array<BarChartItem>();
  acumuladoPorAno: Array<BarChartItem> = new Array<BarChartItem>();

  constructor() {
    this.medianaPorMes = this.monthMedianService.retornaListaMedianaPorMes();
    this.medianaPorAno = this.yearMedianService.retornaListaMedianaPorAno();
    this.acumuladoPorAno = this.yearAccumulatedService.retornaListaAcumuladoPorAno();
    this.medianaPrevisao = this.medianaGastosPredicaoService.retornaListaMedianaPredicao();
    this.somaPrevisao = this.somaGastosPredicaoService.retornaListaSomatorioPredicao();
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
