"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var serializable_1 = require("./serializable");
var persistence_enum_1 = require("./persistence.enum");
var TefStorage = /** @class */ (function (_super) {
    __extends(TefStorage, _super);
    function TefStorage(cupomSequence, cupomsTef, cuponsTefRecarga, tefRecarga, cupomFarmaciaPopular) {
        var _this = _super.call(this) || this;
        _this.cupomSequence = cupomSequence;
        _this.cupomsTef = cupomsTef;
        _this.cuponsTefRecarga = cuponsTefRecarga;
        _this.tefRecarga = tefRecarga;
        _this.cupomFarmaciaPopular = cupomFarmaciaPopular;
        _this.cupomsTef = cupomsTef || [];
        return _this;
    }
    TefStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.TEF;
    };
    return TefStorage;
}(serializable_1.Serializable));
exports.TefStorage = TefStorage;
//# sourceMappingURL=tef.storage.js.map