function SmallestNum(array, mode) {
    let minNum = Number.MAX_VALUE;
    let minindex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i]<minNum) {
            minNum = array[i]
            minindex=i
        }
        
    }
    if (mode =="index") {
        return minindex
    }
    else{
        return minNum
    }
}

var test1 = [4,566,65,3,2,6,2]

console.log(SmallestNum(test1,"index"))
console.log(SmallestNum(test1,"number"))
