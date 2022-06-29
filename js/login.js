function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let players = loadData();
    let loginStatus = false;
    if (username === "tuyen@gmail.com" && password === "admin") {
        window.location.href = "../index.html";
        clearInput();
        return;
    }
    for (const player of players) {
        if (player.email === username && player.password === password) {
            alert("Login successful!")
            window.location.href = "../black-jack/index.html";
            loginStatus = true
            clearInput()
            break;
        } else {
            loginStatus = false;
        }
    }
    if (!loginStatus) {
        document.getElementById("email-Alert").innerHTML = "Wrong Email or Password"
        clearInput()
    }
    clearInput()

}

function clearInput() {
    document.getElementById('username').value = ""
    document.getElementById('password').value = ""
}