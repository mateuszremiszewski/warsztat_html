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
// DROPDOWN LIST CHOSEN VALUE PRESENTATION

    var formCalc = document.querySelector('.form_calculator');
    var chairTitle = document.querySelector('.title');
    var chairColor = document.querySelector('.color');
    var chairPattern = document.querySelector('.pattern');
    var chairImg = document.querySelector('.image_part img');


    //CHAIRS COST VALUES

    var clair = 200;
    var margarita = 250;
    var selena = 270;

    var color = 50;

    var skora = 150;
    var tkanina = 100;

    //VALUES DIRECTION

    var titleValue = document.querySelector('.title.value');
    var colorValue = document.querySelector('.color.value');
    var patternValue = document.querySelector('.pattern.value');



    // TRANSPORT CHECKBOX EVENT
    var transportCheckbox = document.querySelector('.check-box input');
    var transportLabel = document.querySelector('.transport');
    var transportValue = document.querySelector('.transport-value');


    transportCheckbox.addEventListener('click',function () {

        if (transportCheckbox.checked === true){

            transportLabel.innerText = 'Transport';
            transportValue.innerText = transportCheckbox.dataset.transportPrice; //INSERT TRANSPORT VALUE

        }if (transportCheckbox.checked === false) { //UNCHECKED CLEAR VALUES

            transportLabel.innerText = '';
            transportValue.innerText ='';
        }

    });




    for (var i=0; i < panelLists.length; i++){


        var labelLi = panelLists[i].querySelectorAll('li');

         for (var j=0; j < labelLi.length; j++) {

             labelLi[j].addEventListener('click', function () {

                 //INSERT TEXT FROM .THIS ELEMENT

                 this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
                 this.parentElement.style.display = 'none'; //DISPLAY NONE AFTER OPTION SELECTED


                 //TYPE OPTION LIST
                 if(this.parentElement.parentElement.firstElementChild === formCalc.firstElementChild.firstElementChild){
                     chairTitle.innerText = this.innerText; //INSERT CHAIR NAME TO FORM

                     //PRODUCT TYPE VALUES

                     if(this.innerText === 'Clair'){
                         titleValue.innerText = clair
                     }if(this.innerText === 'Margarita') {
                         titleValue.innerText = margarita
                     }if(this.innerText === 'Selena') {
                         titleValue.innerText = selena
                     }

                 //COLOR OPTION LIST
                 }if(this.parentElement.parentElement === formCalc.firstElementChild.nextElementSibling ){
                     chairColor.innerText = this.innerText; //INSERT CHAIR COLOR TO FORM
                     colorValue.innerText = color;  //PRODUCT VALUES


                     //PRODUCT IMG CHANGE

                     if( this.innerText === 'Czerwony'){
                         chairImg.setAttribute('src', 'images/red_chair.png');
                     }
                     if (this.innerText === 'Czarny'){
                         chairImg.setAttribute('src', 'images/black_chair.png');
                     }
                     if (this.innerText === 'Pomarańczowy'){
                         chairImg.setAttribute('src', 'images/orange_chair.png');
                     }

                 //PATTERN OPTION LIST
                 }if(this.parentElement.parentElement === formCalc.firstElementChild.nextElementSibling.nextElementSibling ){
                     chairPattern.innerText = this.innerText; //INSERT CHAIR PATTERN TO FORM

                     //PRODUCT PATTERN VALUES

                     if(this.innerText === 'Tkanina'){
                         patternValue.innerText = tkanina
                     }if(this.innerText === 'Skóra') {
                         patternValue.innerText = skora
                     }
                 }



                 // SUM VALUES

                 var sum = document.querySelector('.sum strong');


                     sum.innerText = titleValue.innerText * 1 + colorValue.innerText * 1 + patternValue.innerText * 1



             });

         }
    }










});