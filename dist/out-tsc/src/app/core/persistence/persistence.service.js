"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PersistenceService = /** @class */ (function () {
    function PersistenceService() {
    }
    PersistenceService.prototype.buscar = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
    };
    PersistenceService.prototype.salvar = function (key, t) {
        window.localStorage.setItem(key, JSON.stringify(t));
    };
    PersistenceService.prototype.remover = function (key) {
        window.localStorage.removeItem(key);
    };
    PersistenceService.prototype.deserializar = function (s) {
        var jsonLocalStorage = window.localStorage.getItem(s.persistenceKey());
        return s.fillFromJSON(jsonLocalStorage);
    };
    PersistenceService.prototype.serializar = function (s) {
        window.localStorage.setItem(s.persistenceKey(), JSON.stringify(s));
    };
    PersistenceService.prototype.limparTudo = function () {
        window.localStorage.clear();
    };
    PersistenceService = __decorate([
        core_1.Injectable()
    ], PersistenceService);
    return PersistenceService;
}());
exports.PersistenceService = PersistenceService;
//# sourceMappingURL=persistence.service.js.map