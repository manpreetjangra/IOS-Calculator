window.onload = function () {
  let firstNumber = null;
  let totalNumber = 0;
  let adding = null;
  let subtracting = null;
  let multiplying = null;
  let dividing = null;

  const text = document.querySelector(".calculations");
  const group = document.querySelector(".space");
  plusButton = document.getElementById("addition");
  clearButton = document.getElementById("clear");
  equalButton = document.getElementById("equal");
  subtractButton = document.getElementById("subtract");
  multiplyButton = document.getElementById("multiply");
  divideButton = document.getElementById("divide");

  group.addEventListener("click", function (event) {
    if (text.innerHTML == 0) {
      text.innerHTML = "";
      text.innerHTML += event.target.innerHTML;
    } else {
      text.innerHTML += event.target.innerHTML;
    }
  });

  plusButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (firstNumber == null) {
      firstNumber = parseInt(text.innerHTML);
      totalNumber += firstNumber;
      console.log(totalNumber);
    }
    if (firstNumber > 0) {
      text.innerHTML = 0;
      firstNumber = null;
    }
    adding = 1;
  });

  subtractButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (firstNumber == null) {
      firstNumber = parseInt(text.innerHTML);
      totalNumber = totalNumber - firstNumber;
      if (subtracting == null) {
        totalNumber = -totalNumber;
      }
      console.log(totalNumber);
    }
    if (firstNumber > 0) {
      text.innerHTML = 0;
      firstNumber = null;
    }
    subtracting = 2;
  });

  multiplyButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (firstNumber == null) {
      firstNumber = parseInt(text.innerHTML);
      if (multiplying == null) {
        totalNumber = 1;
      }
      totalNumber *= firstNumber;
      console.log(totalNumber);
    }
    if (firstNumber > 0) {
      text.innerHTML = 0;
      firstNumber = null;
    }
    multiplying = 3;
  });

  divideButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (firstNumber == null) {
      firstNumber = parseInt(text.innerHTML);
      totalNumber = firstNumber;
    }
    if (firstNumber > 0) {
      text.innerHTML = 0;
      firstNumber = null;
    }
    dividing = 4;
  });

  equalButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (adding == 1) {
      firstNumber = parseInt(text.innerHTML);
      totalNumber += firstNumber;
      adding = null;
      console.log(totalNumber);
      text.innerHTML = totalNumber;
    }

    if (subtracting == 2) {
      firstNumber = parseInt(text.innerHTML);
      totalNumber = totalNumber - firstNumber;
      subtract = null;
      console.log(totalNumber);
      text.innerHTML = totalNumber;
    }

    if (multiplying == 3) {
      firstNumber = parseInt(text.innerHTML);
      totalNumber *= firstNumber;
      multiplying = null;
      console.log(totalNumber);
      text.innerHTML = totalNumber;
    }

    if (dividing == 4) {
      firstNumber = parseInt(text.innerHTML);
      totalNumber = totalNumber / firstNumber;
      dividing = null;
      console.log(totalNumber);
      text.innerHTML = totalNumber;
    }
  });

  clearButton.addEventListener("click", function (event) {
    event.stopPropagation();
    text.innerHTML = "0";
    firstNumber = null;
    totalNumber = 0;
    adding = null;
    subtracting = null;
    multiplying = null;
    dividing = null;
  });
};
