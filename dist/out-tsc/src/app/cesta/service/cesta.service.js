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
var storage_facade_1 = require("../../core/persistence/storage.facade");
var CestaService = /** @class */ (function () {
    function CestaService(storageFacade) {
        this.storageFacade = storageFacade;
        this.cesta = this.storageFacade;
    }
    CestaService.prototype.refresh = function () {
        location.reload(true);
    };
    CestaService.prototype.filtraNumero = function (valor) {
        var novaStr;
        novaStr = valor.toFixed(2);
        return novaStr.replace(".", ",");
    };
    CestaService.prototype.filtraDesconto = function (valor) {
        return Math.trunc(valor).toString();
    };
    CestaService.prototype.deletaItem = function (item) {
        var str = localStorage.getItem("ls.Cesta");
        var array = JSON.parse(str);
        array.splice(item, 1);
        localStorage.setItem("ls.Cesta", JSON.stringify(array));
        this.cesta = this.storageFacade;
        this.refresh();
    };
    CestaService.prototype.aumentaQuantidade = function (item) {
        var str = localStorage.getItem("ls.Cesta");
        var array = JSON.parse(str);
        if (array[item].quantidade > 1 && array[item].quantidade < 99) {
            array[item].quantidade++;
            localStorage.setItem("ls.Cesta", JSON.stringify(array));
            this.cesta = this.storageFacade;
            this.refresh();
        }
    };
    CestaService.prototype.diminuiQuantidade = function (item) {
        var str = localStorage.getItem("ls.Cesta");
        var array = JSON.parse(str);
        if (array[item].quantidade > 1 && array[item].quantidade <= 99) {
            array[item].quantidade--;
            localStorage.setItem("ls.Cesta", JSON.stringify(array));
            this.cesta = this.storageFacade;
            this.refresh();
        }
    };
    CestaService.prototype.setQuantidadeInput = function (item, i) {
        var str = localStorage.getItem("ls.Cesta");
        var array = JSON.parse(str);
        if (i.target.value > 0 && i.target.value < 100) {
            array[item].quantidade = i.target.value;
            localStorage.setItem("ls.Cesta", JSON.stringify(array));
            this.cesta = this.storageFacade;
            this.refresh();
        }
        console.log("Change: " + i.target.value);
    };
    CestaService.prototype.valorItem = function (item) {
        return this.filtraNumero(item.produto.precoPor);
    };
    CestaService.prototype.adicionarItemNaCesta = function (item) {
        var cesta = this.retornarCesta();
        this.storageFacade.cesta = cesta.concat(item);
    };
    CestaService.prototype.buscarIndiceItem = function (item) {
        var cesta = this.retornarCesta();
        return cesta.findIndex(function (e) { return e.identificadorUnico == item.identificadorUnico; });
    };
    CestaService.prototype.atualizarItemDaCesta = function (item) {
        var cesta = this.retornarCesta();
        cesta[this.buscarIndiceItem(item)] = item;
        this.storageFacade.cesta = cesta;
    };
    CestaService.prototype.atualizarCestaLocalStorage = function (itens) {
        var cesta = this.retornarCesta();
        if (Array.isArray(itens))
            cesta.unshift.apply(cesta, itens);
        else
            cesta.unshift(itens);
        this.storageFacade.cesta = cesta;
    };
    /*public limparCesta(tituloModal?: string): EstadoCestaModel { {
          return this.limpezaSemPbm();
    } */
    CestaService.prototype.verificarCestaVazia = function () {
        var cesta = this.retornarCesta();
        return cesta.isEmpty();
    };
    CestaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [storage_facade_1.StorageFacade])
    ], CestaService);
    return CestaService;
}());
exports.CestaService = CestaService;
//# sourceMappingURL=cesta.service.js.map