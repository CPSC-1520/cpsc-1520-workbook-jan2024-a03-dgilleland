const demo = function(data) {
if(isNaN(data)) {
  return 'Not a number';
} else if(data > 100) {
  return 'Whoa - big number';
}
}
demo('bob')
demo(1000)
demo(5)