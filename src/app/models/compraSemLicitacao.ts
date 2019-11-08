export class CompraSemLicitacao {
    constructor(public data: string,
                public orgao: string,
                public uasg: string,
                public fundamentoLegal: string,
                public justificativa: string,
                public objetoLicitacao: string,
                public cargoResponsavel: string,
                public nomeResponsavel: string,
                public valorEstimado: number) {}
}
