angular.module('app').factory('studentService', ['nameService', function(nameService) {

  var data = [
    'Ben',
    'Blake',
    'Brandon',
    'Cha\'sed',
    'Daebrion',
    'David C.',
    'David H.',
    'Joshua',
    'Mark',
    'Robbie',
    'Sean',
    'Stoooo'
  ];

  var shuffledData = shuffle(data.slice());

  var classSize = data.length;

  return {
    getStudents: getStudents,
    getGroups: groupify,
    addStudent: addStudent,
    removeStudent: removeStudent,
    classSize: classSize,
    reshuffle: reshuffle
  };

  function getClassSize() {
    return classSize;
  }

  function addStudent(name) {
    data.push(name);
    this.classSize = data.length;
    shuffledData = shuffle(data.slice());
  }

  function removeStudent(name) {
    var i = data.indexOf(name);
    if ( i > -1) {
      data.splice(i, 1);
      this.classSize = data.length;
      shuffledData = shuffle(data.slice());
    }
  }

  function getStudents() {
    return data;
  }

  function reshuffle() {
    shuffledData = shuffle(data.slice());
  }

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

  function groupify(groupSize) {
    var groups = [];
    for ( var i=0; i<shuffledData.length; i+= groupSize ) {
      var name = nameService.getName();
      var group = shuffledData.slice(i, i+groupSize)
      groups.push({ 'name': name, 'group': group});
    }
    return groups;
  }

}]);