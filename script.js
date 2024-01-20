// burger bar

let burger = document.querySelector(".fa-bars")
let mark = document.querySelector(".fa-xmark")
let menu = document.querySelector(".header_nav")


burger.addEventListener("click", () => {
    burger.style.display = "none";
    mark.style.display = "block";
    menu.classList.add("show");
});

mark.addEventListener("click", () => {
    burger.style.display = "block";
    mark.style.display = "none";
    menu.classList.remove("show");
});

// slider

let indexOfSlide = 1;

function moveSlides(number) {
    slidesShower( indexOfSlide += number)
}

function currentSlide(number) {
    slidesShower(indexOfSlide = number);
}

function slidesShower(number) {
    let i;
    let slides = document.getElementsByClassName("myPictures");
    let dots = document.getElementsByClassName("dot");

    if (number > slides.length) {
        indexOfSlide = 1;
    }

    if (number < 1) {
        indexOfSlide = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[indexOfSlide-1].style.display = "block";
    dots[indexOfSlide-1].className += " active";
}

slidesShower(1);


// singin 

function validateSignIn() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple validation,
    if (username === 'example' && password === 'password') {
        // Successful sign-in
        errorMessage.textContent = '';
        alert('Sign in successful!');
    } else {
        // Failed sign-in
        errorMessage.textContent = 'Invalid username or password';
    }
}