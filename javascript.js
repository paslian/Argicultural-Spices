//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

//Script Prev & next

var slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n){
    showSlide(slideIndex += n);
}

function dotslide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("imgslide");
    var dot = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < slides.length; i++) {
        dot[i].className = dot[i].className.replace(" active", " ");
    }

    slides[slideIndex - 1].style.display = "block";

    dot[slideIndex - 1].className += " active";
}


    //Slider Deskripsi Produk
    var slideIndex2 = 1;
        showSlide2(slideIndex2);

    function nextSlide2(n){
        showSlide2(slideIndex2 += n);
    }

    function descslide(n){
        showSlide2(slideIndex2 = n)
    }
    
    function showSlide2(n){
        var j;
        var slides2 = document.getElementsByClassName("imgslide2");
        var desc = document.getElementsByClassName("card")

        if (n > slides2.length) {
            slideIndex2 = 1;
        }
    
        if (n < 1) {
            slideIndex2 = slides2.length;
        }
    
        for (j = 0; j < slides2.length; j++) {
            slides2[j].style.display = "none";
        }
    
        slides2[slideIndex2 - 1].style.display = "block";
        desc[slideIndex - 1].className += " active";

    }
