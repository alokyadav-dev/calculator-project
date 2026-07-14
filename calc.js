let currentExpression = "";

let Expression = document.querySelector(".expression-js");
let Result = document.querySelector(".result-js");

function appendValue(val) {
  currentExpression += val;
  Expression.innerText = currentExpression;
}

function lastDelete() {
  currentExpression = currentExpression.slice(0, -1);
  Expression.innerText = currentExpression;
}

function clearAll() {
  currentExpression = "";
  Expression.innerText = "";
  Result.innerText = "0";
}

function calculateResult() {
  let ans = eval(currentExpression);
  Result.innerText = ans;
  currentExpression = ans;
}
