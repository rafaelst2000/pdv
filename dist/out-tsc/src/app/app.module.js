"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var lista_component_1 = require("./lista/lista.component");
var cesta_component_1 = require("./cesta/cesta.component");
var footer_component_1 = require("./footer/footer.component");
var storage_facade_1 = require("./core/persistence/storage.facade");
var persistence_1 = require("./core/persistence");
var core_module_1 = require("./core/core.module");
var footer_service_1 = require("./footer/services/footer.service");
var cesta_service_1 = require("./cesta/service/cesta.service");
var lista_service_1 = require("./lista/service/lista.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                lista_component_1.ListaComponent,
                cesta_component_1.CestaComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule
            ],
            providers: [
                storage_facade_1.StorageFacade,
                persistence_1.PersistenceService,
                footer_service_1.FooterService,
                cesta_service_1.CestaService,
                lista_service_1.ListaService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map