// Write your solution here!
function cats() {
    return [ 'Milo','Otis,'Garfield']
    }
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
 function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

destructivelyPrependCat("Bob");
 
 function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

destructivelyRemoveLastCat();


  function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

destructivelyRemoveFirstCat();

function appendCat(name) {
  return [...cats, name];
}

appendCat("Broom");

function prependCat(name) {
  return [name, ...cats];
}

prependCat("Arnold");


