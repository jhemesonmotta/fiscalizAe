import { Injectable } from "@angular/core";
import { mediana_gastos_predicao } from './medianaGastosPredicaoData';
import { BarChartItem } from "../models/barChartItem";

@Injectable()
export class MedianaGastosPredicaoService {

  constructor() {}

    retornaListaMedianaPredicao(): Array<BarChartItem>{
        let lista_convertida: Array<BarChartItem> = new Array<BarChartItem>();
        let dados_retornados_api = mediana_gastos_predicao;

        dados_retornados_api.data.forEach(elemento => {
            let item_bar_chart:BarChartItem = new BarChartItem(elemento[0] + '', Number(elemento[1]));
            lista_convertida.push(item_bar_chart);
        });

        return lista_convertida;
    }
}
