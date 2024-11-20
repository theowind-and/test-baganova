// Выпадашка
function bodyHiden() {
    document.querySelector('body').style.overflow = 'hidden';
}

function bodyVisible() {
    document.querySelector('body').style.overflow = 'visible';
}


const servicesItems = document.querySelectorAll('.services__item');

servicesItems.forEach(item => {
    const open = item.querySelector('.services__item-open');
    const wrapper = item.querySelector('.services__wrapper_h');
    const height = wrapper.clientHeight;
    wrapper.style.height = '0px';

    open.addEventListener('click', () => {
        if (wrapper.clientHeight == 0) {
            wrapper.style.height = height + 'px';
            open.classList.add('services__item-open_active');
        } else {
            wrapper.style.height = '0px';
            open.classList.remove('services__item-open_active');
        }

    })
})

// Модалка без оплаты
const modal = document.querySelector('.modal-1');
const modalClose = modal.querySelector('.modal__close');
servicesItems.forEach(item => {
    const showBtns = item.querySelectorAll('.show-modal-1');
    showBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement.parentElement.parentElement;
            const title = item.querySelector('.services__item-title');
            const subtitle = parent.querySelector('.services__item-subtitle');
            const price = parent.querySelector('.services__item-price');
            const modalTitle = modal.querySelector('.modal__title');
            const modalPrice = modal.querySelector('.modal__contents-price');
            modalTitle.textContent = title.textContent + '-' + subtitle.textContent;
            modalPrice.textContent = price.textContent;
            modal.querySelector('input[name="title"]').value = title.textContent + '-' + subtitle.textContent;
            modal.querySelector('input[name="price"]').value = price.textContent;
            modal.classList.add('modal-1_active');
            bodyHiden();
        })
    })
})

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('modal-1_active');
        bodyVisible();
    }
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-1_active');
    bodyVisible();
})

// Модалка с оплатой

const modal_2 = document.querySelector('.modal-2');
const modalClose_2 = modal_2.querySelector('.modal__close');
// Услуги
servicesItems.forEach(item => {
    const showBtns = item.querySelectorAll('.show-modal-2');
    showBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement.parentElement.parentElement;
            const title = item.querySelector('.services__item-title');
            const subtitle = parent.querySelector('.services__item-subtitle');
            const price = parent.querySelector('.services__item-price');
            const modalTitle = modal_2.querySelector('.modal__title');
            const modalPrice = modal_2.querySelector('.modal__contents-price');
            modalTitle.textContent = title.textContent + '-' + subtitle.textContent;
            modalPrice.textContent = price.textContent;
            modal_2.querySelector('input[name="title"]').value = title.textContent + '-' + subtitle.textContent;
            modal_2.querySelector('input[name="price"]').value = price.textContent;
            modal_2.classList.add('modal-2_active');
            bodyHiden();
        })
    })
})
// Продукция онлайн
const products = document.querySelectorAll('.products__item');
products.forEach(item => {
    const showBtns = item.querySelector('.products__item-btn');
    showBtns.addEventListener('click', () => {
        const title = item.querySelector('.products__item-title');
        const price = item.querySelector('.products__item-price');
        const modalTitle = modal_2.querySelector('.modal__title');
        const modalPrice = modal_2.querySelector('.modal__contents-price');
        modalTitle.textContent = title.textContent;
        modalPrice.textContent = price.textContent;
        modal_2.querySelector('input[name="title"]').value = title.textContent;
        modal_2.querySelector('input[name="price"]').value = price.textContent;
        modal_2.classList.add('modal-2_active');
        bodyHiden();
    })
})
// Обучение
const trainingItems = document.querySelectorAll('.block__item');
trainingItems.forEach(item => {
    const showBtn = item.querySelector('.products__item-btn');
    showBtn.addEventListener('click', () => {
        const title = item.querySelector('.block__item-title');
        const price = item.querySelector('.block__item-price');
        const modalTitle = modal_2.querySelector('.modal__title');
        const modalPrice = modal_2.querySelector('.modal__contents-price');
        modalTitle.textContent = title.textContent;
        modalPrice.textContent = price.textContent;
        modal_2.querySelector('input[name="title"]').value = title.textContent;
        modal_2.querySelector('input[name="price"]').value = price.textContent;
        modal_2.classList.add('modal-2_active');
        bodyHiden();
    })
})

modal_2.addEventListener('click', (e) => {
    if (e.target === modal_2) {
        modal_2.classList.remove('modal-2_active');
        bodyVisible();
    }
})
modalClose_2.addEventListener('click', () => {
    modal_2.classList.remove('modal-2_active');
    bodyVisible();
})