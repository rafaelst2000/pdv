import { Component, Input, OnInit } from '@angular/core';

import { StorageFacade } from '../core/persistence/storage.facade';
import { FooterService } from './service/footer.service';


@Component({
  selector: 'pdv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() total: number = 0
  @Input() descontos: number = 0
  public cesta: any

  constructor(private storageFacade: StorageFacade,
              private footerService: FooterService) {}

  ngOnInit() {
    this.cesta = this.storageFacade.cesta;
  }

  addPreVenda(){
    this.footerService.salvarPreVenda(this.total)
  }


}
