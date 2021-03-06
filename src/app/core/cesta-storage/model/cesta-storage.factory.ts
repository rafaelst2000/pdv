import { Injectable } from '@angular/core';

import { Builder } from 'builder-pattern';

import { Item } from './item';
import { Produto } from './produto';
import { Promocao } from './promocao';
import { Comprador } from './comprador';
import { RegraFiscal } from './regra-fiscal';

@Injectable()
export class CestaStorageFactory {

    public getItens(itensCesta: Array<Item>): Item[] {
        return itensCesta.map(item => {
            return Builder<Item>()
                .associado(item.associado)
                .codigoLiberador(item.codigoLiberador)
                .identificadorUnico(item.identificadorUnico)
                .pbmAutorizada(item.pbmAutorizada)
                .produto(this.montarProduto(item.produto))
                .quantidade(item.quantidade)
                .planoBeneficioMedico(item.planoBeneficioMedico)
                .autorizacoesPbms(item.autorizacoesPbms)
                .quantidadeEntregar(item.quantidadeEntregar)
                .vendaAntecipada(this.hasObject(item, 'vendaAntecipada') ? item.vendaAntecipada : false)
                .build();
        });
    }

    private montarProduto(produto: Produto): Produto {
        return Builder<Produto>()
                .categoriaItem(produto.categoriaItem)
                .classeTerapeutica(produto.classeTerapeutica)
                .codigo(produto.codigo)
                .codigoBarrasItem(produto.codigoBarrasItem)
                .codigoPrincipioAtivo(produto.codigoPrincipioAtivo)
                .codPromocao(produto.codPromocao)
                .ean(produto.ean)
                .entregaTele(produto.entregaTele)
                .estoque(produto.estoque)
                .estoqueCd(produto.estoqueCd)
                .geraDadosFornecedor(produto.geraDadosFornecedor)
                .imagem(produto.imagem)
                .lote(produto.lote)
                .nome(produto.nome)
                .origemDesconto(produto.origemDesconto)
                .participaPack(produto.participaPack)
                .participaPbm(produto.participaPbm)
                .percentualDesconto(produto.percentualDesconto)
                .regraFiscal(this.montarRegraFiscal(produto.regraFiscal))
                .possuiAlternativos(produto.possuiAlternativos)
                .possuiGenericosPorPrincipioAtivo(produto.possuiGenericosPorPrincipioAtivo)
                .possuiReferenciaPorPrincipioAtivo(produto.possuiReferenciaPorPrincipioAtivo)
                .possuiSimilaresPorPrincipioAtivo(produto.possuiSimilaresPorPrincipioAtivo)
                .precoDe(produto.precoDe)
                .precoPor(produto.precoPor)
                .principioAtivo(produto.principioAtivo)
                .promocao(this.montarPromocao(produto))
                .psicotropico(produto.psicotropico)
                .retencaoReceita(produto.retencaoReceita)
                .situacaoItem(produto.situacaoItem)
                .valorDesconto(produto.valorDesconto)
                .build();
    }

    private montarPromocao(produto): Promocao {
        return this.hasObject(produto, 'promocao') ?
            Builder<Promocao>()
                .codigoFilialPromotora(produto.promocao.codigoFilialPromotora)
                .codigoPromocao(produto.promocao.codigoPromocao)
                .percentualDesconto(produto.promocao.percentualDesconto)
                .perfil(produto.promocao.perfil).build() :
            Builder<Promocao>().build();
    }


    private montarComprador(receita): Comprador {
        return this.hasObject(receita, 'comprador') ?
            Builder<Comprador>()
                .cpf(receita.comprador.cpf)
                .dddTelefone(receita.comprador && receita.comprador.telefone ? receita.comprador.telefone.substring(0, 2) : null)
                .endereco(receita.comprador.endereco)
                .nome(receita.comprador.nome)
                .numeroTelefone(receita.comprador && receita.comprador.telefone ? receita.comprador.telefone.substring(3, receita.comprador.telefone.length) : null)
                .pais(receita.comprador.pais)
                .rg(receita.comprador.rg)
                .rgOrgaoEmissor(receita.comprador.rgSSP)
                .uf(receita.comprador.uf).build() :
            Builder<Comprador>().build();
    }

    private hasObject(object: Object, propriedade: string): boolean {
        return (object[propriedade] !== null && object[propriedade] !== undefined);
    }

    private montarRegraFiscal(regra): RegraFiscal {
        return Builder<RegraFiscal>()
            .sequenciaRegra(regra.sequenciaRegra)
            .codigoLegenda(regra.codigoLegenda)
            .codigoCfop(regra.codigoCfop)
            .codigoSituacaoTributaria(regra.codigoSituacaoTributaria)
            .aliquotaIcms(regra.aliquotaIcms)
            .mensagemFiscal(regra.mensagemFiscal)
            .percentualIsencao(regra.percentualIsencao)
            .somaIsencaoComPromocao(regra.somaIsencaoComPromocao)
            .build();
    }

}