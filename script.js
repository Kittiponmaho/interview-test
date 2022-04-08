// 1.   You have to group the below words by having the same letter but different position

let wordGroup = ["AMOR", "XISELA", "JAMON", "ROMA", "OMAR", "MORA", "ESPONJA", "RAMO", "JAPONES", "ARMO", "MOJAN", "MARO", "ORAM", "MONJA", "ALEXIS"];

//Print something like
// ALEXIS - XISELA
// AMOR - ROMA - OMAR - MORA - RAMO - ARMO - MARO - ORAM
// MONJA - JAMON - MOJAN
// ESPONJA - JAPONES

function myFunction(arr) {
  let m = {};
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split("").sort().join();
    if (temp in m) {
      m[temp].push(arr[i]);
    } else {
      m[temp] = [arr[i]];
    }
  }
  for (const key in m) {
    console.log(m[key].join(" - "));
  }
}

myFunction(wordGroup);

// 2.   You have to remove the parentheses and reverse the word inside.

// (bar) => rab
// foo(bar) => foorab

// foo(bar)blim => foorabblim
// foo(foo(bar))blim => foobaroofblim

let word1 = "foo(bar)";
let word2 = "(bar)";
let word3 = "foo(bar)blim";
let word4 = "foo(foo(bar))blim";

let wordGroup2 = ["foo(bar)", "(bar)", "foo(bar)blim", "foo(foo(bar))blim"];
function myFunction2(arr) {
    let emptyString = "";
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split("(").reverse().join("");
    console.log(temp);
  }
}

myFunction2(wordGroup2);
