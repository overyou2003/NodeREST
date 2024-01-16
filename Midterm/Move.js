function capToFront(text) {
    let str = "";
    let textuse = text.toString();
    textuse.split('').forEach((char) => {
        if(char.toUpperCase()) {
            str += char;
        }
    })
    return str;

}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));