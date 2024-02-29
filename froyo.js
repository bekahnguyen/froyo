let greeting = prompt("What flavor would you like?",
    'Vanilla, vanilla, vanilla, strawberry, coffee, coffee');
// START HERE: turn string into array with .split method: take a string.split(what charactor to split ",") //
// join turns an array into a string?


let userOrder = greeting.split(",");
console.log(userOrder);
//flavors is vanila,strawberry, coffee, how to condense and keep count?
//OF turns the index to the property, IN turns the index to the value


function addUp(order) {
    const froyo = {};
    for (const order of userOrder) {
        froyo[order] = userOrder[order];
        if (froyo.order = userOrder[order]) {
            froyo.order++
        } else {
            froyo(order) += 1
        }
    } return addUp(userOrder)

}

// flavors are added to OBJ, but now how to quantify?//
console.table(addUp(userOrder));