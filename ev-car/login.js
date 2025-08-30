document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const loginId = document.getElementById("login-id").value;
    const password = document.getElementById("login-password").value;

    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.loginId === loginId && user.password === password) {
        alert("Login successful!");
        window.location.href = "car.html"; // Redirect to the main page
    } else {
        alert("Invalid login ID or password. Please try again.");
    }
});