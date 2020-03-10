import { Injectable } from '@angular/core';
import { QueryParamsInterface } from './query-params.interface';

@Injectable()
export class LocationService {

    public redireciona(url: string): void {
        window.location.href = `/client/dist/#/${url}`;
    }

    public redirecionar(url: string, queryParams?: QueryParamsInterface): void {
        let query: string = '';
        if (!!queryParams) {
            query = '?'.concat(Object.keys(queryParams).map(key => {
                return `${key}=${queryParams[key]}`;
            }).join('&'));
        }
        window.location.href = `/client/dist/#/${url.concat(query)}`;
    }


    public reload(): void {
        window.location.reload();
    }

    public voltar() {
        if (window.history.length > 2) {
            window.history.back();
        } else {
            this.redireciona('cesta');
        }
    }

    public getUrl(): any {
        return window.location.href;
    }

    public getUrlParams(): any {
        let url = window.location.href;
        url = url.split('#')[1];
        const urlParams = {};
        let queryString = url.split('?')[1];
        if (!queryString) {
            if (url.search('=') !== -1) {
                queryString = url;
            }
        }
        if (queryString) {
            const keyValuePairs = queryString.split('&');
            for (let i = 0; i < keyValuePairs.length; i++) {
                const keyValuePair = keyValuePairs[i].split('=');
                const paramName = keyValuePair[0];
                const paramValue = keyValuePair[1] || '';
                urlParams[paramName] = decodeURIComponent(paramValue.replace(/\+/g, ' '));
            }
        }
        return urlParams;
    }
}
