"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persistence_enum_1 = require("../persistence.enum");
var LiberacaoFreteStorage = /** @class */ (function () {
    function LiberacaoFreteStorage(codigoLiberadorTaxa, codigoUsuario, nomeUsuario) {
        this.codigoLiberadorTaxa = codigoLiberadorTaxa;
        this.codigoUsuario = codigoUsuario;
        this.nomeUsuario = nomeUsuario;
    }
    LiberacaoFreteStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.LIBERACAO_FRETE;
    };
    return LiberacaoFreteStorage;
}());
exports.LiberacaoFreteStorage = LiberacaoFreteStorage;
//# sourceMappingURL=liberacao-frete.storage.js.map