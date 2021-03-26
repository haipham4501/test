function fnc(v) {
  document.getElementById("myText").value += v;
  console.log (v);
}
/*function button*/
function equal(){
  let x = document.getElementById("myText").value
  let y = eval(x)
  document.getElementById("myText").value = y
  console.log (y);
  /*expressData = x
  resultData = y
  history.push({expression: expressData, result: resultData});
  showHistory()*/
}

function percent(){
  let x = document.getElementById("myText").value
  let y = x/100
  document.getElementById("myText").value = y
  console.log (y);
}

function root() {
  let x = document.getElementById("myText").value
  let y = Math.sqrt(x)
  document.getElementById("myText").value = y
  console.log (y);
}

/*key binding*/
var enter = document.getElementById("myText");
enter.addEventListener("keyup",function(result){
  if (result.keyCode === 13) {
      result.preventDefault();
      document.getElementById("eq").click();
  }
})

function cls() {
  document.getElementById("myText").value = ""
}
var del = document.getElementById("myText");
enter.addEventListener("keyup",function(blank){
  if (blank.keyCode === 46) {
      blank.preventDefault();
      document.getElementById("clr").click();
  }
})


/*other*/
let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function() {
  if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
  } else {
      document.documentElement.setAttribute('data-theme', 'light');
  }  
})


function openTab(tabName) {
var expand = document.getElementById("b1")
if (expand.style.display === "none") {
  expand.style.display = "block";
} else {
  expand.style.display = "none";
}
}