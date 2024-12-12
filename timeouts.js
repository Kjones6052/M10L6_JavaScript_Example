// setTimeout(function, milliseconds)

console.log("Start");
setTimeout(function() {
    document.getElementById("waitMessage").textContent = "Wait for it... Done!";
    console.log("Wait for it...");
}, 5000);
console.log("End");