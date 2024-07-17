function digitToNumeral(digit: number, oneChar: string, fiveChar: string, tenChar: string): string {
    if (digit <= 3) {
        return oneChar.repeat(digit);
    } else if (digit === 4) {
        return `${oneChar}${fiveChar}`;
    } else if (digit === 5) {
        return fiveChar;
    } else if (digit <= 8) {
        return `${fiveChar}${oneChar.repeat(digit - 5)}`;
    } else if (digit === 9) {
        return `${oneChar}${tenChar}`;
    } else {
        return '';
    }
}

function intToRoman(num: number): string {
    let numberAsString = num.toString();
    let result = '';
    for (let i = 0; i < numberAsString.length; i++) {
        const digitPos = numberAsString.length - 1 - i;
        if (i === 0) {
            result = digitToNumeral(Number(numberAsString[digitPos]), 'I', 'V', 'X') + result;
        } else if (i === 1) {
            result = digitToNumeral(Number(numberAsString[digitPos]), 'X', 'L', 'C') + result;
        } else if (i === 2) {
            result = digitToNumeral(Number(numberAsString[digitPos]), 'C', 'D', 'M') + result;
        } else if (i === 3) {
            result = digitToNumeral(Number(numberAsString[digitPos]), 'M', '', '') + result;
        }
    }
    return result;
}

// Пример использования:
// console.log(intToRoman(1987)); // "MCMLXXXVII"
