let buttons = document.querySelectorAll('.feedback__btn');

let prev = null;

for (let button of buttons) {
    button.addEventListener('click', function handleClick() {
        if(button.classList.contains('chosen')){
            button.classList.remove('chosen');
        }
        else{
            if(prev != null){
                prev.classList.remove('chosen');
            }
            button.classList.add('chosen');
            prev = button;
        }
    });
  }