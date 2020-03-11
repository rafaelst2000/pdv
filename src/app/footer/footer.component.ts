import { Component, OnInit } from '@angular/core';
import { StorageFacade } from '../core/persistence/storage.facade';

@Component({
  selector: 'pdv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public cesta: any;
  public total;

  constructor(
    private storageFacade: StorageFacade
  ) { }

  ngOnInit() {
    this.cesta = this.storageFacade.cesta;
  }

}
