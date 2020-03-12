import { Component, OnInit } from '@angular/core';

import { StorageFacade } from '../core/persistence/storage.facade';
import { CestaService } from './service/cesta.service';

@Component({
  selector: 'pdv-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  public cesta: any;

  constructor(private CestaService: CestaService, private storageFacade: StorageFacade) { 

  }

  ngOnInit() {
    this.cesta = this.storageFacade.cesta;
  }

}
