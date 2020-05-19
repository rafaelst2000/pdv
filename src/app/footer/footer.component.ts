import { Component, OnInit, Input } from '@angular/core';

import { StorageFacade } from '../core/persistence/storage.facade';
import { FooterService } from './services/footer.service';


@Component({
  selector: 'pdv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() total: number = 0
  @Input() descontos: number = 0
  public cesta

  constructor(private FooterService: FooterService, private storageFacade: StorageFacade) {}

  ngOnInit() {
    this.cesta = this.storageFacade.cesta;
  }
  /*ngOnChanges(): void {
    console.log("ngOnChanges")
  } */
}
