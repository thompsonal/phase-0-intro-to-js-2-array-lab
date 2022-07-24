// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];

//  destructivelyAppendCat(name)
// 1) appends a cat to the end of the cats array

function destructivelyAppendCat(name) {
    cats.push('Ralph'); 
}

//     destructivelyPrependCat(name)
//2) prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift ('Bob');
}

//  destructivelyRemoveLastCat()
//.3 removes the last cat from the cats array:

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

// destructivelyRemoveFirstCat()
//.4 removes the first cat from the cats array
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

// appendCat(name)
//5 appends a cat to the cats array and returns a new array, 
//leaving the cats array unchanged

function appendCat(name) {
    return [...cats, name];
}

//  prependCat(name)
// 5) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
return [name, ...cats];
}

// 6. removes the last cat in the cats array and returns a new array, leaving the cats array unchanged:
function removeFirstCat () {
    return cats.slice(1);
}

//   removeFirstCat()
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged:
function removeLastCat () {
    return cats.slice(0, cats.length -1);
}