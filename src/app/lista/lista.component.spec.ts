import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import { BuscaIntegrationService } from './service/busca-integration.service';
import { ListaService } from './service/lista.service';

/*describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */

describe('Soma', () => {
  it('deve retornar uma soma', async () => {
    expect(2+2).toBe(4)   
  })
})

describe('Lista Component Function', () => {
  it('deve retornar uma lista de itens', async () => {
    
  })
})