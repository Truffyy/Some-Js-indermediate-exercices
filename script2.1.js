
(() => {
  // to get the value of an input: document.getElementById("element-id").value
  
  const performOperation = operation => {
      // perform the operation
      var x = Number(document.getElementById("op-one").value);
      var y = Number(document.getElementById("op-two").value);
    switch (operation) {
      case "addition":
        alert (x+y);
        break
      case "substraction":
        alert (x-y);
        break
      case "multiplication":
        alert (x*y);
        break
      case "division":
        alert (x/y);
        break
      default:
        alert(0);
    }
  }

  Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
    $btn.addEventListener(
        "click",
         () => (performOperation($btn.id), false),
         ),
  );
})();
