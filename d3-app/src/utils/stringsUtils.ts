/**
 * @param input 
 * @returns input string with first character capitalised
 */
export function toTitleCase(input: string): string {
    if (!input) return '';
    return input[0].toUpperCase() + input.substring(1);
}

/**
 * @param input 
 * @returns input string with each word capitalised
 */
export function capitalise(input: string): string {
    if (!input) return '';
    return input.split(' ').map(x => toTitleCase(x)).join(' ');
}