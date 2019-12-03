import { Injectable } from "@angular/core";
import { maiores_gastos } from './maioresGastosData';
import { CompraSemLicitacao } from "../models/compraSemLicitacao";

@Injectable()
export class MaioresGastosService {

  constructor() {}
//   constructor(private http: HttpClient) {}

//   retornarListaEstados(): Observable<any> {
//     return this.http.get(`${BACKEND_API}/corporativoservice/retornarListaEstados`);
//   }

    retornaListaGastos(): Array<CompraSemLicitacao>{
        let lista_convertida: Array<CompraSemLicitacao> = new Array<CompraSemLicitacao>();
        let dados_retornados_api = maiores_gastos;

        dados_retornados_api.data.forEach(elemento => {
            console.log("elemento");
            console.log(elemento);

            let compraSemLicitacao: CompraSemLicitacao = new CompraSemLicitacao(
              elemento[0] + '',
              elemento[1] + '',
              elemento[2] + '',
              elemento[3] + '',
              elemento[4] + '',
              elemento[5] + '',
              elemento[6] + '',
              elemento[7] + '',
              Number(elemento[8]),
            );

            lista_convertida.push(compraSemLicitacao);
        });

        return lista_convertida;
    }
}
