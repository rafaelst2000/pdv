"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persistence_enum_1 = require("../persistence.enum");
var EnderecoEntregaStorage = /** @class */ (function () {
    function EnderecoEntregaStorage(bairro, cep, cidade, codigoEntidadeComercial, codigoLocalidade, codigoLogradouro, logradouro, complemento, numero, sequenciaEnderecoEntidade, tipoLogradouro, tiposEndereco, uf, referencia, numeroEndereco) {
        this.bairro = bairro;
        this.cep = cep;
        this.cidade = cidade;
        this.codigoEntidadeComercial = codigoEntidadeComercial;
        this.codigoLocalidade = codigoLocalidade;
        this.codigoLogradouro = codigoLogradouro;
        this.logradouro = logradouro;
        this.complemento = complemento;
        this.numero = numero;
        this.sequenciaEnderecoEntidade = sequenciaEnderecoEntidade;
        this.tipoLogradouro = tipoLogradouro;
        this.tiposEndereco = tiposEndereco;
        this.uf = uf;
        this.referencia = referencia;
        this.numeroEndereco = numeroEndereco;
    }
    EnderecoEntregaStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.ENDERECO_ENTREGA;
    };
    return EnderecoEntregaStorage;
}());
exports.EnderecoEntregaStorage = EnderecoEntregaStorage;
//# sourceMappingURL=endereco-entrega.storage.js.map