function changeImage () {
    const mobileUrl = "assets/images/illustration-sign-up-mobile.svg";
    const desktopUrl = "assets/images/illustration-sign-up-desktop.svg";

    if (window.innerWidth < 1000) {
        document.querySelector(".image-container img").src = mobileUrl;
    } else {
        document.querySelector(".image-container img").src = desktopUrl;
    }
}

function validateEmail (enteredEmail) {

    if (enteredEmail.includes("@") && enteredEmail.includes(".") && enteredEmail.length > 4) {
        return true;
    }

    return false;
}

function showPopUp (currentElement, nextElement) {
    currentElement.style.display = "none";
    nextElement.style.display = "flex";
}

window.addEventListener("load", changeImage)
window.addEventListener("resize", changeImage)

const emailInput = document.querySelector(".input__email");
emailInput.addEventListener("input", () => {
    const email = emailInput.value;

    if (!validateEmail(email)) {
        emailInput.classList.add("input__email__error");
        document.querySelector(".error-message").style.display = "inline-block";
        document.querySelector(".submit-btn").disabled = true;
    } else {
        document.querySelector(".submit-btn").disabled = false;
        document.querySelector(".error-message").style.display = "none";
        if (emailInput.classList.contains("input__email__error")) {
            emailInput.classList.remove("input__email__error");
        }
    }
    
})

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const card = document.querySelector(".card");
    const popUp = document.querySelector(".pop-up")

    if (validateEmail(email)) {
        showPopUp(card, popUp)
        document.querySelector(".container").classList.toggle("h-screen");
    }
})