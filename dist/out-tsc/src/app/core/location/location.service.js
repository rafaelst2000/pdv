"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    LocationService.prototype.redireciona = function (url) {
        window.location.href = "/client/dist/#/" + url;
    };
    LocationService.prototype.redirecionar = function (url, queryParams) {
        var query = '';
        if (!!queryParams) {
            query = '?'.concat(Object.keys(queryParams).map(function (key) {
                return key + "=" + queryParams[key];
            }).join('&'));
        }
        window.location.href = "/client/dist/#/" + url.concat(query);
    };
    LocationService.prototype.reload = function () {
        window.location.reload();
    };
    LocationService.prototype.voltar = function () {
        if (window.history.length > 2) {
            window.history.back();
        }
        else {
            this.redireciona('cesta');
        }
    };
    LocationService.prototype.getUrl = function () {
        return window.location.href;
    };
    LocationService.prototype.getUrlParams = function () {
        var url = window.location.href;
        url = url.split('#')[1];
        var urlParams = {};
        var queryString = url.split('?')[1];
        if (!queryString) {
            if (url.search('=') !== -1) {
                queryString = url;
            }
        }
        if (queryString) {
            var keyValuePairs = queryString.split('&');
            for (var i = 0; i < keyValuePairs.length; i++) {
                var keyValuePair = keyValuePairs[i].split('=');
                var paramName = keyValuePair[0];
                var paramValue = keyValuePair[1] || '';
                urlParams[paramName] = decodeURIComponent(paramValue.replace(/\+/g, ' '));
            }
        }
        return urlParams;
    };
    LocationService = __decorate([
        core_1.Injectable()
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map