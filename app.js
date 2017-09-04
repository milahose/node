function greet() {
  console.log('hi');
}
greet();

function logGreeting(fn) {
  fn();
}
logGreeting(greet);