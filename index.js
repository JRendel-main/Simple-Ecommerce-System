// index.js
$(document).ready(function () {
    // Show Register Form
    $("#showRegisterForm").click(function (event) {
        event.preventDefault();
        $("#registerSection").show();
        $("#loginSection").hide(); // Add this line to hide the login section
    });

    // Register Form Submit
    $("#registerBtn").click(function (event) {
        event.preventDefault();
        var username = $("#registerUsername").val();
        var email = $("#registerEmail").val();
        var password = $("#registerPassword").val();
        var users = JSON.parse(localStorage.getItem("users")) || [];
        var newUser = { username: username, email: email, password: password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please login.");
        $("#registerForm")[0].reset();
        $("#registerSection").hide();
        $("#loginSection").show(); // Add this line to show the login section after registration
    });

    // Login Form Submit
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();
        var users = JSON.parse(localStorage.getItem("users")) || [];
        var user = users.find(function (u) {
            return u.email === email && u.password === password;
        });
        if (user) {
            alert("Login successful!");
            // Redirect or perform any action after successful login
        } else {
            alert("Invalid email or password.");
        }
    });
});
