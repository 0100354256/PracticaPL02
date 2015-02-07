function calculate() {
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /^([-+]?)([0-9]+\.[0-9]+|[0-9]+)([cCfF])$/;
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = parseFloat(m[1] + m[2]);
    var type = m[3];

    converted.innerHTML = (type == 'c' || type == 'C') ? ((num * 9/5)+32)+'F' : ((num - 32)*5/9)+'C';
  }
  else
    converted.innerHTML = "¡ERROR! Formato Incorrecto";
}