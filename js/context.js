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
const mainTitle = document.querySelector('.title h2');
const formTitle = document.querySelector('.form__title.context h2');
const leftTitle = document.querySelector('.context__left-side__title');
const mapTitle = document.querySelector('.map > .title > h2');

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

if (localStorage.getItem('currentCity') == null) {
  currentCity.setAttribute('data-city', 'Москва');
} else {
  currentCity.setAttribute('data-city', localStorage.getItem('currentCity'));
}

currentCity.textContent = currentCity.getAttribute('data-city')
currentCityBurger.textContent = currentCityBurger.getAttribute('data-city')

window.addEventListener('load', () => {
  if (currentCity.getAttribute('data-city') == 'Москва') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
    mainTitle.textContent = 'Займ под залог ПТС в Москве';
    formTitle.textContent = 'Кредит под ПТС в Москве в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Москве выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Санкт-Петербург') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
    mainTitle.textContent = 'Займ под залог ПТС в Санкт-Петербурге';
    formTitle.textContent = 'Кредит под ПТС в Санкт-Петербурге в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Санкт-Петербурге выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Тольятти') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
    mainTitle.textContent = 'Займ под залог ПТС в Тольятти';
    formTitle.textContent = 'Кредит под ПТС в Тольятти в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Тольятти выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Краснодар') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
    mainTitle.textContent = 'Займ под залог ПТС в Краснодаре';
    formTitle.textContent = 'Кредит под ПТС в Краснодаре в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Краснодаре выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Магнитогорск') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
    mainTitle.textContent = 'Займ под залог ПТС в Магнитогорске';
    formTitle.textContent = 'Кредит под ПТС в Магнитогорске в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Магнитогорске выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Пенза') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
    mainTitle.textContent = 'Займ под залог ПТС в Пензе';
    formTitle.textContent = 'Кредит под ПТС в Пензе в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Пензе выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Пермь') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
    mainTitle.textContent = 'Займ под залог ПТС в Перми';
    formTitle.textContent = 'Кредит под ПТС в Перми в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Перми выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Рязань') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
    mainTitle.textContent = 'Займ под залог ПТС в Рязане';
    formTitle.textContent = 'Кредит под ПТС в Рязане в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Рязане выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Самара') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
    mainTitle.textContent = 'Займ под залог ПТС в Самаре';
    formTitle.textContent = 'Кредит под ПТС в Самаре в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Самаре выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Саратов') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
    mainTitle.textContent = 'Займ под залог ПТС в Саратове';
    formTitle.textContent = 'Кредит под ПТС в Саратове в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Саратове выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Сызрань') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
    mainTitle.textContent = 'Займ под залог ПТС в Сызране';
    formTitle.textContent = 'Кредит под ПТС в Сызране в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Сызране выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  } else if (currentCity.getAttribute('data-city') == 'Челябинск') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
    mainTitle.textContent = 'Займ под залог ПТС в Челябинске';
    formTitle.textContent = 'Кредит под ПТС в Челябинске в автоломбарде “Pobeda”';
    leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Челябинске выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
  }
})

currentCity.addEventListener('click', () => {
  cityChoise.classList.toggle('display-flex')
})

currentCityBurger.addEventListener('click', () => {
  cityChoiseBurger.classList.toggle('display-flex')
})

cityChoiseItem.forEach((city) => {
  city.addEventListener('click', () => {
    currentCity.setAttribute('data-city', city.textContent)
    localStorage.setItem('currentCity', city.textContent);
    currentCity.textContent = currentCity.getAttribute('data-city')
    cityChoise.classList.toggle('display-flex')
    if (currentCity.getAttribute('data-city') == 'Москва') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
      mainTitle.textContent = 'Займ под залог ПТС в Москве';
      formTitle.textContent = 'Кредит под ПТС в Москве в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Москве выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Санкт-Петербург') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
      mainTitle.textContent = 'Займ под залог ПТС в Санкт-Петербурге';
      formTitle.textContent = 'Кредит под ПТС в Санкт-Петербурге в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Санкт-Петербурге выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Тольятти') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
      mainTitle.textContent = 'Займ под залог ПТС в Тольятти';
      formTitle.textContent = 'Кредит под ПТС в Тольятти в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Тольятти выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Краснодар') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
      mainTitle.textContent = 'Займ под залог ПТС в Краснодаре';
      formTitle.textContent = 'Кредит под ПТС в Краснодаре в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Краснодаре выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Магнитогорск') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
      mainTitle.textContent = 'Займ под залог ПТС в Магнитогорске';
      formTitle.textContent = 'Кредит под ПТС в Магнитогорске в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Магнитогорске выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Пенза') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
      mainTitle.textContent = 'Займ под залог ПТС в Пензе';
      formTitle.textContent = 'Кредит под ПТС в Пензе в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Пензе выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Пермь') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
      mainTitle.textContent = 'Займ под залог ПТС в Перми';
      formTitle.textContent = 'Кредит под ПТС в Перми в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Перми выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Рязань') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
      mainTitle.textContent = 'Займ под залог ПТС в Рязане';
      formTitle.textContent = 'Кредит под ПТС в Рязане в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Рязане выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Самара') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
      mainTitle.textContent = 'Займ под залог ПТС в Самаре';
      formTitle.textContent = 'Кредит под ПТС в Самаре в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Самаре выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Саратов') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
      mainTitle.textContent = 'Займ под залог ПТС в Саратове';
      formTitle.textContent = 'Кредит под ПТС в Саратове в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Саратове выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Сызрань') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
      mainTitle.textContent = 'Займ под залог ПТС в Сызране';
      formTitle.textContent = 'Кредит под ПТС в Сызране в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Сызране выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCity.getAttribute('data-city') == 'Челябинск') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
      mainTitle.textContent = 'Займ под залог ПТС в Челябинске';
      formTitle.textContent = 'Кредит под ПТС в Челябинске в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Челябинске выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    }
  })
})

cityChoiseItemBurger.forEach((city) => {
  city.addEventListener('click', () => {
    currentCityBurger.setAttribute('data-city', city.textContent)
    localStorage.setItem('currentCity', city.textContent);
    currentCityBurger.textContent = currentCityBurger.getAttribute('data-city')
    cityChoiseBurger.classList.toggle('display-flex')
    if (currentCityBurger.getAttribute('data-city') == 'Москва') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
      mainTitle.textContent = 'Займ под залог ПТС в Москве';
      formTitle.textContent = 'Кредит под ПТС в Москве в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Москве выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Санкт-Петербург') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
      mainTitle.textContent = 'Займ под залог ПТС в Санкт-Петербурге';
      formTitle.textContent = 'Кредит под ПТС в Санкт-Петербурге в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Санкт-Петербурге выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Тольятти') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
      mainTitle.textContent = 'Займ под залог ПТС в Тольятти';
      formTitle.textContent = 'Кредит под ПТС в Тольятти в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Тольятти выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Краснодар') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
      mainTitle.textContent = 'Займ под залог ПТС в Краснодаре';
      formTitle.textContent = 'Кредит под ПТС в Краснодаре в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Краснодаре выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Магнитогорск') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
      mainTitle.textContent = 'Займ под залог ПТС в Магнитогорске';
      formTitle.textContent = 'Кредит под ПТС в Магнитогорске в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Магнитогорске выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Пенза') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
      mainTitle.textContent = 'Займ под залог ПТС в Пензе';
      formTitle.textContent = 'Кредит под ПТС в Пензе в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Пензе выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Пермь') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
      mainTitle.textContent = 'Займ под залог ПТС в Перми';
      formTitle.textContent = 'Кредит под ПТС в Перми в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Перми выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Рязань') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
      mainTitle.textContent = 'Займ под залог ПТС в Рязане';
      formTitle.textContent = 'Кредит под ПТС в Рязане в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Рязане выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Самара') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
      mainTitle.textContent = 'Займ под залог ПТС в Самаре';
      formTitle.textContent = 'Кредит под ПТС в Самаре в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Самаре выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Саратов') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
      mainTitle.textContent = 'Займ под залог ПТС в Саратове';
      formTitle.textContent = 'Кредит под ПТС в Саратове в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Саратове выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Сызрань') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
      mainTitle.textContent = 'Займ под залог ПТС в Сызране';
      formTitle.textContent = 'Кредит под ПТС в Сызране в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Сызране выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    } else if (currentCityBurger.getAttribute('data-city') == 'Челябинск') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
      mainTitle.textContent = 'Займ под залог ПТС в Челябинске';
      formTitle.textContent = 'Кредит под ПТС в Челябинске в автоломбарде “Pobeda”';
      leftTitle.innerHTML = '.<b>' + 'Автоломбард “Pobeda”' + '</b>' + ' в Челябинске выдает займы под залог отечественных и импортных легковых автомобилей и ПТС.';
    }
  })
})

burgerMenuService.addEventListener('click', () => {
  burgerAddList.forEach((el) => {
    el.classList.toggle('active-menu');
  })
})
