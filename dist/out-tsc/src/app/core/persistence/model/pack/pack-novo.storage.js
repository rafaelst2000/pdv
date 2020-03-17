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
var serializable_1 = require("../serializable");
var persistence_enum_1 = require("../persistence.enum");
var PackNovoStorage = /** @class */ (function (_super) {
    __extends(PackNovoStorage, _super);
    function PackNovoStorage(codigoPack, descricaoPack, itensPack) {
        var _this = _super.call(this) || this;
        _this.codigoPack = codigoPack;
        _this.descricaoPack = descricaoPack;
        _this.itensPack = itensPack;
        return _this;
    }
    PackNovoStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.PACK;
    };
    return PackNovoStorage;
}(serializable_1.Serializable));
exports.PackNovoStorage = PackNovoStorage;
//# sourceMappingURL=pack-novo.storage.js.map