// JavaScript 'Promise' object

// Example:
/* new Promise (function(resolve, reject) {
    used for api calls, because
    an api call can take an unknown
    amount of time. the more users
    the longer the api call will take.
})
*/

// resolve & reject
function myStringChecker(my_str) {
    return new Promise((resolve, reject) => {
        if (my_str.length > 6) {
            resolve("This is greater than 6")
        } else {
            reject("This is less than or equal to 6")
        }
    })
}

myStringChecker("hello world").then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})


// instantiating a new Promise object 'pizzaPromise'
let pizzaPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Pizza delivered!");
    }, 3000);
});

pizzaPromise.then(function(message) {
    document.getElementById('deliveryStatus').textContent = message;
}).catch(function(error) {
    console.log("Delivery failed:", error);
});