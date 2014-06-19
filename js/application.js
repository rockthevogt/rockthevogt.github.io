/**
 * Generates a function that always returns a random item from an array.
 *
 * Strictly speaking, it shuffles the array and returns items sequentially
 * from the shuffled array, reshuffling the array as necessary. If it were
 * truly random, it would appear glitchy when the same item is returned twice
 * in a row.
 *
 * @param Array a
 * @return function
 */

function InfiniteRandomIterator(a) {
  var master = a.slice(0);
  var clone = [];

  var shuffle = function(array) {
    var currentIndex = array.length
    var temporaryValue;
    var randomIndex;

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
  };

  return function() {
    if (clone.length == 0) {
      clone = shuffle(master.slice(0));
    }
    return clone.shift();
  };
}
