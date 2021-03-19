function fnc(v) {
  document.getElementById("myText").value += v;
}

function equal(){
  let x = document.getElementById("myText").value
  let y = eval(x)
  document.getElementById("myText").value = y
}

var enter = document.getElementById("myText");
enter.addEventListener("keyup",function(result){
  if (result.keyCode === 13) {
      document.getElementById("eq").click();
  }
})

function cls() {
  document.getElementById("myText").value = ""
}