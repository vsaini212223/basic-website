const greeting = 'hello, world!';

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.substring(1)}`;
}

function title(words) {
  return words.split(' ').map(capitalize).join(' ');
}

console.log(title(greeting));
