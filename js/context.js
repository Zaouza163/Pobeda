const currentCity = document.querySelector('.current__city')
const cityChoise = document.querySelector('.city-choise')
const cityChoiseItem = document.querySelectorAll('.city-choise__item')
const currentCityBurger = document.querySelector('.current__city.burger')
const cityChoiseBurger = document.querySelector('.city-choise.burger')
const cityChoiseItemBurger = document.querySelectorAll('.city-choise__item.burger')
const burgerMenuService = document.querySelector('#burger-menu-service');
const burgerAddList = document.querySelectorAll('.dropdown-menu-burger');
const toggle = document.querySelector('.nav-toggle');
const slider1 = document.querySelector('.slider1');
const progress1 = document.querySelector('.progress1');
const slider2 = document.querySelector('.slider2');
const progress2 = document.querySelector('.progress2');
const callOrder = document.querySelectorAll('.call-order');
const submitOrder = document.querySelectorAll('.submit-order');
const acceptOrder = document.querySelectorAll('.accept-order');
const modalForm = document.querySelector('#modal-form');
const modalConfirm = document.querySelector('#modal-confirm');
const closeBtn = document.querySelectorAll('.close-btn');
const okBtn = document.querySelector('.ok');
let sliderValue1 = document.querySelector('#sliderValue1');
let sliderValue2 = document.querySelector('#sliderValue2');

okBtn.addEventListener('click', () => {
  modalConfirm.classList.remove('active');
})

closeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalForm.classList.remove('active');
    modalConfirm.classList.remove('active');
  })
})

callOrder.forEach((button) => {
  button.addEventListener('click', () => {
    modalForm.classList.add('active');
    let modalFormTitle = document.querySelector('.modal__title');
    let modalForText = document.querySelector('.modal__text');
    modalFormTitle.textContent = 'Введите свои данные';
    modalForText.textContent = 'чтобы заказать звонок';
    let btn = document.querySelector('.order-btn');
    btn.textContent = 'заказать звонок';
    btn.addEventListener('click', () => {
      modalForm.classList.remove('active');
      modalConfirm.classList.add('active');
    })
  })
})

submitOrder.forEach((button) => {
  button.addEventListener('click', () => {
    modalForm.classList.add('active');
    let modalFormTitle = document.querySelector('.modal__title');
    let modalForText = document.querySelector('.modal__text');
    modalFormTitle.textContent = 'Оставить заявку';
    modalForText.textContent = 'на кредит под залог ПТС';
    let btn = document.querySelector('.order-btn');
    btn.textContent = 'Оставить заявку';
    btn.addEventListener('click', () => {
      modalForm.classList.remove('active');
      modalConfirm.classList.add('active');
    })
  })
})

acceptOrder.forEach((button) => {
  button.addEventListener('click', () => {
    modalForm.classList.add('active');
    let modalFormTitle = document.querySelector('.modal__title');
    let modalForText = document.querySelector('.modal__text');
    modalFormTitle.textContent = 'Введите свои данные';
    modalForText.textContent = 'для окончательного одобрения';
    let btn = document.querySelector('.order-btn');
    btn.textContent = 'Оставить заявку';
    btn.addEventListener('click', () => {
      modalForm.classList.remove('active');
      modalConfirm.classList.add('active');
    })
  })
})

slider1.oninput = function(){
  progress1.style.width = `${this.value / 100000}%`;
  sliderValue1.value = `${this.value}`;
};

sliderValue1.oninput = function(){
  let val = this.value;
  if (5000 <= val <= 10000000) {
    progress1.style.width = `${val / 100000}%`;
    slider1.value = val;
  }
}

slider2.oninput = function(){
  let val = `${this.value}`;
  progress2.style.width = `${this.value / 10 - 3}%`;
  if (val < 6.1) {
    sliderValue2.value = 61;
  } else {
    sliderValue2.value = val;
  }
};

sliderValue2.oninput = function(){
  let val = this.value;
  progress2.style.width = `${val / 10 - 1.25}%`;
  slider2.value = val * 1.03;
}

toggle.addEventListener('click', function(e) {
  this.classList.toggle('opened');
});

currentCity.textContent = currentCity.getAttribute('data-city')
currentCityBurger.textContent = currentCityBurger.getAttribute('data-city')

currentCity.addEventListener('click', () => {
  cityChoise.classList.toggle('display-flex')
})

currentCityBurger.addEventListener('click', () => {
  cityChoiseBurger.classList.toggle('display-flex')
})

cityChoiseItem.forEach((city) => {
  city.addEventListener('click', () => {
    currentCity.setAttribute('data-city', city.textContent)
    currentCity.textContent = currentCity.getAttribute('data-city')
    cityChoise.classList.toggle('display-flex')
  })
})

cityChoiseItemBurger.forEach((city) => {
  city.addEventListener('click', () => {
    currentCityBurger.setAttribute('data-city', city.textContent)
    currentCityBurger.textContent = currentCityBurger.getAttribute('data-city')
    cityChoiseBurger.classList.toggle('display-flex')
  })
})

burgerMenuService.addEventListener('click', () => {
  burgerAddList.forEach((el) => {
    el.classList.toggle('active-menu');
  })
})
