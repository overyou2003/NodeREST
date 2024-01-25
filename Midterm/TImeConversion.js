function digitalClock(time) {
    let H = Math.floor((time/60)/(60)%24);
    let M = Math.floor((time/60)%60);
    let S = time % 60;
    let changeH = String(H).padStart(2,'0')
    let changeM = String(M).padStart(2,'0')
    let changeS = String(S).padStart(2,'0')
    let result = `${changeH}:${changeM}:${changeS}`
    return [result];
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));