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
            for(let j = 0 ; j < index.length ; j++) {
                if(data == index[j]) {
                    i = 0;
                    break;
                } 
                else if(data != index[j]) i = 1;
            }
            if(i == 1) {
                index.push(data);
            }
        }
    return(index);
}

console.log(removeDups([1,0,1,0,1,2,3]));
console.log(removeDups(["The" , "big" , "cat" , "cat"]));
console.log(removeDups(["John","Taylor","John"]));