function greet(greeting = "Hello", name = 'world', excited = true) {
  return `${greeting}, ${name}${excited ? '!' : '.'}`;
}

console.log(greet('Sup', 'Marilyn', false));
console.log(greet('Hey there', 'Pistachio'));
