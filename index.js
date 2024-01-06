// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
AppendCat("Ralph")

function destructivelyPrependCat(name){
    cats.unshift(name)
}
AppendCat("Bob")

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}


function appendCat(name){
    cats.push(name)
}
appendCat("Broom")