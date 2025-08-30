document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const loginId = document.getElementById("register-id").value;
    const password = document.getElementById("register-password").value;

    if (loginId && password) {
        // Save login ID and password to local storage
        const user = { loginId, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration successful! You can now log in.");
        window.location.href = "login.html";
    } else {
        alert("Please fill in all fields.");
    }
});