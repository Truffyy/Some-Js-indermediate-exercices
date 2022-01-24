// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
       let numbers = document.getElementById("numbers").value;
    
       
       const splits = numbers.split(', ').sort(function(a, b){return a - b});
      alert (splits)


        
        // your code here

    });

})();