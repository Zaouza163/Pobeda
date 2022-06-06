const burgerMenuService = document.querySelector('#burger-menu-service');
const burgerAddList = document.querySelectorAll('.dropdown-menu-burger');
const currentCity = document.querySelector('.current__city');
const cityChoise = document.querySelector('.city-choise');
const toggle = document.querySelector('.nav-toggle');
const cityChoiseItem = document.querySelectorAll('.city-choise__item');
const currentCityBurger = document.querySelector('.current__city.burger');
const cityChoiseBurger = document.querySelector('.city-choise.burger');
const cityChoiseItemBurger = document.querySelectorAll('.city-choise__item.burger');
const callOrder = document.querySelectorAll('.call-order');
const submitOrder = document.querySelectorAll('.submit-order');
const acceptOrder = document.querySelectorAll('.accept-order');
const modalForm = document.querySelector('#modal-form');
const modalConfirm = document.querySelector('#modal-confirm');
const closeBtn = document.querySelectorAll('.close-btn');
const okBtn = document.querySelector('.ok');
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
  } else if (currentCity.getAttribute('data-city') == 'Санкт-Петербург') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
  } else if (currentCity.getAttribute('data-city') == 'Тольятти') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
  } else if (currentCity.getAttribute('data-city') == 'Краснодар') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
  } else if (currentCity.getAttribute('data-city') == 'Магнитогорск') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
  } else if (currentCity.getAttribute('data-city') == 'Пенза') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
  } else if (currentCity.getAttribute('data-city') == 'Пермь') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
  } else if (currentCity.getAttribute('data-city') == 'Рязань') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
  } else if (currentCity.getAttribute('data-city') == 'Самара') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
  } else if (currentCity.getAttribute('data-city') == 'Саратов') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
  } else if (currentCity.getAttribute('data-city') == 'Сызрань') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
  } else if (currentCity.getAttribute('data-city') == 'Челябинск') {
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
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
    } else if (currentCity.getAttribute('data-city') == 'Санкт-Петербург') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
    } else if (currentCity.getAttribute('data-city') == 'Тольятти') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
    } else if (currentCity.getAttribute('data-city') == 'Краснодар') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
    } else if (currentCity.getAttribute('data-city') == 'Магнитогорск') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
    } else if (currentCity.getAttribute('data-city') == 'Пенза') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
    } else if (currentCity.getAttribute('data-city') == 'Пермь') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
    } else if (currentCity.getAttribute('data-city') == 'Рязань') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
    } else if (currentCity.getAttribute('data-city') == 'Самара') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
    } else if (currentCity.getAttribute('data-city') == 'Саратов') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
    } else if (currentCity.getAttribute('data-city') == 'Сызрань') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
    } else if (currentCity.getAttribute('data-city') == 'Челябинск') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
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
    } else if (currentCityBurger.getAttribute('data-city') == 'Санкт-Петербург') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
    } else if (currentCityBurger.getAttribute('data-city') == 'Тольятти') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
    } else if (currentCityBurger.getAttribute('data-city') == 'Краснодар') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
    } else if (currentCityBurger.getAttribute('data-city') == 'Магнитогорск') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
    } else if (currentCityBurger.getAttribute('data-city') == 'Пенза') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
    } else if (currentCityBurger.getAttribute('data-city') == 'Пермь') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
    } else if (currentCityBurger.getAttribute('data-city') == 'Рязань') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
    } else if (currentCityBurger.getAttribute('data-city') == 'Самара') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
    } else if (currentCityBurger.getAttribute('data-city') == 'Саратов') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
    } else if (currentCityBurger.getAttribute('data-city') == 'Сызрань') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
    } else if (currentCityBurger.getAttribute('data-city') == 'Челябинск') {
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
    }
  })
})

burgerMenuService.addEventListener('click', () => {
  burgerAddList.forEach((el) => {
    el.classList.toggle('active-menu');
  })
})