import { Serializable } from "./serializable";
import { PersistenceEnum } from "./persistence.enum";
import { Item } from "../../cesta-storage/model/item";

export class ItemLiberacaoDescontoStorage extends Serializable {
  constructor(
    public codigo?: number,
    public alcada?: string,
    public bloquearAlteracao?: boolean,
    public desconto?: number,
    public identificadorUnico?: number,
    public itemCesta?: Item,
    public percentualDesconto?: number
  ){
    super();
  }

  persistenceKey(): PersistenceEnum {
    return PersistenceEnum.ITENS_LIBERACAO_DESCONTO;
}
}