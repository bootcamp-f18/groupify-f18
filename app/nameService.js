angular.module('app').factory('nameService', function() {

  var animals = [
    'Pandas', 'Bunnies', 'Squirrels', 'Otters', 'Unicorns',
    'Chupacabras', 'Chipmunks', 'Slugs', 'Chickens', 'Bears'
  ];
  
  var adjectives = [
    'Happy', 'Smiling', 'Giggling', 'Sparkly', 'Dancing',
    'Unconcerned', 'Introspective', 'Pretty', 'Silly', 'Zippy'
  ];

  return {
    getName: getName
  };

  function getName() {
    var adjective = adjectives[getRandomInt(0, adjectives.length)];
    var animal = animals[getRandomInt(0, animals.length)];
    return adjective + ' ' + animal;
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

});