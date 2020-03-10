import { TestBed } from '@angular/core/testing';
import { MedicoRestService } from './../services/medico-rest.service';
import { MedicoServiceStub as stub } from './medico.service.stub';
import { MedicoService } from '../services/medico.service';
import { Observable } from 'rxjs';
import { SelectOptionModel } from '../../../shared/input/model/select-option.model';
import { StorageFacade } from '../../persistence/storage.facade';
import { StorageStubFacade } from '../../persistence/storage-stub.facade';
import {TestSuite} from "../../../test-utils/test-suite";


describe('MedicoService =>', () => {

    let service: MedicoService;
    let storage: StorageFacade;
    let medicoRestService: MedicoRestService;

    TestSuite.configure();

    beforeEach(() => {

        TestBed.configureTestingModule(
            {
                providers: [MedicoService,                  
                    {provide: StorageFacade, useClass: StorageStubFacade},  
                    { provide: MedicoRestService, useClass: stub },]
            });
        service = TestBed.get(MedicoService);        
        storage = TestBed.get(StorageFacade);
        medicoRestService = TestBed.get(MedicoRestService);
    });    

    describe('Inicializando testes =>', () => {

        describe('Dado que seja chamado o [BuscaMedico] =>', () => {
            beforeEach(() => {
                spyOn(medicoRestService, 'getMedico').and.callFake(() => Observable.of(stub.mockRetornoGetMedico()));
            });

            it('Então, a função espera que tenha sido chamada ...', () => {
                service.getMedico(stub.mockRetornoGetMedico()[0]).subscribe(
                    res => expect(medicoRestService.getMedico).toHaveBeenCalled(),
                    err => fail(err)
                )
            });

            it('Então a função compara com o retorno ...', () => {
                service.getMedico(stub.mockRetornoGetMedico()[0]).subscribe(
                    res => expect(res).toEqual(stub.mockRetornoGetMedico()[0]),
                    err => fail(err)
                )
            });            
        });

        describe('Dado que houve ERRO [BuscaMedico] =>', () => {
            beforeEach(() => {
                spyOn(medicoRestService, 'getMedico').and.callFake(() => Observable.throw(stub.mockRetornoGetError()));
            });

            it('Então a função compara o retorno com o erro ...', () => {
                service.getMedico(stub.mockRetornoGetMedico()[0]).subscribe(
                    res =>  fail(res),
                    err => expect(err).toEqual(stub.mockRetornoGetError()),
                );
            });
        });

        describe('Dado que seja chamado o [GetUFs] =>', () => {
            beforeEach(() => {
                spyOn(service, 'getUfs').and.callFake(() => stub.mockRetornoUfs());
                service.getUfs();
            });
            it('Então a funcção compara o retorno das ufs...', () => {
                let ufs: Array<String> = service.getUfs();
                expect(ufs).toEqual(stub.mockRetornoUfs());
            });
        });


        describe('Dado que seja chamado o [GetTipos] =>', () => {
            beforeEach(() => {
                spyOn(service, 'getTipos').and.callFake(() => stub.mockGetTipos());
                service.getTipos();
            });
            it('Então a função compara o retorno tipos...', () => {
                let tipos: Array<SelectOptionModel> = service.getTipos();
                expect(tipos).toEqual(stub.mockGetTipos());
            });
        });


        describe('Dado que seja chamado o [GetMedicoReceita] =>', () => {
            beforeEach(() => {        
                spyOn(service, 'getMedicoReceita').and.callFake(() => stub.mockGetMedicoReceita());
                service.getMedicoReceita(1);
            });
            it('Então a função ...', () => {        
                 let receita = service.getMedicoReceita(1);
                 expect(receita).toEqual(stub.mockGetMedicoReceita());
            });
        });

    });
});
