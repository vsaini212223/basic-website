function greet(greeting = "Hello", name = "Jane Doe", excited = false) {
  return `${greeting}, ${name}, how are you${excited ? "!" : "."}`;
}
