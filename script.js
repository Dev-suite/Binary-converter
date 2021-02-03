var switched = false;

function convert() {
  if(!switched){
    var input = $('input').val();
    var numbers = input.split("");
    var number = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] == 1 || numbers[i] == 0){
        number += numbers[numbers.length - i - 1] * Math.pow(2, i);
      }
      else {
        return false;
      }
    }
    $('#output').val(number);
  }
}

setInterval(function() { convert(); }, 100);
