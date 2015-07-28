var palindromeChainLength = function(n) {
  var steps = 0;
  var num = n;

  while (num !== parseFloat(num.toString().split("").reverse().join(""))){
    num += parseFloat(num.toString().split("").reverse().join(""));
    steps++;
    }

    return steps;
};