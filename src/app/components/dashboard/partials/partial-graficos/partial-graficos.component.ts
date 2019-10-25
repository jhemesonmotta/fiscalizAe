import { Component, OnInit } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { dataset } from './mocked-data';

@Component({
  selector: 'app-partial-graficos',
  templateUrl: './partial-graficos.component.html',
  styleUrls: ['./partial-graficos.component.css']
})
export class PartialGraficosComponent implements OnInit {
  dataset: any[];
  // options
  xAxisLabel = 'País';
  yAxisLabel = 'População';
  viewcol6: any[] = [500, 300];
  viewcol12: any[] = [1024, 300];

  constructor() {
    Object.assign(this, { dataset });
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
