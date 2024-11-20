const form_1 = document.querySelector('.modal__form-1');

form_1.addEventListener('submit', (e) =>{
    e.preventDefault();
    fetch('/', {
        method: 'POST',
        body: new FormData(form_1)
    })
    .then((response) => {
        form_1.reset();
        document.querySelector('.modal-1').classList.remove('modal-1_active');
        document.querySelector('.message').classList.add('message_active');
    })
})

const form_2 = document.querySelector('.modal__form-2');

form_2.addEventListener('submit', (e) =>{
    e.preventDefault();

    fetch('/', {
        method: 'POST',
        body: new FormData(form_2)
    })
    .then((response) => {
        form_2.reset();
        document.querySelector('.modal-1').classList.remove('modal-1_active');
        document.querySelector('.message').classList.add('message_active');
        window.location.href = 'https://www.tbank.ru/rm/bazhanova.viktoriya16/z2apL61585/';
    })
})

const form_3 = document.querySelector('.contacts__feedback-form');

form_3.addEventListener('submit', (e) =>{
    e.preventDefault();
    fetch('/', {
        method: 'POST',
        body: new FormData(form_3)
    })
    .then((response) => {
        form_3.reset();
        document.querySelector('.modal-1').classList.remove('modal-1_active');
        document.querySelector('.message').classList.add('message_active');
    })
})