function recursievFactorial(n){
    if(n ===0 ){
        return 1;
    }
    return n * recursievFactorial(n-1)

}

console.log(recursievFactorial(1));
console.log(recursievFactorial(3));
console.log(recursievFactorial(6));
