function telephoneCheck(phone_number) {
    const phone_regex = /^(1?\s?)?(\(?\s?\d{3}\)?)[\s.-]?\d{3}[\s.-]?(\d{4}$)/g;
    if (inRegex(phone_regex, phone_number)){
        console.log("True");
        // Check that there is an equal number of left and right parens
        let left_paren = (phone_number.match(/\(/g)||[]).length;
        console.log(left_paren);
        let right_paren = (phone_number.match(/\)/g)||[]).length;
        if (left_paren === right_paren){
            return true;
        }
    }
    return false;
}

function inRegex(regex, number) {
    return (regex).test(number)
}

telephoneCheck("555-555-5555");