var roster = [
  // 'abel',
  'andrew',
  // 'anjali',
  // 'amelia',
  'daniela',
  'danny',
  // 'diego',
  'joe',
  'mark',
  'martin',
  // 'matt',
  'jon',
  'mr',
  'myqe',
  'thomas',
  'will',
  // 'jared',
  'julio',
  'liz'
]

var pairs = [];
var n = roster.length;
// var i, j;
// for(i = 0; i < n; i++){
//   for(j = i + 1; j < n; j++){
//     pairs.push(roster[i] + ", " +  roster[j]);
//   }
// }
// while (pairs.length < n / 2) {
while (n > 0) {
  if (n === 1) {
    pairs.push(roster[0]);
    n = 0;
  } else {
    var ind = Math.round(Math.random() * (n - 1));
    var ind2 = Math.round(Math.random() * (n - 1));
    while (ind2 === ind) {
      ind2 = Math.round(Math.random() * n);
    }
    var pairString = '';
    pairString = pairString + roster.splice(ind, 1);
    if (ind < ind2) {
      ind2 = ind2 - 1;
    } else if (ind > ind2) {
      ind2 = ind2 + 1;
    }
    pairString = pairString + ", " + roster.splice(ind2, 1);
    pairs.push(pairString);
    n = roster.length;
  }
}

function makeUL(array) {
  // Create the list element:
  var list = document.createElement('ul');

  for(var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(array[i]));

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

// Add the contents of options[0] to #foo:
// document.getElementById('list').appendChild(makeUL(roster));
document.getElementById('list').appendChild(makeUL(pairs));
