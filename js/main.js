function greet(greeting = "Hello", name = 'world', excited = true) {
  return `${greeting}, ${name}${excited ? '!' : '.'}`;
}

greet('Sup', 'Marilyn', false);
greet('Hey there', 'Pistachio');
