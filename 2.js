function working() {

    var username = document.getElementById("uname").value;
    var displayUname = document.getElementById("displayuname");

    displayUname.innerHTML = "username is : " + username;

    document.getElementById("uname").value = "";

    var password = document.getElementById("pass").value;
    var displayPass = document.getElementById("displaypass");

    displayPass.innerHTML = "password is : " + password;
    document.getElementById("pass").value = "";
}