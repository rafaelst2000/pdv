"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var builder_pattern_1 = require("builder-pattern");
var CestaStorageFactory = /** @class */ (function () {
    function CestaStorageFactory() {
    }
    CestaStorageFactory.prototype.getItens = function (itensCesta) {
        var _this = this;
        return itensCesta.map(function (item) {
            return builder_pattern_1.Builder()
                .associado(item.associado)
                .codigoLiberador(item.codigoLiberador)
                .identificadorUnico(item.identificadorUnico)
                .pbmAutorizada(item.pbmAutorizada)
                .produto(_this.montarProduto(item.produto))
                .quantidade(item.quantidade)
                .planoBeneficioMedico(item.planoBeneficioMedico)
                .autorizacoesPbms(item.autorizacoesPbms)
                .quantidadeEntregar(item.quantidadeEntregar)
                .vendaAntecipada(_this.hasObject(item, 'vendaAntecipada') ? item.vendaAntecipada : false)
                .build();
        });
    };
    CestaStorageFactory.prototype.montarProduto = function (produto) {
        return builder_pattern_1.Builder()
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
    };
    CestaStorageFactory.prototype.montarPromocao = function (produto) {
        return this.hasObject(produto, 'promocao') ?
            builder_pattern_1.Builder()
                .codigoFilialPromotora(produto.promocao.codigoFilialPromotora)
                .codigoPromocao(produto.promocao.codigoPromocao)
                .percentualDesconto(produto.promocao.percentualDesconto)
                .perfil(produto.promocao.perfil).build() :
            builder_pattern_1.Builder().build();
    };
    CestaStorageFactory.prototype.montarComprador = function (receita) {
        return this.hasObject(receita, 'comprador') ?
            builder_pattern_1.Builder()
                .cpf(receita.comprador.cpf)
                .dddTelefone(receita.comprador && receita.comprador.telefone ? receita.comprador.telefone.substring(0, 2) : null)
                .endereco(receita.comprador.endereco)
                .nome(receita.comprador.nome)
                .numeroTelefone(receita.comprador && receita.comprador.telefone ? receita.comprador.telefone.substring(3, receita.comprador.telefone.length) : null)
                .pais(receita.comprador.pais)
                .rg(receita.comprador.rg)
                .rgOrgaoEmissor(receita.comprador.rgSSP)
                .uf(receita.comprador.uf).build() :
            builder_pattern_1.Builder().build();
    };
    CestaStorageFactory.prototype.hasObject = function (object, propriedade) {
        return (object[propriedade] !== null && object[propriedade] !== undefined);
    };
    CestaStorageFactory.prototype.montarRegraFiscal = function (regra) {
        return builder_pattern_1.Builder()
            .sequenciaRegra(regra.sequenciaRegra)
            .codigoLegenda(regra.codigoLegenda)
            .codigoCfop(regra.codigoCfop)
            .codigoSituacaoTributaria(regra.codigoSituacaoTributaria)
            .aliquotaIcms(regra.aliquotaIcms)
            .mensagemFiscal(regra.mensagemFiscal)
            .percentualIsencao(regra.percentualIsencao)
            .somaIsencaoComPromocao(regra.somaIsencaoComPromocao)
            .build();
    };
    CestaStorageFactory = __decorate([
        core_1.Injectable()
    ], CestaStorageFactory);
    return CestaStorageFactory;
}());
exports.CestaStorageFactory = CestaStorageFactory;
//# sourceMappingURL=cesta-storage.factory.js.map