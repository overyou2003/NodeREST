function isValidIP(ipStr) {
    let result = true;
    ipStr.split('.').forEach((char) => {
        if((char > 255 && char > 0) ) {
            result = true;
        }
        else result = false;
    })

}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
