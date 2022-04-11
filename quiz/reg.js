let input = document.querySelectorAll("input");
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let fname = document.getElementById("firstName");
let lname = document.getElementById("lastName");
let email = document.getElementById("em");
let emailCh = document.getElementById("emailCh")
let pass = document.getElementById("pass");
let passCon = document.getElementById("passCon");
let passCh = document.getElementById("passCh");
let chPass = document.getElementById("checkCon");
let sub = document.getElementById("btn");


let nameReg = /^[a-zA-Z]/;
let passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;


for (i = 0; i < input.length; i++) {
    input[i].onchange = function() {
        localStorage.setItem(this.name, this.value)
    }
}


function reg() {


    if (firstName.value.match(nameReg)) {
        fname.style.display = "none"
        if (lastName.value.match(nameReg)) {
            lname.style.display = "none"
                if (email.value.endsWith(".com") === false || email.value.includes("@") === false) {
                    emailCh.style.display = "inline"
                } else {
                    emailCh.style.display = "none"
                        if (pass.value.match(passReg)) {
                            passCh.style.display = "none"
                                if (pass.value === passCon.value) {
                                      chPass.style.display = "none"
                                      window.location.href = "login.html"
                                } else {
                                chpass.style.display = "inline"
                            }
                        } else {
                            passCh.style.display = "inline"
                        }
                    }
        } else {
            lname.style.display = "inline"
        }
    } else {
        fname.style.display = "inline"
}
}