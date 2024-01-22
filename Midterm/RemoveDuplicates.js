function removeDups(datas) {
    let index = [];
    let done = true;
    let i = 0;
        do {
            index.push(datas[0]);
            done = false
        }
        while (done);
    for(let data of datas) {
        if(data != datas[i--]) {
            index.push(data);
        }
        i++;
    }
    return(index);
}


console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The" , "big" , "cat"]));
console.log(removeDups(["John","Taylor","John"]));