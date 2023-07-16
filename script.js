let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider-next').addEventListener('click', function() {
offset = offset + 560;
if (offset> 1680) {
    offset = 0;
}
sliderLine.style.left = - offset + "px";
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset - 560;
    if (offset< 0) {
        offset = 1680;
    }
    sliderLine.style.left = - offset + "px";
    });