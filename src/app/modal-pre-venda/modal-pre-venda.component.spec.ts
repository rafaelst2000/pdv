import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreVendaComponent } from './modal-pre-venda.component';

describe('ModalPreVendaComponent', () => {
  let component: ModalPreVendaComponent;
  let fixture: ComponentFixture<ModalPreVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPreVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPreVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
