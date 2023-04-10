
function linearSearch(arr = [], target){
for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
        return i
    }
}
return -1
}

console.log(linearSearch([-5, 5, 2,10, 3, 7], 2))
console.log(linearSearch([-5, 5, 2, 10, 3, 7], 10))

//Big o for this is 0(n)
// function linearSearch(arr = [], ele) {
//     arr.forEach((item, index) => {
//       if (item === ele) return index;
//     });
//     return -1;
//   }
  
//   console.log(linearSearch([-5, 1, 10, 11, 4], 10))