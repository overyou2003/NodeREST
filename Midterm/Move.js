function capToFront(text) {
    let str = "";
    let str2 = "";
    let textuse = text.toString();
    textuse.split('').forEach((char) => {
        if(char == char.toUpperCase()) {
            str += char;
        }
        else str2 += char;
    })
    str += str2;
    return str;

}

console.log(capToFront("saWaDee"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));