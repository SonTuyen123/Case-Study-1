class Player {
    constructor(firstName, lastName, email, password) {
        this.name = firstName;
        this.lastName = lastName
        this.email = email;
        this.password = password;
    }
}
function dang_ky() {
    let userEmail = document.getElementById('email-signup').value;
    let password = document.getElementById('password-signup').value;
    let firstName = document.getElementById('firstName-signup').value;
    let lastName = document.getElementById('lastname-signup').value;
    let player = new Player(firstName, lastName, userEmail, password)
    LoadingUser(player)
    alert('registration is successful')
    clearInputInRegister()
    window.location.href = "/Case/login.html";
}

function LoadingUser(player) {
    let data =loadData();
    data.push(player);
    localStorage.setItem("players", JSON.stringify(data));
}
function loadData() {
    let data = [];
    console.log(localStorage.hasOwnProperty('players'));
    if(localStorage.hasOwnProperty('players')){
        data = JSON.parse(localStorage.getItem('players'));
    }
    return data;
}
function clearInputInRegister() {
    document.getElementById('password-signup').value = ""
    document.getElementById('email-signup').value = ""
    document.getElementById('firstName-signup').value = ""
    document.getElementById('lastname-signup').value = ""

}
