import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Builder } from "builder-pattern";

import {
  FuncionarioStorage,
  FilialStorage,
  PersistenceService,
  VendaStorage,
  ConvenioStorage
} from ".";

import { Item } from "../cesta-storage/model/item";
import { PersistenceEnum } from "./model/persistence.enum";

import { TefStorage } from "./model/tef.storage";
import { PackNovoStorage } from "./model/pack/pack-novo.storage";
import { TaxaEntregaStorage } from "./model/entrega/taxa-entrega.storage";
import { PbmFuncionalStorage } from "./model/pbm-funcional/pbm-funcional.storage";
import { EnderecoEntregaStorage } from "./model/entrega/endereco-entrega.storage";
import { AdminConvenioPbmStorage } from "./model/multiplas-pbms/admin-convenio-pbm.storage";
import { OrcamentoStorage } from "./model/orcamento.storage";
import { PoliticasDescontoStorage } from "./model/politicas-desconto/politicas-desconto-model";
import { LiberacaoDescontoStorage } from "./model/liberacao-desconto.storage";
import { EntregaFormasPagamentoStorage } from "./model/entrega/entrega-formas-pagamento.storage";
import { ItemLiberacaoDescontoStorage } from "./model/itens-liberacao-desconto.storage";
import { ChangeStorage } from "./model/changeStorage";
import { LiberacaoFreteStorage } from "./model/liberacao-frete.storage";

@Injectable()
export class StorageFacade {
  public changes$: Subject<ChangeStorage<any>> = new Subject<ChangeStorage<any>>();

  constructor(private persistenceService: PersistenceService) { }

  get filialStorage(): FilialStorage {
    return this.persistenceService.deserializar(new FilialStorage());
  }

  set filialStorage(filialStorage: FilialStorage) {
    if (filialStorage) {
      this.persistenceService.serializar(filialStorage);
    } else {
      this.persistenceService.remover(PersistenceEnum.FILIAL);
    }
  }

  get funcionarioStorage(): FuncionarioStorage {
    return this.persistenceService.deserializar(new FuncionarioStorage());
  }

  set funcionarioStorage(funcionarioStorage: FuncionarioStorage) {
    if (funcionarioStorage) {
      this.persistenceService.serializar(funcionarioStorage);
    } else {
      this.persistenceService.remover(PersistenceEnum.FUNCIONARIO);
    }
  }


  get vendaStorage(): VendaStorage {
    return this.persistenceService.deserializar(new VendaStorage());
  }

  set vendaStorage(venda: VendaStorage) {
    const vendaOld = this.vendaStorage;
    if (venda) {
      venda.persistenceKey = VendaStorage.prototype.persistenceKey;
      this.persistenceService.serializar(venda);
    } else {
      this.persistenceService.remover(PersistenceEnum.VENDA);
    }
    this.changes$.next(
        Builder<ChangeStorage<VendaStorage>>()
            .currentValue(venda)
            .previousValue(vendaOld)
            .build()
    );
  }

  get tefStorage(): TefStorage {
    return this.persistenceService.deserializar(new TefStorage());
  }

  set tefStorage(tefStorage: TefStorage) {
    if (tefStorage) {
      tefStorage.persistenceKey = TefStorage.prototype.persistenceKey;
      this.persistenceService.serializar(tefStorage);
    } else {
      this.persistenceService.remover(PersistenceEnum.TEF);
    }
  }

  get orcamentoStorage(): OrcamentoStorage {
    return this.persistenceService.deserializar(new OrcamentoStorage());
  }

  set orcamentoStorage(orcamentoStorage: OrcamentoStorage) {
    if (orcamentoStorage) {
      orcamentoStorage.persistenceKey =
        OrcamentoStorage.prototype.persistenceKey;
      this.persistenceService.serializar(orcamentoStorage);
    } else {
      this.persistenceService.remover(PersistenceEnum.ORCAMENTO);
    }
  }

  get convenioStorage(): ConvenioStorage[] {
    return this.persistenceService.buscar<ConvenioStorage[]>(
      PersistenceEnum.CONVENIOS
    );
  }

  set convenioStorage(convenio: ConvenioStorage[]) {
    const convenioOld = this.convenioStorage;
    if (convenio) {
      this.persistenceService.salvar(PersistenceEnum.CONVENIOS, convenio);
    } else {
      this.persistenceService.remover(PersistenceEnum.CONVENIOS);
    }

    this.changes$.next(
      Builder<ChangeStorage<ConvenioStorage[]>>()
        .previousValue(convenioOld)
        .currentValue(convenio)
        .build()
    );
  }

  get cesta(): Item[] {
    return this.persistenceService.buscar<Item[]>(PersistenceEnum.CESTA);
  }

  set cesta(itensCesta: Item[]) {
    const itensOld = this.cesta;
    if (itensCesta) {
      this.persistenceService.salvar(PersistenceEnum.CESTA, itensCesta);
    } else {
      this.persistenceService.remover(PersistenceEnum.CESTA);
    }

    this.changes$.next(
      Builder<ChangeStorage<Item[]>>()
        .previousValue(itensOld)
        .currentValue(itensCesta)
        .build()
    );
  }

  get pbmFuncionalStorage(): PbmFuncionalStorage {
    return this.persistenceService.deserializar(new PbmFuncionalStorage());
  }

  set pbmFuncionalStorage(itemPbmFuncional: PbmFuncionalStorage) {
    if (itemPbmFuncional) {
      itemPbmFuncional.persistenceKey =
        PbmFuncionalStorage.prototype.persistenceKey;
      this.persistenceService.serializar(itemPbmFuncional);
    } else {
      this.persistenceService.remover(PersistenceEnum.PBM_FUNCIONAL);
    }
  }

  get enderecoEntregaStorage(): EnderecoEntregaStorage {
    return this.persistenceService.buscar<EnderecoEntregaStorage>(
      PersistenceEnum.ENDERECO_ENTREGA
    );
  }

  set enderecoEntregaStorage(enderecoEntrega: EnderecoEntregaStorage) {
    const enderecoEntregaOld = this.enderecoEntregaStorage;

    if (enderecoEntrega) {
      this.persistenceService.salvar(
        PersistenceEnum.ENDERECO_ENTREGA,
        enderecoEntrega
      );
    } else {
      this.persistenceService.remover(PersistenceEnum.ENDERECO_ENTREGA);
    }

    this.changes$.next(
      Builder<ChangeStorage<EnderecoEntregaStorage>>()
        .previousValue(enderecoEntregaOld)
        .currentValue(enderecoEntrega)
        .build()
    );
  }

  get entregaFormasPagamentoStorage(): EntregaFormasPagamentoStorage {
    return this.persistenceService.deserializar(
      new EntregaFormasPagamentoStorage()
    );
  }

  set entregaFormasPagamentoStorage(
    entregaFormasPagamento: EntregaFormasPagamentoStorage
  ) {
    const entregaFormasPagamentoOld = this.entregaFormasPagamentoStorage;

    if (entregaFormasPagamento) {
      entregaFormasPagamento.persistenceKey =
        EntregaFormasPagamentoStorage.prototype.persistenceKey;
      this.persistenceService.serializar(entregaFormasPagamento);
    } else {
      this.persistenceService.remover(PersistenceEnum.ENTREGA_FORMAS_PAGAMENTO);
    }

    this.changes$.next(
      Builder<ChangeStorage<EntregaFormasPagamentoStorage>>()
        .previousValue(entregaFormasPagamentoOld)
        .currentValue(entregaFormasPagamento)
        .build()
    );
  }

  get multiplasPbmsStorage(): AdminConvenioPbmStorage[] {
    return this.persistenceService.buscar<AdminConvenioPbmStorage[]>(
      PersistenceEnum.MULTIPLAS_PBMS
    );
  }

  set multiplasPbmsStorage(adminsPbm: AdminConvenioPbmStorage[]) {
    if (adminsPbm) {
      this.persistenceService.salvar(PersistenceEnum.MULTIPLAS_PBMS, adminsPbm);
    } else {
      this.persistenceService.remover(PersistenceEnum.MULTIPLAS_PBMS);
    }
  }

  get packStorage(): PackNovoStorage[] {
    return this.persistenceService.buscar<PackNovoStorage[]>(
      PersistenceEnum.PACK
    );
  }

  set packStorage(pack: PackNovoStorage[]) {
    if (pack) {
      this.persistenceService.salvar(PersistenceEnum.PACK, pack);
    } else {
      this.persistenceService.remover(PersistenceEnum.PACK);
    }
  }

  get politicasDescontoStorage(): PoliticasDescontoStorage {
    return this.persistenceService.deserializar(new PoliticasDescontoStorage());
  }

  set politicasDescontoStorage(cupom: PoliticasDescontoStorage) {
    const politicaDesconto = this.politicasDescontoStorage;

    if (cupom) {
      cupom.persistenceKey = PoliticasDescontoStorage.prototype.persistenceKey;
      this.persistenceService.serializar(cupom);
    } else {
      this.persistenceService.remover(PersistenceEnum.POLITICAS);
    }

    this.changes$.next(
      Builder<ChangeStorage<PoliticasDescontoStorage>>()
        .previousValue(politicaDesconto)
        .currentValue(cupom)
        .build()
    );
  }

  get taxaEntregaStorage(): TaxaEntregaStorage {
    return this.persistenceService.buscar<TaxaEntregaStorage>(
      PersistenceEnum.TAXA_ENTREGA
    );
  }

  set taxaEntregaStorage(taxaEntrega: TaxaEntregaStorage) {
    if (taxaEntrega) {
      this.persistenceService.salvar(PersistenceEnum.TAXA_ENTREGA, taxaEntrega);
    } else {
      this.persistenceService.remover(PersistenceEnum.TAXA_ENTREGA);
    }
  }

  get liberacaoDescontoStorage(): LiberacaoDescontoStorage {
    return this.persistenceService.deserializar(new LiberacaoDescontoStorage());
  }

  set liberacaoDescontoStorage(liberacao: LiberacaoDescontoStorage) {
    if (liberacao) {
      liberacao.persistenceKey =
        LiberacaoDescontoStorage.prototype.persistenceKey;
      this.persistenceService.serializar(liberacao);
    } else {
      this.persistenceService.remover(PersistenceEnum.LIBERACAO_DESCONTO);
    }
  }

  get liberacaoFreteStorage(): LiberacaoFreteStorage {
    return this.persistenceService.deserializar(new LiberacaoDescontoStorage());
  }

  set liberacaoFreteStorage(liberacao: LiberacaoFreteStorage) {
    if (liberacao) {
      liberacao.persistenceKey = LiberacaoFreteStorage.prototype.persistenceKey;
      this.persistenceService.serializar(liberacao);
    } else {
      this.persistenceService.remover(PersistenceEnum.LIBERACAO_FRETE);
    }
  }


  get itemLiberacaoDescontoStorage(): Array<ItemLiberacaoDescontoStorage> {
    return this.persistenceService.buscar<Array<ItemLiberacaoDescontoStorage>>(
      PersistenceEnum.ITENS_LIBERACAO_DESCONTO
    );
  }

  set itemLiberacaoDescontoStorage(
    itensLiberacaoDesconto: Array<ItemLiberacaoDescontoStorage>
  ) {
    if (itensLiberacaoDesconto) {
      this.persistenceService.salvar(
        PersistenceEnum.ITENS_LIBERACAO_DESCONTO,
        itensLiberacaoDesconto
      );
    } else {
      this.persistenceService.remover(PersistenceEnum.ITENS_LIBERACAO_DESCONTO);
    }
  }

  get keyStorage(): string {
    return this.persistenceService.buscar<string>(PersistenceEnum.KEY);
  }

  set keyStorage(key: string) {
    if (key) {
      this.persistenceService.salvar(PersistenceEnum.KEY, key);
    } else {
      this.persistenceService.remover(PersistenceEnum.KEY);
    }
  }

  }
