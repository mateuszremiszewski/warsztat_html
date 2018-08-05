document.addEventListener('DOMContentLoaded', function () {

// SLIDER

    var prev = document.querySelector('.banner-prev');
    var next = document.querySelector('.banner-next');
    var sliders = document.querySelectorAll('.banner-slide');
    var slideIndex = 0;




    prev.addEventListener('click', function () {

    sliders[slideIndex].classList.remove('banner-slide-active');
    if (slideIndex <= 0) {
        slideIndex = sliders.length
    }

    slideIndex = slideIndex -1;
    sliders[slideIndex].classList.add('banner-slide-active');

    });

    next.addEventListener('click', function () {
        sliders[slideIndex].classList.remove('banner-slide-active');
        if(slideIndex >= sliders.length -1  ){
            slideIndex = -1;
        }

        slideIndex = slideIndex +1;
        sliders[slideIndex].classList.add('banner-slide-active');

    });

    var sliderInterval = setInterval(function () {

    sliders[slideIndex].classList.remove('banner-slide-active');
    if(slideIndex >= sliders.length -1  ){
        slideIndex = -1;
    }

    slideIndex = slideIndex +1;
    sliders[slideIndex].classList.add('banner-slide-active');

    },4000);

//CALCULATOR

    var arrows = document.querySelectorAll('.list_arrow');
    var panelLists = document.querySelectorAll('.list_panel') ;


//DROPDOWN LIST ARROWS EVENT / OPTIONS DISPLAY

    for (var i=0; i<arrows.length; i++) {


        arrows[i].addEventListener('click', function () {


                var list = this.nextElementSibling;

                if (list.style.display === "block") {
                    list.style.display = 'none';
                } else {
                    list.style.display = 'block';
                }
        });
    }

var titleList = document.querySelectorAll('section.choice_part.inline > div > div:nth-child(1) > ul li');
var titleSpan = document.querySelector('.title_span');
var colorList = document.querySelectorAll(' section.choice_part.inline > div > div:nth-child(2) > ul li');
var colorSpan = document.querySelector('.color');
var patternList = document.querySelectorAll('section.choice_part.inline > div > div:nth-child(3) > ul li');
var patternSpan = document.querySelector('.pattern');

var titleValue = document.querySelector('.title.value');
var colorValue = document.querySelector('.color.value');
var patternValue = document.querySelector('.pattern.value');

var img = document.querySelector('.productImg');
console.log(img);
var sum = document.querySelector('.sum strong');

//CHAIRS COST VALUES
var chair = '200';

var color = '50';

var pattern = '150';

function listElement(list,direction,valueDirection,value) {

    for (var i=0; i<list.length ; i++){


        list[i].addEventListener('click', function () {



            if(this.innerText === 'Czarny'){
                img.style.backgroundImage = "url('images/black_chair.png')";
            }
            if(this.innerText === 'Czerwony'){
                img.style.backgroundImage = "url('images/red_chair.png')";
            }
            if(this.innerText === 'Pomarańczowy'){
                img.style.backgroundImage = "url('images/orange_chair.png')";
                img.style.backgroundSize = 'contain'
            }

            direction.innerText = this.innerText;
            valueDirection.innerText = value;
            this.parentElement.parentElement.firstElementChild.innerText = this.innerText
            if(this.parentElement.style.display === 'block'){
                this.parentElement.style.display = 'none';
            }

            allSum()

        })
    }
}

 // TRANSPORT CHECKBOX EVENT
var transportCheckbox = document.querySelector('.check-box input');
var transportLabel = document.querySelector('.transport');
var transportValue = document.querySelector('.transport-value');


    transportCheckbox.addEventListener('change',function () {

    if (transportCheckbox.checked === true){

        transportLabel.innerText = 'Transport';
        transportValue.innerText = transportCheckbox.dataset.transportPrice; //INSERT TRANSPORT VALUE
        allSum()
    }if (transportCheckbox.checked === false) { //UNCHECKED CLEAR VALUES

        transportLabel.innerText = '';
        transportValue.innerText ='';
        allSum()
    }

});

function allSum() {
        sum.innerText = titleValue.innerText *1 + colorValue.innerText*1 + patternValue.innerText*1 + transportValue.innerText *1

}

listElement(titleList,titleSpan,titleValue,chair);

listElement(colorList,colorSpan,colorValue,color);

listElement(patternList,patternSpan,patternValue,pattern);











});