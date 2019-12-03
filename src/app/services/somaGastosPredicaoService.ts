import { soma_gastos_predicao } from './somaGastosPredicaoData';
import { BarChartItem } from "../models/barChartItem";

export class SomatorioGastosPredicaoService {
  constructor() {}

    retornaListaSomatorioPredicao(): Array<BarChartItem>{
        let lista_convertida: Array<BarChartItem> = new Array<BarChartItem>();
        let dados_retornados_api = soma_gastos_predicao;

        dados_retornados_api.data.forEach(elemento => {
            let item_bar_chart:BarChartItem = new BarChartItem(elemento[0] + '', Number(elemento[1]));
            lista_convertida.push(item_bar_chart);
        });

        return lista_convertida;
    }
}