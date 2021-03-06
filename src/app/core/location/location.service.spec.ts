import { ComponentFixture, async } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';

describe('LocationService', () => {
    let locationService: LocationService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                LocationService
            ]
        })
        .compileComponents()
        .then(() => {
            locationService = TestBed.get(LocationService);
        })
    }));
    
    describe('Deve ter realizado a chamada do método redireciona', () => {
        beforeEach(() => {
            spyOn(locationService, 'redireciona').and.callFake(() => { });
            locationService.redireciona('cesta');
        });
        it('Deve ter realizado a chamada do método redireciona', () => {
            expect(locationService.redireciona).toHaveBeenCalled();
        });
    });
});