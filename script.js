let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length; // Retorna o total de itens
let active = 0; // Corrigido para "active"

next.onclick = () => {
    let activeOld = document.querySelector('.active');
    if (activeOld) {
        activeOld.classList.remove('active');
    }

    active = active >= count - 1 ? 0 : active + 1; // Corrige o índice
    list[active].classList.add('active');
};

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    if (activeOld) {
        activeOld.classList.remove('active');
    }

    active = active <= 0 ? count - 1 : active - 1; // Corrige o índice
    list[active].classList.add('active');
};
