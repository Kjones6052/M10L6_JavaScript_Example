// Async Example

async function fetchUserData() {
    // Simulating a delay of 3 seconds to fetch user data
    await new Promise(resolve => setTimeout(resolve, 3000));
    return { name: "John Doe", age: 30, email: "john@example.com" };
}

async function displayUserData() {
    try {
        console.log("Hello there")
        const userData = await fetchUserData();
        console.log(userData)

        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.textContent = `Name: ${userData.name}, Age: ${userData.age}, Email: ${userData.email}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.textContent = "Failedd to fetch user data"; 
    }
}

document.addEventListener('DOMContentLoaded', displayUserData);