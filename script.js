let buttons = document.querySelectorAll('.feedback__btn');

let prev = null;
let number;

for (let button of buttons) {
    button.addEventListener('click', function handleClick() {
        if(button.classList.contains('chosen')){
            // button.classList.remove('chosen');
        }
        else{
            if(prev != null){
                prev.classList.remove('chosen');
            }
            button.classList.add('chosen');
            prev = button;
            number = prev.textContent;
            console.log(number);
        }
    });
}

let submit = document.querySelector('.feedback__submit');
let rating = document.querySelector('.final__rating');
submit.addEventListener('click', function handleClick() {
    document.querySelector('.feedback').style.display = 'none';
    rating.textContent = number;
});