"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/core/testing");
var location_service_1 = require("./location.service");
describe('LocationService', function () {
    var locationService;
    beforeEach(testing_1.async(function () {
        testing_2.TestBed.configureTestingModule({
            imports: [],
            providers: [
                location_service_1.LocationService
            ]
        })
            .compileComponents()
            .then(function () {
            locationService = testing_2.TestBed.get(location_service_1.LocationService);
        });
    }));
    describe('Deve ter realizado a chamada do método redireciona', function () {
        beforeEach(function () {
            spyOn(locationService, 'redireciona').and.callFake(function () { });
            locationService.redireciona('cesta');
        });
        it('Deve ter realizado a chamada do método redireciona', function () {
            expect(locationService.redireciona).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=location.service.spec.js.map