import { Injectable } from "@angular/core";


@Injectable()
export class FooterService{
  constructor(){}

  public salvarPreVenda(total){
    localStorage.clear()
    localStorage.setItem("Total", JSON.stringify(total))
  }
}
