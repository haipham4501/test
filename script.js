function fnc(v) {
  document.getElementById("myText").value += v;
  console.log (v);
}

function equal(){
  let x = document.getElementById("myText").value
  let y = eval(x)
  document.getElementById("myText").value = y
  console.log (y);
}

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
      document.getElementById("clr").click();
  }
})