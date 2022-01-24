
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here

function perfectSquares(x, y){
 
    for (let i = x; i <= y; i++)
    {
   
       
        if (Math.sqrt(i) == parseInt(Math.sqrt(i)))
            alert (i + " ");
    }
}
let x = 1;
let y = 24;
perfectSquares(x, y)
 


    });

})();