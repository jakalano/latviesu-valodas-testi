function checkFood() {
    var favoriteFood = document.getElementById("favoriteFood").value;
    if (favoriteFood == "spēlēšu") {
      document.getElementById("result").innerHTML = "Correct!";
    } else {
      document.getElementById("result").innerHTML = "Incorrect.";
    }
  }