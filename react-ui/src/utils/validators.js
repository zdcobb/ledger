export function isEmpty(value) {
    return ["", undefined, null, [], {}].includes(value);
}

export function checkForMatchingPasswords(pass1, pass2) {
    return pass1 === pass2 ? [] : [`Passwords do not match`];
}
