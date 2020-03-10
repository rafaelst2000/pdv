export class ExceptionModel {

    constructor(
        public code?: number,
        public message?: string,
        public detail?: string,
        public field?: string
    ) {
    }

}