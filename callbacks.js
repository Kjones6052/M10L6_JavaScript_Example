// A callback generally is a function passed into another function as an argument.

function greet(name, callback) {
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.textContent = "Hello, " + name + "!";
    callback();
}

function farewell() {
    const farewellMessage = document.getElementById("farewellMessage");
    farewellMessage.textContent = "Goodbye!";
}

document.getElementById("greeting").addEventListener("click", function() {
    greet("Alice", farewell);
})