const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault() 
        //sendContactForm();
        checkForm(this);
    });
});