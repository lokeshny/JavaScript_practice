function fibonachi(n){
    const fib = [1,2]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib [i -2]
    }
    return fib
}
console.log(fibonachi(5));