const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let indexSlide = 0;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let timer = 0;
makeTimer();
function makeTimer(){
    clearInterval(timer)
    timer = setInterval(nextSlide, 3000);
}

function nextSlide() {
    indexSlide === slides.length - 1 ? indexSlide = 0 : indexSlide++;
    prepareCurrentSlide(indexSlide);
    makeTimer();
}

function prevSlide() {
    indexSlide === 0 ? indexSlide = 2 : indexSlide--;
    prepareCurrentSlide(indexSlide);
    makeTimer();
}

const prepareCurrentSlide = indexSlide => {
    activeItem(slides, indexSlide);
    activeItem(dots, indexSlide);
}

const activeItem = (items, indexSlide) => {
    for(let item of items) {
        item.classList.remove('active');
    }
    items[indexSlide].classList.add('active');
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        indexSlide = indexDot;
        prepareCurrentSlide(indexSlide);
        makeTimer();
    })
})