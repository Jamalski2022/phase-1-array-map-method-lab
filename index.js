
function titleCased() {
  const tutorials = [
    "What does the this keyword mean?",
    "What is the constructor OO pattern?",
    "Implementing blockchain web API",
    "The test driven development workflow",
    "What is NaN and how can we check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable state and pure functions",
    "What is the difference between == and ===?",
    "What is the difference between event capturing and bubbling?",
    "What is JSONP?"
  ];

  const titleCasedTutorials = tutorials.map(title => {
    return title.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });

  return titleCasedTutorials;
}

console.log(titleCased(tutorials));

