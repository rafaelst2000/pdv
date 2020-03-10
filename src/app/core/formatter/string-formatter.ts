export class StringFormatter {

    public static normalizeString(texto: string): string {
        return texto.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

}