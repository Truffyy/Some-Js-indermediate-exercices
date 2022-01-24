// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        var f = [];
        let number = document.getElementById("number").value;
    
function factorial (number) {
  if (number == 0 || number == 1)
    return 1;
  if (f[number] > 0)
    return f[number];
  return f[number] = factorial(number-1) * number;
}
alert (number)
        // your code here

    });

})();