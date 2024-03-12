let greeting = prompt("What flavor would you like?",
    'vanilla, vanilla, vanilla, strawberry, coffee, coffee');
// START HERE: turn string into array with .split method: take a string.split(what charactor to split ",") //
// join turns an array into a string?


let userOrder = greeting.split(", ");

console.log(userOrder);
//flavors is vanila,strawberry, coffee, how to condense and keep count?
//OF turns the index to the property, IN turns the index to the value


function addUp() {
    const froyo = {};
    for (let index = 0; index < userOrder.length; index++) {
        const flavor = userOrder[index];

        if (froyo[flavor]) {
            froyo[flavor] += 1;
        } else {
            froyo[flavor] = 1;
        }
    } return froyo;
}

// flavors are added to OBJ, but now how to quantify?//
console.table(addUp(userOrder));