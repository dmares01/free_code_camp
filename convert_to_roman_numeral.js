function convertToRoman(num) {
    let roman_table = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman_string = '';
    for (let value in roman_table) {
        while ( num >= roman_table[value] ) {
            // console.log(value)
            roman_string += value;
            num -= roman_table[value];
        }
    }
    console.log(roman_string)
    return roman_string;
}

convertToRoman(36);