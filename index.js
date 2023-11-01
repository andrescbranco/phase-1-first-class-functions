function receivesAFunction(callback) {
    callback();
}

// function returnsANamedFunction() {
//     return function named() {
//     }
// }

const returnsANamedFunction = () => {
    return function named(){
        
    }
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}