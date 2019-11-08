import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { dataset } from './mocked-data';
import { YearMedianService } from 'src/app/services/yearMedianService';
import { BarChartItem } from 'src/app/models/barChartItem';
import { YearAccumulatedService } from 'src/app/services/yearAccumulatedService';
import { MonthMedianService } from 'src/app/services/monthMedianService';

@Component({
  selector: 'app-partial-graficos',
  templateUrl: './partial-graficos.component.html',
  styleUrls: ['./partial-graficos.component.css']
})
export class PartialGraficosComponent implements OnInit {
  // dataset: any[];
  // options
  xAxisLabel = 'País';
  yAxisLabel = 'População';
  viewcol6: any[] = [500, 300];
  viewcol12: any[] = [1024, 300];
  monthMedianService: MonthMedianService = new MonthMedianService();
  yearMedianService: YearMedianService = new YearMedianService();
  yearAccumulatedService: YearAccumulatedService = new YearAccumulatedService();
  medianaPorMes: Array<BarChartItem> = new Array<BarChartItem>();
  medianaPorAno: Array<BarChartItem> = new Array<BarChartItem>();
  acumuladoPorAno: Array<BarChartItem> = new Array<BarChartItem>();

  constructor() {
    // Object.assign(this, { dataset });
    this.medianaPorMes = this.monthMedianService.retornaListaMedianaPorMes();
    console.log('medianaPorMes');
    console.log(this.medianaPorMes);

    this.medianaPorAno = this.yearMedianService.retornaListaMedianaPorAno();
    console.log('medianaPorAno');
    console.log(this.medianaPorAno);

    this.acumuladoPorAno = this.yearAccumulatedService.retornaListaAcumuladoPorAno();
    console.log('acumuladoPorAno');
    console.log(this.acumuladoPorAno);
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
