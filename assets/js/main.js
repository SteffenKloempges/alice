let openForm = document.getElementById('open-form');
let closeForm = document.getElementById('close-form');

openForm.addEventListener('click', () => {
    document.querySelector('.waitinglist-slider-form').style.right = 0;
    document.querySelector('.waitinglist-slider-form').style.left = 0;
})

closeForm.addEventListener('click', () => {
    document.querySelector('.waitinglist-slider-form').style.right = "-100%";
    document.querySelector('.waitinglist-slider-form').style.left = "100%";
})