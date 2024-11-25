'use strict';

const btnProducts = document.querySelector('#products');
const btnContact = document.querySelector('#contact');
const btnAbout = document.querySelector('#about');
const btnClickHere =document.querySelector('.click');
const btnExit =document.querySelector('.btn-exit');
const btnSend =document.querySelector('.btn-send');

const sectionAbout = document.querySelector('.about');
const sectionContact = document.querySelector('.contact');
const sectionProducts = document.querySelector('.products');
const cardBackground = document.querySelector('.card-bg');
const cardRequest = document.querySelector('.product-request');


//----------------FUNCTIONS---------------------
function show(){
    cardBackground.classList.remove('hidden');
    cardRequest.classList.remove('hidden')
}
function hidden(){
    cardBackground.classList.add('hidden');
    cardRequest.classList.add('hidden')
}

//---------------EVENTS--------------------------
btnProducts.addEventListener('click',function(e){
    e.preventDefault();
    sectionProducts.scrollIntoView({behavior:'smooth'});
})
btnContact.addEventListener('click',function(e){
    e.preventDefault();
    sectionContact.scrollIntoView({behavior:'smooth'});
})
btnAbout.addEventListener('click',function(e){
    e.preventDefault();
    sectionAbout.scrollIntoView({behavior:'smooth'});
})

btnExit.addEventListener('click' ,function(e){
    e.preventDefault();
    hidden();

});
btnClickHere.addEventListener('click' ,function(e){
    e.preventDefault();
    show();
});