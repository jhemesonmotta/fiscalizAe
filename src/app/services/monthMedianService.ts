import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { month_median } from './monthMedianData';
import { BarChartItem } from "../models/barChartItem";

@Injectable()
export class MonthMedianService {

  constructor() {}
//   constructor(private http: HttpClient) {}

//   retornarListaEstados(): Observable<any> {
//     return this.http.get(`${BACKEND_API}/corporativoservice/retornarListaEstados`);
//   }

    retornaListaMedianaPorMes(): Array<BarChartItem>{
        let lista_convertida: Array<BarChartItem> = new Array<BarChartItem>();
        let dados_retornados_api = month_median;

        dados_retornados_api.data.forEach(elemento => {
            let item_bar_chart:BarChartItem = new BarChartItem(elemento[0] + '', Number(elemento[1]));
            lista_convertida.push(item_bar_chart);
        });

        return lista_convertida;
    }
}
