(() => {
document.getElementById("addition").addEventListener("click", function() {
    // perform an addition
    var x = Number(document.getElementById("op-one").value);
    var y = Number(document.getElementById("op-two").value);
    var sum = x+y;
    alert(sum);
}); 

document.getElementById("substraction").addEventListener("click", function() {
    // perform an substraction
    var x = Number(document.getElementById("op-one").value);
    var y = Number(document.getElementById("op-two").value);
    var sous = x-y;
    alert(sous);
});

document.getElementById("multiplication").addEventListener("click", function() {
    // perform an multiplication
    var x = Number(document.getElementById("op-one").value);
    var y = Number(document.getElementById("op-two").value);
    var mul = x*y;
    alert(mul);
});

document.getElementById("division").addEventListener("click", function() {
    // perform an division
    var x = Number(document.getElementById("op-one").value);
    var y = Number(document.getElementById("op-two").value);
    var div = x/y;
    alert(div);
});
})();