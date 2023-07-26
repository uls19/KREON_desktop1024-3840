
const images = document.querySelectorAll('.slider .slider__line img');
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width;

function init () {
    console.log('resize');

    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    
    rollSlider();    
}

window.addEventListener('resize', init);
init();
document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
    });

document.querySelector('.slider-next').addEventListener('click', function(){
count++;
if (count >= images.length) {
    count = 0;
}
rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}


let reg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
let inp = document.querySelector('.subscription__mail');
let span = document.querySelector('.subscription__error');


document.querySelector('.subscription__button').onclick = function(e){
  e.preventDefault();

  if (!validate(reg, inp.value)) {
   notValid(inp, span, 'Проверка не пройдена');
  }else{
    valid(inp, span, '');
  }
};

function validate(regex, inp){
  return regex.test(inp);
}

function notValid(inp, el, mess){
  inp.classList.add('is-invalid');
  el.innerHTML = mess;
}

function valid(inp, el, mess){
  inp.classList.remove('is-invalid');
  inp.classList.add('is-valid');
  el.innerHTML = mess;
}
