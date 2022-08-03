const btnpic1 = document.getElementById("pic1");
const btnpic2 = document.getElementById("pic2");
const btnpic3 = document.getElementById("pic3");
const btnpic4 = document.getElementById("pic4");
const boxpic = document.getElementById("boxpic");
const boxpic2 = document.getElementById("boxpic2");
const number = document.getElementById("numb");
boxpic.innerHTML = "<img src='./images/image-product-1.jpg' class='mainpic' onclick='openModal();currentSlide(1)'>";

/*---------------------------------------------------changepicture------------------------------------------------------ */
btnpic1.addEventListener("click", () => {
    boxpic.innerHTML = "<img src='./images/image-product-1.jpg' class='mainpic' onclick='openModal();currentSlide(1)'>"
    btnpic1.classList.add("selected");
    btnpic2.classList.remove("selected");
    btnpic3.classList.remove("selected");
    btnpic4.classList.remove("selected");
});

btnpic2.addEventListener("click", () => {
    boxpic.innerHTML = "<img src='./images/image-product-2.jpg' class='mainpic' onclick='openModal();currentSlide(2)'>"
    btnpic2.classList.add("selected");
    btnpic1.classList.remove("selected");
    btnpic3.classList.remove("selected");
    btnpic4.classList.remove("selected");
});

btnpic3.addEventListener("click", () => {
    boxpic.innerHTML = "<img src='./images/image-product-3.jpg' class='mainpic' onclick='openModal();currentSlide(3)'>"
    btnpic3.classList.add("selected");
    btnpic1.classList.remove("selected");
    btnpic2.classList.remove("selected");
    btnpic4.classList.remove("selected");
});

btnpic4.addEventListener("click", () => {
    boxpic.innerHTML = "<img src='./images/image-product-4.jpg' class='mainpic' onclick='openModal();currentSlide(4)'>"
    btnpic4.classList.add("selected");
    btnpic1.classList.remove("selected");
    btnpic3.classList.remove("selected");
    btnpic2.classList.remove("selected");
});


/*-------------------------------------------------zoom---------------------------------------------------------------------------*/
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


/*-------------------------------------------------plus&minus--------------------------------------------------------------------------------*/
document.getElementById("plus").addEventListener("click", () => {
    number.innerHTML = number.value++;
})
document.getElementById("minus").addEventListener("click", () => {
    if (number.value <= 0) {
        number.innerHTML = "0"
    } else {
        number.innerHTML = number.value--;
    }
})

/*-----------------------------------------------------------cart------------------------------------------------------------------------------------------*/
const btncart = document.getElementById("btncart");
const btnbin = document.getElementById("bin");
const cart = document.getElementById("cart");

cart.addEventListener("click", () => {
    document.querySelector('.card').classList.toggle("open");
});

btncart.addEventListener("click", () => {
    document.getElementById("buy").style.display = "block";
    document.getElementById("alertcart").style.display = "block";
    document.getElementById("alertcart").innerHTML = number.value;
    document.getElementById("howmany").innerHTML = "x " + number.value;
    document.getElementById("howmuch").innerHTML = "$" + 125 * number.value + ".00";
    document.getElementById("empty").style.display = "none";
});
btnbin.addEventListener("click", () => {
    document.getElementById("buy").style.display = "none";
    document.getElementById("alertcart").style.display = "none";
    document.getElementById("alertcart").innerHTML = "";
    document.getElementById("howmany").innerHTML = "";
    document.getElementById("howmuch").innerHTML = "";
    document.getElementById("empty").style.display = "block";
});

/*----------------------------------------------sidebar--------------------------------------------------------------------------------*/
document.getElementById("openmenu").addEventListener("click", () => {
    document.getElementById("closemenu").style.display = "block";
    document.getElementById("openmenu").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("cart").style.display = "none";
    document.getElementById("avatar").style.display = "none";
    document.getElementById("nav").classList.remove("navbar");
    document.getElementById("nav").classList.add("sidebar");
    document.getElementById("back").style.display = "block";

});


document.getElementById("closemenu").addEventListener("click", () => {
    document.getElementById("closemenu").style.display = "none";
    document.getElementById("openmenu").style.display = "block";
    document.getElementById("logo").style.display = "block";
    document.getElementById("cart").style.display = "block";
    document.getElementById("avatar").style.display = "block";
    document.getElementById("nav").classList.add("navbar");
    document.getElementById("nav").classList.remove("sidebar");
    document.getElementById("back").style.display = "none";
});