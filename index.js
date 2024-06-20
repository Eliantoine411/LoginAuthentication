function checkPswd() {
    let userId = "codenath";
    let confirmPassword = "subscribe";
    let confirmId = document.querySelector(".id").value;
    let password = document.querySelector(".pw").value;

    if (password == confirmPassword && confirmId == userId) {
        document.querySelector("form").action = "home.html";
        console.log(password)

    } else {
        alert("please enter correct username/password");
    }
}