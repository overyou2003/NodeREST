function isValidIP(ipStr) {
    let result = true;
    let i = 0;
    ipStr.split('.').forEach((char) => {
        // เช็คถ้า IP ตั้งแต่ตำแหน่งที่ 1 น้อยกว่า 0 หรือมากกว่า 255
        if(i > 0 ) {
            if((char < 0 || char > 255) ) {
                result = false;
            }
        }
        // เช็คถ้า IP ตำแหน่งที่สองเป็นต้นไปมีค่าเกิน 99 หรือน้อยกว่า 10
        else if(i > 0 ) {
            if(char > 99 || char < 10) result = false;
        }
        i++;
    })
    // เช็คถ้ามากกว่า 4 ตำแหน่ง 
    if (i < 4 || i > 4) result = false;
    return result;

}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
