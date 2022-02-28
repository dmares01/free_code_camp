function palindrome(input) {
    const regex = /[^A-Za-z0-9]/g;
    let only_letters = input.replace(regex, "").toLowerCase()
    let ending_index = only_letters.length - 1

    for (let index = 0; index < only_letters.length; index++){
        if (only_letters[index] === only_letters[ending_index]){
            console.log("Same letter");
            ending_index--;
        }
        else{
            console.log("Not a palindrome")
            return false;
        }

    }
    return true;
}

palindrome("EYE");