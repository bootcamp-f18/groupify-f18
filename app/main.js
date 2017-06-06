function groupifyController($scope) {

  $scope.groupSize = 3;

  $scope.class = [
    'Daebrion',
    'David H.',
    'David C.',
    'Sean',
    'Mark',
    'Robbie',
    'Brandon',
    'Cha\'sed',
    'Stoooo',
    'Ben',
    'Joshua',
    'Blake'
  ];

  $scope.animals = ['Pandas', 'Bunnies', 'Squirrels', 'Otters'];

  $scope.adjectives = ['Happy', 'Smiling', 'Giggling', 'Sparkly']

  $scope.groupify = function() {

    var classCopy = $scope.class.slice();
    var shuffledClass = shuffle(classCopy);
    var groups = [];

    for ( i=0; i<classCopy.length; i+= $scope.groupSize ) {
      groups.push(shuffledClass.slice(i, i+$scope.groupSize));
    }

    return groups;

  };

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  $scope.nameGroup = function() {

    var adjective = $scope.adjectives[getRandomInt(0, $scope.adjectives.length)];
    var animal = $scope.animals[getRandomInt(0, $scope.animals.length)];

    return adjective + ' ' + animal;


  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}

angular.module('app', []).controller('groupifyController', groupifyController);