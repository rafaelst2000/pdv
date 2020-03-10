import { HttpErrorResponse } from '@angular/common/http';

export class HttpErrorFactory {

    public static create(mensagem: string, httpStatus: number = 400): HttpErrorResponse {
        return new HttpErrorResponse({
            error: {
                body: [{message: mensagem}]
            },
            status: httpStatus
        });
    }

}