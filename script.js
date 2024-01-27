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
    if (username === 'lasha' && password === 'Lasha@1') {
        // Successful sign-in
        errorMessage.textContent = '';
        alert('Sign in successful!');
    } else {
        // Failed sign-in
        errorMessage.textContent = 'Invalid username or password';
    }
}


//  validation part of register page

function submitData() {
    let firstName = document.getElementById("firstName");
    let username = document.getElementById("username");
    let password = document.getElementById("password")
    let result = document.getElementById("result")
    
    let nameValidator = /^[a-zA-Z]{2,50}$/
    let usernameValidator = /^[a-zA-Z0-9_-]{3,16}$/
    let passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/


    if (nameValidator.test(firstName.value) === false) {
        result.style.color = "red";
        result.innerHTML = "Name validation failed, minum 2 symbols maximum 50 is necesery";
    }

    if (usernameValidator.test(username.value) === false) {
        result.style.color = "red";
        result.innerHTML = "username validation failed, minum 2 symbols maximum 50 is necesery";
    }

    if (passwordValidator.test(password.value) === false) {
        result.style.color = "red";
        result.innerHTML = "Password validation failed. It must contain minumum 1 big letter, minumum 8 symbols, and 1 special symbol.";
    }

    if (passwordValidator.test(password.value) === true && usernameValidator.test(username.value) === true && nameValidator.test(firstName.value) === true)
    {
        alert("Success")
        result.style.color = "green";
        result.innerHTML = "you have successfully registered";
    }
}


//  weather api 

function resolveWeatherInfo() {
    let longitute = document.getElementById("longitute").value;
    let latitute = document.getElementById("latitute").value;
    let result = document.getElementById("result1");
    
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitute}&longitude=${longitute}&current_weather=true`, {
        method: "GET"
    }).then(response => response.json()).then(weatherInfo => {
        result.innerHTML = `
        <p> Temerature at the longitute of ${longitute} and at the latitute of ${latitute} is: ${weatherInfo.current_weather.temperature} </p>
        `
    })

}