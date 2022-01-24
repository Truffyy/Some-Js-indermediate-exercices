(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("demo").addEventListener("click", () => {

        // your code here
        
    var points = [2, 4, 14, 10, 90, 23, 16];
        document.getElementById("demo").innerHTML = points;
        
        function myFunction() {
          points.sort(function(a, b){return a-b});
          document.getElementById("demo").innerHTML = points;
        }
})();