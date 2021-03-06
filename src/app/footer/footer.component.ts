import { Component, OnInit } from '@angular/core';

import { StorageFacade } from '../core/persistence/storage.facade';
import { FooterService } from './services/footer.service';

@Component({
  selector: 'pdv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public total: number
  public descontos: number
  public cesta

  constructor(private FooterService: FooterService, private storageFacade: StorageFacade) { 

  }

  ngOnInit() {
    this.cesta = this.storageFacade.cesta;
    this.total = this.FooterService.totalLiquidoCesta()
    this.descontos = this.FooterService.totalDescontosCesta()
  }

}
