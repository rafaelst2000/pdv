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
var ListaService = /** @class */ (function () {
    function ListaService(storageFacade) {
        this.storageFacade = storageFacade;
        this.cesta = this.storageFacade;
    }
    ListaService.prototype.filtraNumero = function (valor) {
        var novaStr;
        novaStr = valor.toFixed(2);
        return novaStr.replace(".", ",");
    };
    ListaService.prototype.valorItem = function (item) {
        return this.filtraNumero(item.produto.precoPor);
    };
    ListaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [storage_facade_1.StorageFacade])
    ], ListaService);
    return ListaService;
}());
exports.ListaService = ListaService;
//# sourceMappingURL=lista.service.js.map