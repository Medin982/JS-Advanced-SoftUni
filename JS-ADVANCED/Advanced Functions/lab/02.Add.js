function solve(num) {
   let value = function(secondNum) {
    return num + secondNum;
   }
   return value;
}

let add = solve(5);

console.log(add(3));

