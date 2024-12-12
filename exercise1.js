async function fetchUserProfile() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const userData = {
        name: "John Doe",
        age: 30,
        email: "john@example.com"
    };

    return userData;
}

async function displayUserProfile() {
    try {
        const userProfie = await fetchUserProfile();

        const userProfileElement = document.getElementById('userProfile');
        userProfileElement.innerHTML = `
            <h2>User Profile:</h2>
            <p><strong>Name:</strong> ${userProfie.name}</p>
            <p><strong>Age:</strong> ${userProfie.age}</p>
            <p><strong>Email:</strong> ${userProfie.email}</p>
        `;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        const userProfileElement = document.getElementById('userProfile');
        userProfileElement.innerHTML = "<h2>Error loading user profile</h2>";
    }
}

document.addEventListener('DOMContentLoaded', displayUserProfile);