import { Component, OnInit, Input } from '@angular/core';

import { StorageFacade } from '../core/persistence/storage.facade';
import { ListaService } from './service/lista.service';
import { BuscaIntegrationService } from './service/busca-integration.service';

@Component({
  selector: 'pdv-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public lista: any;
  item: any;
  

  constructor(private buscaIntegration: BuscaIntegrationService ) { 
  }

  ngOnInit() {
    this.buscaIntegration.buscaItemPorDescricao$.subscribe(
      res=> this.buscaItems(res)
    )
  }

  buscaItems(itemDigitado){
      if(itemDigitado != ""){
        this.listadeItems = this.listadeItems.filter(res=>{
          return res.produto.nome.toLowerCase().match(itemDigitado.toLowerCase())
        })
        console.log(this.listadeItems)
      }
    }
   
  public listadeItems = [
    {
        "associado": null,
        "conferido": false,
        "identificadorUnico": 997056905,
        "produto": {
            "conferido": false,
            "categoriaItem": null,
            "codigo": 954910,
            "codigoBarrasItem": 7891024183021,
            "codPromocao": null,
            "ean": 7891024183021,
            "entregaTele": true,
            "estoque": 2,
            "estoqueTotal": 2,
            "estoqueReservaVirtual": 0,
            "estoqueCd": 0,
            "geraDadosFornecedor": false,
            "imagem": "https://cdn1.staticpanvel.com.br/produtos/3/954910-3.jpg",
            "nome": "FIO DENT COLGATE MENTA 50M",
            "tipoDesconto": null,
            "participaListaReferencial": false,
            "participaPbm": false,
            "percentualDesconto": 0,
            "regraFiscal": {
                "codigoLegenda": 6,
                "codigoCfop": 5405,
                "codigoSituacaoTributaria": 60,
                "aliquotaIcms": 18,
                "mensagemFiscal": "CST 060 - ICMS COBRADO ANTERIORMENTE",
                "percentualIsencao": 0,
                "somaIsencaoComPromocao": false
            },
            "permiteAdesao": false,
            "possuiAlternativos": false,
            "precoDe": 10.49,
            "precoPor": 10.49,
            "psicotropico": false,
            "retencaoReceita": false,
            "situacaoItem": "T",
            "valorDesconto": 0,
            "possuiEanImpresso": true,
            "itemGeladeira": false,
            "participaFarmaciaPopular": false,
            "possuiKitAdesao": false,
            "exclusivoPanvel": false,
            "participaPackNovo": false,
            "possuiItemAVencer": false
        },
        "quantidade": 1,
        "quantidadeEntregar": 0,
        "vendaAntecipada": false,
        "detalhesAssinatura": null
    },
    {
        "associado": null,
        "conferido": false,
        "identificadorUnico": 668089462,
        "produto": {
            "conferido": false,
            "categoriaItem": "Similar",
            "classeTerapeutica": "ANTIGRIPAIS",
            "codigo": 438070,
            "codigoBarrasItem": 7896472501823,
            "codigoPrincipioAtivo": 4749,
            "codPromocao": 70296,
            "ean": 7896472501823,
            "entregaTele": true,
            "estoque": 1,
            "estoqueTotal": 1,
            "estoqueReservaVirtual": 0,
            "estoqueCd": 0,
            "geraDadosFornecedor": false,
            "imagem": "https://cdn1.staticpanvel.com.br/produtos/3/438070-3.jpg",
            "nome": "MULTIGRIP 20 CAP C",
            "origemDesconto": "PROMOCAO",
            "tipoDesconto": 2,
            "participaListaReferencial": false,
            "participaPbm": false,
            "percentualDesconto": 10.01,
            "regraFiscal": {
                "codigoLegenda": 4,
                "codigoCfop": 5405,
                "codigoSituacaoTributaria": 60,
                "aliquotaIcms": 18,
                "percentualIsencao": 0,
                "somaIsencaoComPromocao": false
            },
            "permiteAdesao": false,
            "possuiAlternativos": false,
            "possuiGenericosPorPrincipioAtivo": false,
            "possuiReferenciaPorPrincipioAtivo": true,
            "possuiSimilaresPorPrincipioAtivo": true,
            "precoDe": 18.99,
            "precoPor": 17.09,
            "principioAtivo": "PARACETAMOL/CLORIDRATO FENILEFRINA/MALEATO CLORFENIRAMINA",
            "psicotropico": false,
            "retencaoReceita": false,
            "situacaoItem": "T",
            "valorDesconto": 1.9,
            "possuiEanImpresso": true,
            "itemGeladeira": false,
            "participaFarmaciaPopular": false,
            "possuiKitAdesao": false,
            "promocao": {
                "codigoPromocao": 70296,
                "codigoFilialPromotora": 1002,
                "perfil": 1,
                "percentualDesconto": 10.01,
                "dataInicio": "30/10/2017",
                "tipoPromocao": "Promoção",
                "codigoModalidade": 15,
                "descricaoModalidade": "NEGOCIAÇÕES COMERCIAL"
            },
            "exclusivoPanvel": false,
            "participaPackNovo": false,
            "possuiItemAVencer": false
        },
        "quantidade": 1,
        "quantidadeEntregar": 0,
        "vendaAntecipada": false,
        "detalhesAssinatura": null
    },
    {
        "associado": null,
        "conferido": false,
        "identificadorUnico": 104830831,
        "produto": {
            "conferido": false,
            "categoriaItem": "Similar",
            "classeTerapeutica": "ANTIGRIPAIS",
            "codigo": 431360,
            "codigoBarrasItem": 7896658001918,
            "codigoPrincipioAtivo": 5211,
            "codPromocao": null,
            "ean": 7896658001918,
            "entregaTele": true,
            "estoque": 3,
            "estoqueTotal": 3,
            "estoqueReservaVirtual": 0,
            "estoqueCd": 0,
            "geraDadosFornecedor": false,
            "imagem": "https://cdn1.staticpanvel.com.br/produtos/3/431360-3.jpg",
            "nome": "DECONGEX PLUS XPE 120ML",
            "tipoDesconto": null,
            "participaListaReferencial": false,
            "participaPbm": false,
            "percentualDesconto": 0,
            "regraFiscal": {
                "codigoLegenda": 4,
                "codigoCfop": 5405,
                "codigoSituacaoTributaria": 60,
                "aliquotaIcms": 18,
                "percentualIsencao": 0,
                "somaIsencaoComPromocao": false
            },
            "permiteAdesao": false,
            "possuiAlternativos": false,
            "possuiGenericosPorPrincipioAtivo": false,
            "possuiReferenciaPorPrincipioAtivo": false,
            "possuiSimilaresPorPrincipioAtivo": true,
            "precoDe": 17.51,
            "precoPor": 17.51,
            "principioAtivo": "MALEATO BRONFENIRAMINA/CLORIDRATO FENILEFRINA",
            "psicotropico": false,
            "retencaoReceita": false,
            "situacaoItem": "T",
            "valorDesconto": 0,
            "possuiEanImpresso": true,
            "itemGeladeira": false,
            "participaFarmaciaPopular": false,
            "possuiKitAdesao": false,
            "exclusivoPanvel": false,
            "participaPackNovo": false,
            "possuiItemAVencer": false
        },
        "quantidade": 1,
        "quantidadeEntregar": 0,
        "vendaAntecipada": false,
        "detalhesAssinatura": null
    },
    {
        "associado": null,
        "conferido": false,
        "identificadorUnico": 273862751,
        "produto": {
            "conferido": false,
            "categoriaItem": null,
            "codigo": 309885,
            "codigoBarrasItem": 7896622300979,
            "codPromocao": 67512,
            "ean": 7896622300979,
            "entregaTele": true,
            "estoque": 0,
            "estoqueTotal": 0,
            "estoqueReservaVirtual": 0,
            "estoqueCd": 0,
            "geraDadosFornecedor": false,
            "imagem": null,
            "nome": "AMOXILINA NOVOXIL 250MG PO/SUS L",
            "origemDesconto": "PROMOCAO",
            "tipoDesconto": 2,
            "participaListaReferencial": false,
            "participaPbm": false,
            "percentualDesconto": 35,
            "regraFiscal": {
                "codigoLegenda": 4,
                "codigoCfop": 5405,
                "codigoSituacaoTributaria": 60,
                "aliquotaIcms": 18,
                "percentualIsencao": 0,
                "somaIsencaoComPromocao": false
            },
            "permiteAdesao": false,
            "possuiAlternativos": false,
            "precoDe": 6.79,
            "precoPor": 4.41,
            "psicotropico": false,
            "retencaoReceita": false,
            "situacaoItem": "NT",
            "valorDesconto": 2.38,
            "possuiEanImpresso": true,
            "itemGeladeira": false,
            "participaFarmaciaPopular": false,
            "possuiKitAdesao": false,
            "promocao": {
                "codigoPromocao": 67512,
                "codigoFilialPromotora": 1002,
                "perfil": 1,
                "percentualDesconto": 35,
                "dataInicio": "23/01/2018",
                "tipoPromocao": "Promoção",
                "codigoModalidade": 23,
                "descricaoModalidade": "PROMOÇÃO DE ITENS NT, NF"
            },
            "exclusivoPanvel": false,
            "participaPackNovo": false,
            "possuiItemAVencer": false
        },
        "quantidade": 1,
        "quantidadeEntregar": 0,
        "vendaAntecipada": false,
        "detalhesAssinatura": null
    },
    {
        "associado": null,
        "codigoLiberador": null,
        "identificadorUnico": 779713012,
        "quantidade": 1,
        "quantidadeEntregar": 0,
        "produto": {
            "categoriaItem": "Referência",
            "classeTerapeutica": "ANALGESICOS+ANTIESPASMODICOS",
            "codigo": 135542,
            "codigoBarrasItem": 7896026300315,
            "codigoPrincipioAtivo": 1920,
            "ean": 7896026300315,
            "entregaTele": true,
            "estoque": 13,
            "estoqueTotal": 13,
            "estoqueReservaVirtual": 0,
            "estoqueCd": 0,
            "geraDadosFornecedor": false,
            "imagem": "https://cdn1.staticpanvel.com.br/produtos/3/135542-3.jpg",
            "nome": "BUSCOPAN SOL ORAL 20ML",
            "tipoDesconto": null,
            "participaListaReferencial": true,
            "participaPack": false,
            "participaPbm": false,
            "percentualDesconto": 0,
            "regraFiscal": {
                "codigoLegenda": 4,
                "codigoCfop": 5405,
                "codigoSituacaoTributaria": 60,
                "aliquotaIcms": 18,
                "percentualIsencao": 0,
                "somaIsencaoComPromocao": false
            },
            "permiteAdesao": false,
            "possuiAlternativos": true,
            "possuiGenericos": true,
            "possuiGenericosPorPrincipioAtivo": true,
            "possuiItemAVencer": false,
            "possuiReferenciaPorPrincipioAtivo": true,
            "possuiSimilaresPorPrincipioAtivo": false,
            "precoDe": 15.55,
            "precoPor": 15.55,
            "principioAtivo": "BROMETO N-BUTIL ESCOPOLAMINA",
            "psicotropico": false,
            "retencaoReceita": false,
            "situacaoItem": "T",
            "valorDesconto": 0,
            "possuiEanImpresso": true,
            "convenio": null,
            "itemGeladeira": false,
            "participaFarmaciaPopular": false,
            "possuiKitAdesao": false,
            "promocao": null,
            "exclusivoPanvel": false,
            "participaPackNovo": false,
            "itemAssinavel": false
        },
        "receita": null,
        "conferido": false,
        "vendaFormula": false,
        "vendaAntecipada": false
    },
    {
        "associado": null,
        "codigoLiberador": null,
        "identificadorUnico": 504235775,
        "quantidade": 1,
        "quantidadeEntregar": 0,
        "produto": {
            "categoriaItem": "Similar",
            "classeTerapeutica": "DESCONGESTIONANTES NASAIS",
            "codigo": 447750,
            "codigoBarrasItem": 7898014560176,
            "codigoPrincipioAtivo": 1907,
            "ean": 7898014560176,
            "entregaTele": true,
            "estoque": 90,
            "estoqueTotal": 90,
            "estoqueReservaVirtual": 0,
            "estoqueCd": 0,
            "geraDadosFornecedor": false,
            "imagem": "https://cdn1.staticpanvel.com.br/produtos/3/447750-3.jpg",
            "nome": "SORINAN AD 30ML G",
            "origemDesconto": "PROMOCAO",
            "tipoDesconto": 2,
            "participaListaReferencial": false,
            "participaPack": false,
            "participaPbm": false,
            "percentualDesconto": 21.81,
            "regraFiscal": {
                "codigoLegenda": 4,
                "codigoCfop": 5405,
                "codigoSituacaoTributaria": 60,
                "aliquotaIcms": 18,
                "percentualIsencao": 0,
                "somaIsencaoComPromocao": false
            },
            "permiteAdesao": false,
            "possuiAlternativos": false,
            "possuiGenericos": false,
            "possuiGenericosPorPrincipioAtivo": true,
            "possuiItemAVencer": false,
            "possuiReferenciaPorPrincipioAtivo": true,
            "possuiSimilaresPorPrincipioAtivo": true,
            "precoDe": 8.94,
            "precoPor": 6.99,
            "principioAtivo": "CLORIDRATO NAFAZOLINA",
            "psicotropico": false,
            "retencaoReceita": false,
            "situacaoItem": "T",
            "valorDesconto": 1.95,
            "possuiEanImpresso": true,
            "convenio": null,
            "itemGeladeira": false,
            "participaFarmaciaPopular": false,
            "possuiKitAdesao": false,
            "promocao": {
                "codigoPromocao": 87681,
                "codigoFilialPromotora": 1002,
                "perfil": 1,
                "percentualDesconto": 21.81,
                "dataInicio": "08/07/2019",
                "dataFinal": "31/03/2020",
                "tipoPromocao": "Promoção"
            },
            "exclusivoPanvel": false,
            "participaPackNovo": true,
            "itemAssinavel": false
        },
        "receita": null,
        "conferido": false,
        "vendaFormula": false,
        "vendaAntecipada": false
    },
    {
        "associado": null,
        "codigoLiberador": null,
        "identificadorUnico": 891627382,
        "quantidade": 1,
        "quantidadeEntregar": 0,
        "produto": {
            "categoriaItem": "Referência",
            "classeTerapeutica": "ANTIALERGICOS",
            "codigo": 980420,
            "codigoBarrasItem": 7898926572090,
            "codigoPrincipioAtivo": 1902,
            "ean": 7898926572090,
            "entregaTele": true,
            "estoque": 2,
            "estoqueTotal": 2,
            "estoqueReservaVirtual": 0,
            "estoqueCd": 0,
            "geraDadosFornecedor": false,
            "imagem": null,
            "nome": "NASONEX SPRAY NASAL 60 DOSES INODORO G",
            "tipoDesconto": null,
            "participaListaReferencial": false,
            "participaPack": false,
            "participaPbm": false,
            "percentualDesconto": 0,
            "regraFiscal": {
                "codigoLegenda": 4,
                "codigoCfop": 5405,
                "codigoSituacaoTributaria": 60,
                "aliquotaIcms": 18,
                "percentualIsencao": 0,
                "somaIsencaoComPromocao": false
            },
            "permiteAdesao": false,
            "possuiAlternativos": false,
            "possuiGenericos": false,
            "possuiGenericosPorPrincipioAtivo": true,
            "possuiItemAVencer": false,
            "possuiReferenciaPorPrincipioAtivo": true,
            "possuiSimilaresPorPrincipioAtivo": true,
            "precoDe": 59.6,
            "precoPor": 59.6,
            "principioAtivo": "FUROATO MOMETASONA",
            "psicotropico": false,
            "retencaoReceita": false,
            "situacaoItem": "T",
            "valorDesconto": 0,
            "possuiEanImpresso": true,
            "convenio": null,
            "itemGeladeira": false,
            "participaFarmaciaPopular": false,
            "possuiKitAdesao": false,
            "promocao": null,
            "exclusivoPanvel": false,
            "participaPackNovo": false,
            "itemAssinavel": false
        },
        "receita": null,
        "conferido": false,
        "vendaFormula": false,
        "vendaAntecipada": false
    },
    {
        "associado": null,
        "codigoLiberador": null,
        "identificadorUnico": 802081386,
        "quantidade": 1,
        "quantidadeEntregar": 0,
        "produto": {
            "categoriaItem": "Genérico",
            "classeTerapeutica": "ANALGESICOS+ANTITERMICOS",
            "codigo": 993660,
            "codigoBarrasItem": 7896714213736,
            "codigoPrincipioAtivo": 1900,
            "ean": 7896714213736,
            "entregaTele": true,
            "estoque": 3,
            "estoqueTotal": 3,
            "estoqueReservaVirtual": 0,
            "estoqueCd": 0,
            "geraDadosFornecedor": false,
            "imagem": "https://cdn1.staticpanvel.com.br/produtos/3/993660-3.jpg",
            "nome": "DIPIRONA SOD 500MG/ML 20ML NEOQ GEN G",
            "tipoDesconto": null,
            "participaListaReferencial": false,
            "participaPack": false,
            "participaPbm": false,
            "percentualDesconto": 0,
            "regraFiscal": {
                "codigoLegenda": 4,
                "codigoCfop": 5405,
                "codigoSituacaoTributaria": 60,
                "aliquotaIcms": 18,
                "percentualIsencao": 0,
                "somaIsencaoComPromocao": false
            },
            "permiteAdesao": false,
            "possuiAlternativos": false,
            "possuiGenericos": false,
            "possuiGenericosPorPrincipioAtivo": true,
            "possuiItemAVencer": false,
            "possuiReferenciaPorPrincipioAtivo": true,
            "possuiSimilaresPorPrincipioAtivo": true,
            "precoDe": 14.58,
            "precoPor": 14.58,
            "principioAtivo": "DIPIRONA SODICA",
            "psicotropico": false,
            "retencaoReceita": false,
            "situacaoItem": "T",
            "valorDesconto": 0,
            "possuiEanImpresso": true,
            "convenio": null,
            "itemGeladeira": false,
            "participaFarmaciaPopular": false,
            "possuiKitAdesao": false,
            "promocao": {
                "codigoPromocao": 96160,
                "codigoFilialPromotora": 1002,
                "perfil": 1,
                "percentualDesconto": 0,
                "dataInicio": "07/11/2019",
                "dataFinal": "31/03/2020",
                "tipoPromocao": "Promoção"
            },
            "exclusivoPanvel": false,
            "participaPackNovo": false,
            "itemAssinavel": false
        },
        "receita": null,
        "conferido": false,
        "vendaFormula": false,
        "vendaAntecipada": false
    }
]
  
}




