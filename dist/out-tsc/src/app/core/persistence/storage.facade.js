"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var builder_pattern_1 = require("builder-pattern");
var _1 = require(".");
var persistence_enum_1 = require("./model/persistence.enum");
var tef_storage_1 = require("./model/tef.storage");
var pbm_funcional_storage_1 = require("./model/pbm-funcional/pbm-funcional.storage");
var orcamento_storage_1 = require("./model/orcamento.storage");
var politicas_desconto_model_1 = require("./model/politicas-desconto/politicas-desconto-model");
var liberacao_desconto_storage_1 = require("./model/liberacao-desconto.storage");
var entrega_formas_pagamento_storage_1 = require("./model/entrega/entrega-formas-pagamento.storage");
var liberacao_frete_storage_1 = require("./model/liberacao-frete.storage");
var StorageFacade = /** @class */ (function () {
    function StorageFacade(persistenceService) {
        this.persistenceService = persistenceService;
        this.changes$ = new Subject_1.Subject();
    }
    Object.defineProperty(StorageFacade.prototype, "filialStorage", {
        get: function () {
            return this.persistenceService.deserializar(new _1.FilialStorage());
        },
        set: function (filialStorage) {
            if (filialStorage) {
                this.persistenceService.serializar(filialStorage);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.FILIAL);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "funcionarioStorage", {
        get: function () {
            return this.persistenceService.deserializar(new _1.FuncionarioStorage());
        },
        set: function (funcionarioStorage) {
            if (funcionarioStorage) {
                this.persistenceService.serializar(funcionarioStorage);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.FUNCIONARIO);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "vendaStorage", {
        get: function () {
            return this.persistenceService.deserializar(new _1.VendaStorage());
        },
        set: function (venda) {
            var vendaOld = this.vendaStorage;
            if (venda) {
                venda.persistenceKey = _1.VendaStorage.prototype.persistenceKey;
                this.persistenceService.serializar(venda);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.VENDA);
            }
            this.changes$.next(builder_pattern_1.Builder()
                .currentValue(venda)
                .previousValue(vendaOld)
                .build());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "tefStorage", {
        get: function () {
            return this.persistenceService.deserializar(new tef_storage_1.TefStorage());
        },
        set: function (tefStorage) {
            if (tefStorage) {
                tefStorage.persistenceKey = tef_storage_1.TefStorage.prototype.persistenceKey;
                this.persistenceService.serializar(tefStorage);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.TEF);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "orcamentoStorage", {
        get: function () {
            return this.persistenceService.deserializar(new orcamento_storage_1.OrcamentoStorage());
        },
        set: function (orcamentoStorage) {
            if (orcamentoStorage) {
                orcamentoStorage.persistenceKey =
                    orcamento_storage_1.OrcamentoStorage.prototype.persistenceKey;
                this.persistenceService.serializar(orcamentoStorage);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.ORCAMENTO);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "convenioStorage", {
        get: function () {
            return this.persistenceService.buscar(persistence_enum_1.PersistenceEnum.CONVENIOS);
        },
        set: function (convenio) {
            var convenioOld = this.convenioStorage;
            if (convenio) {
                this.persistenceService.salvar(persistence_enum_1.PersistenceEnum.CONVENIOS, convenio);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.CONVENIOS);
            }
            this.changes$.next(builder_pattern_1.Builder()
                .previousValue(convenioOld)
                .currentValue(convenio)
                .build());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "cesta", {
        get: function () {
            return this.persistenceService.buscar(persistence_enum_1.PersistenceEnum.CESTA);
        },
        set: function (itensCesta) {
            var itensOld = this.cesta;
            if (itensCesta) {
                this.persistenceService.salvar(persistence_enum_1.PersistenceEnum.CESTA, itensCesta);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.CESTA);
            }
            this.changes$.next(builder_pattern_1.Builder()
                .previousValue(itensOld)
                .currentValue(itensCesta)
                .build());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "lista", {
        get: function () {
            return this.persistenceService.buscar(persistence_enum_1.PersistenceEnum.LISTA);
        },
        set: function (itensLista) {
            var itensOld = this.lista;
            if (itensLista) {
                this.persistenceService.salvar(persistence_enum_1.PersistenceEnum.LISTA, itensLista);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.LISTA);
            }
            this.changes$.next(builder_pattern_1.Builder()
                .previousValue(itensOld)
                .currentValue(itensLista)
                .build());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "pbmFuncionalStorage", {
        get: function () {
            return this.persistenceService.deserializar(new pbm_funcional_storage_1.PbmFuncionalStorage());
        },
        set: function (itemPbmFuncional) {
            if (itemPbmFuncional) {
                itemPbmFuncional.persistenceKey =
                    pbm_funcional_storage_1.PbmFuncionalStorage.prototype.persistenceKey;
                this.persistenceService.serializar(itemPbmFuncional);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.PBM_FUNCIONAL);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "enderecoEntregaStorage", {
        get: function () {
            return this.persistenceService.buscar(persistence_enum_1.PersistenceEnum.ENDERECO_ENTREGA);
        },
        set: function (enderecoEntrega) {
            var enderecoEntregaOld = this.enderecoEntregaStorage;
            if (enderecoEntrega) {
                this.persistenceService.salvar(persistence_enum_1.PersistenceEnum.ENDERECO_ENTREGA, enderecoEntrega);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.ENDERECO_ENTREGA);
            }
            this.changes$.next(builder_pattern_1.Builder()
                .previousValue(enderecoEntregaOld)
                .currentValue(enderecoEntrega)
                .build());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "entregaFormasPagamentoStorage", {
        get: function () {
            return this.persistenceService.deserializar(new entrega_formas_pagamento_storage_1.EntregaFormasPagamentoStorage());
        },
        set: function (entregaFormasPagamento) {
            var entregaFormasPagamentoOld = this.entregaFormasPagamentoStorage;
            if (entregaFormasPagamento) {
                entregaFormasPagamento.persistenceKey =
                    entrega_formas_pagamento_storage_1.EntregaFormasPagamentoStorage.prototype.persistenceKey;
                this.persistenceService.serializar(entregaFormasPagamento);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.ENTREGA_FORMAS_PAGAMENTO);
            }
            this.changes$.next(builder_pattern_1.Builder()
                .previousValue(entregaFormasPagamentoOld)
                .currentValue(entregaFormasPagamento)
                .build());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "multiplasPbmsStorage", {
        get: function () {
            return this.persistenceService.buscar(persistence_enum_1.PersistenceEnum.MULTIPLAS_PBMS);
        },
        set: function (adminsPbm) {
            if (adminsPbm) {
                this.persistenceService.salvar(persistence_enum_1.PersistenceEnum.MULTIPLAS_PBMS, adminsPbm);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.MULTIPLAS_PBMS);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "packStorage", {
        get: function () {
            return this.persistenceService.buscar(persistence_enum_1.PersistenceEnum.PACK);
        },
        set: function (pack) {
            if (pack) {
                this.persistenceService.salvar(persistence_enum_1.PersistenceEnum.PACK, pack);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.PACK);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "politicasDescontoStorage", {
        get: function () {
            return this.persistenceService.deserializar(new politicas_desconto_model_1.PoliticasDescontoStorage());
        },
        set: function (cupom) {
            var politicaDesconto = this.politicasDescontoStorage;
            if (cupom) {
                cupom.persistenceKey = politicas_desconto_model_1.PoliticasDescontoStorage.prototype.persistenceKey;
                this.persistenceService.serializar(cupom);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.POLITICAS);
            }
            this.changes$.next(builder_pattern_1.Builder()
                .previousValue(politicaDesconto)
                .currentValue(cupom)
                .build());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "taxaEntregaStorage", {
        get: function () {
            return this.persistenceService.buscar(persistence_enum_1.PersistenceEnum.TAXA_ENTREGA);
        },
        set: function (taxaEntrega) {
            if (taxaEntrega) {
                this.persistenceService.salvar(persistence_enum_1.PersistenceEnum.TAXA_ENTREGA, taxaEntrega);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.TAXA_ENTREGA);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "liberacaoDescontoStorage", {
        get: function () {
            return this.persistenceService.deserializar(new liberacao_desconto_storage_1.LiberacaoDescontoStorage());
        },
        set: function (liberacao) {
            if (liberacao) {
                liberacao.persistenceKey =
                    liberacao_desconto_storage_1.LiberacaoDescontoStorage.prototype.persistenceKey;
                this.persistenceService.serializar(liberacao);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.LIBERACAO_DESCONTO);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "liberacaoFreteStorage", {
        get: function () {
            return this.persistenceService.deserializar(new liberacao_desconto_storage_1.LiberacaoDescontoStorage());
        },
        set: function (liberacao) {
            if (liberacao) {
                liberacao.persistenceKey = liberacao_frete_storage_1.LiberacaoFreteStorage.prototype.persistenceKey;
                this.persistenceService.serializar(liberacao);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.LIBERACAO_FRETE);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "itemLiberacaoDescontoStorage", {
        get: function () {
            return this.persistenceService.buscar(persistence_enum_1.PersistenceEnum.ITENS_LIBERACAO_DESCONTO);
        },
        set: function (itensLiberacaoDesconto) {
            if (itensLiberacaoDesconto) {
                this.persistenceService.salvar(persistence_enum_1.PersistenceEnum.ITENS_LIBERACAO_DESCONTO, itensLiberacaoDesconto);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.ITENS_LIBERACAO_DESCONTO);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageFacade.prototype, "keyStorage", {
        get: function () {
            return this.persistenceService.buscar(persistence_enum_1.PersistenceEnum.KEY);
        },
        set: function (key) {
            if (key) {
                this.persistenceService.salvar(persistence_enum_1.PersistenceEnum.KEY, key);
            }
            else {
                this.persistenceService.remover(persistence_enum_1.PersistenceEnum.KEY);
            }
        },
        enumerable: true,
        configurable: true
    });
    StorageFacade = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [_1.PersistenceService])
    ], StorageFacade);
    return StorageFacade;
}());
exports.StorageFacade = StorageFacade;
//# sourceMappingURL=storage.facade.js.map