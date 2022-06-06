const currentCity = document.querySelector('.current__city')
const cityChoise = document.querySelector('.city-choise')
const cityChoiseItem = document.querySelectorAll('.city-choise__item')
const currentCityBurger = document.querySelector('.current__city.burger')
const cityChoiseBurger = document.querySelector('.city-choise.burger')
const cityChoiseItemBurger = document.querySelectorAll('.city-choise__item.burger')
const burgerMenuService = document.querySelector('#burger-menu-service');
const burgerAddList = document.querySelectorAll('.dropdown-menu-burger');
const toggle = document.querySelector('.nav-toggle');
const reqsTitle = document.querySelectorAll('.reqs__slider__title')
const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const callOrder = document.querySelectorAll('.call-order');
const submitOrder = document.querySelectorAll('.submit-order');
const acceptOrder = document.querySelectorAll('.accept-order');
const modalForm = document.querySelector('#modal-form');
const modalConfirm = document.querySelector('#modal-confirm');
const closeBtn = document.querySelectorAll('.close-btn');
const okBtn = document.querySelector('.ok');
const readMoreBtn = document.querySelectorAll('.reviews__more');
let reviewTextAreas = document.querySelectorAll('.reviews__text');
const mainTitle = document.querySelector('.main-title');
const formTitle = document.querySelector('.form .title > h2');
const mapTitle = document.querySelector('.map > .title > h2');

reviewTextAreas.forEach((area) => {
  if (window.innerWidth >= 960) {
    if (area.scrollHeight > 192) {
      let reviewCard = area.closest('.reviews__card');
      let reviewMoreBtn = reviewCard.querySelector('.reviews__more');

      if (reviewMoreBtn.classList.contains('hidden')) {
        reviewMoreBtn.classList.remove('hidden');
      }
    }
  } else if (window.innerWidth >= 768) {
    if (area.scrollHeight > 145) {
      let reviewCard = area.closest('.reviews__card');
      let reviewMoreBtn = reviewCard.querySelector('.reviews__more');

      if (reviewMoreBtn.classList.contains('hidden')) {
        reviewMoreBtn.classList.remove('hidden');
      }
    }
  } else {
    if (area.scrollHeight > 160) {
      let reviewCard = area.closest('.reviews__card');
      let reviewMoreBtn = reviewCard.querySelector('.reviews__more');

      if (reviewMoreBtn.classList.contains('hidden')) {
        reviewMoreBtn.classList.remove('hidden');
      }
    }
  }
})

readMoreBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    let reviewCard = btn.closest('.reviews__card');
    let text = reviewCard.querySelector('.reviews__text');

    if (text.classList.contains('show-all-text')) {
      text.classList.remove('show-all-text');
      btn.textContent = 'читать полностью';
      text.scrollIntoView({block: "center"});
    } else {
      text.classList.add('show-all-text');
      btn.textContent = 'скрыть текст';
    }
  })
})

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

reqsTitle.forEach(function(el) {
  el.addEventListener('click', () => {
    reqsTitle.forEach(function(item) {
      item.classList.toggle('active-line')
      item.classList.toggle('bold')
    })

    firstCard.classList.toggle('visible')
    firstCard.classList.toggle('hidden')
    secondCard.classList.toggle('visible')
    secondCard.classList.toggle('hidden')
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

currentCity.textContent = currentCity.getAttribute('data-city');
currentCityBurger.textContent = currentCityBurger.getAttribute('data-city');

window.addEventListener('load', () => {
  let reviewsCity = document.querySelectorAll('.reviews__city');
  if (currentCity.getAttribute('data-city') == 'Москва') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Москве';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Москва'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
    formTitle.textContent = 'Срочный выкуп автомобиля в Москве в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Санкт-Петербург') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Санкт-Петербурге';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Санкт-Петербург'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
    formTitle.textContent = 'Срочный выкуп автомобиля в Санкт-Петербурге в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Тольятти') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Тольятти';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Тольятти'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
    formTitle.textContent = 'Срочный выкуп автомобиля в Тольятти в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Краснодар') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Краснодаре';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Краснодар'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
    formTitle.textContent = 'Срочный выкуп автомобиля в Краснодаре в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Магнитогорск') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Магнитогорске';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Магнитогорск'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
    formTitle.textContent = 'Срочный выкуп автомобиля в Магнитогорске в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Пенза') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Пензе';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Пенза'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
    formTitle.textContent = 'Срочный выкуп автомобиля в Пензе в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Пермь') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Перми';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Пермь'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
    formTitle.textContent = 'Срочный выкуп автомобиля в Перми в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Рязань') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Рязане';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Рязань'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
    formTitle.textContent = 'Срочный выкуп автомобиля в Рязане в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Самара') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Самаре';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Самара'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
    formTitle.textContent = 'Срочный выкуп автомобиля в Самаре в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Саратов') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Саратове';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Саратов'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
    formTitle.textContent = 'Срочный выкуп автомобиля в Саратове в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Сызрань') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Сызране';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Сызрань'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
    formTitle.textContent = 'Срочный выкуп автомобиля в Сызране в автоломбарде "Pobeda"';
  } else if (currentCity.getAttribute('data-city') == 'Челябинск') {
    mainTitle.textContent = 'Срочный выкуп автомобиля в Челябинске';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = 'Челябинск'
    })
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
    formTitle.textContent = 'Срочный выкуп автомобиля в Челябинске в автоломбарде "Pobeda"';
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
    currentCity.setAttribute('data-city', city.textContent);
    localStorage.setItem('currentCity', city.textContent);
    currentCity.textContent = currentCity.getAttribute('data-city');
    cityChoise.classList.toggle('display-flex');
    let reviewsCity = document.querySelectorAll('.reviews__city');
    if (currentCity.getAttribute('data-city') == 'Москва') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Москве';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Москва'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
      formTitle.textContent = 'Срочный выкуп автомобиля в Москве в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Санкт-Петербург') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Санкт-Петербурге';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Санкт-Петербург'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
      formTitle.textContent = 'Срочный выкуп автомобиля в Санкт-Петербурге в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Тольятти') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Тольятти';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Тольятти'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
      formTitle.textContent = 'Срочный выкуп автомобиля в Тольятти в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Краснодар') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Краснодаре';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Краснодар'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
      formTitle.textContent = 'Срочный выкуп автомобиля в Краснодаре в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Магнитогорск') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Магнитогорске';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Магнитогорск'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
      formTitle.textContent = 'Срочный выкуп автомобиля в Магнитогорске в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Пенза') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Пензе';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Пенза'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
      formTitle.textContent = 'Срочный выкуп автомобиля в Пензе в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Пермь') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Перми';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Пермь'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
      formTitle.textContent = 'Срочный выкуп автомобиля в Перми в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Рязань') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Рязане';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Рязань'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
      formTitle.textContent = 'Срочный выкуп автомобиля в Рязане в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Самара') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Самаре';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Самара'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
      formTitle.textContent = 'Срочный выкуп автомобиля в Самаре в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Саратов') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Саратове';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Саратов'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
      formTitle.textContent = 'Срочный выкуп автомобиля в Саратове в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Сызрань') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Сызране';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Сызрань'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
      formTitle.textContent = 'Срочный выкуп автомобиля в Сызране в автоломбарде "Pobeda"';
    } else if (currentCity.getAttribute('data-city') == 'Челябинск') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Челябинске';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Челябинск'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
      formTitle.textContent = 'Срочный выкуп автомобиля в Челябинске в автоломбарде "Pobeda"';
    }
  })
})

cityChoiseItemBurger.forEach((city) => {
  city.addEventListener('click', () => {
    currentCityBurger.setAttribute('data-city', city.textContent);
    localStorage.setItem('currentCity', city.textContent);
    currentCityBurger.textContent = currentCityBurger.getAttribute('data-city');
    cityChoiseBurger.classList.toggle('display-flex')
    let reviewsCity = document.querySelectorAll('.reviews__city');
    if (currentCityBurger.getAttribute('data-city') == 'Москва') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Москве';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Москва'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
      formTitle.textContent = 'Срочный выкуп автомобиля в Москве в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Санкт-Петербург') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Санкт-Петербурге';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Санкт-Петербург'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
      formTitle.textContent = 'Срочный выкуп автомобиля в Санкт-Петербурге в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Тольятти') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Тольятти';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Тольятти'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
      formTitle.textContent = 'Срочный выкуп автомобиля в Тольятти в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Краснодар') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Краснодаре';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Краснодар'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
      formTitle.textContent = 'Срочный выкуп автомобиля в Краснодаре в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Магнитогорск') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Магнитогорске';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Магнитогорск'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
      formTitle.textContent = 'Срочный выкуп автомобиля в Магнитогорске в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Пенза') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Пензе';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Пенза'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
      formTitle.textContent = 'Срочный выкуп автомобиля в Пензе в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Пермь') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Перми';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Пермь'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
      formTitle.textContent = 'Срочный выкуп автомобиля в Перми в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Рязань') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Рязане';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Рязань'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
      formTitle.textContent = 'Срочный выкуп автомобиля в Рязане в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Самара') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Самаре';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Самара'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
      formTitle.textContent = 'Срочный выкуп автомобиля в Самаре в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Саратов') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Саратове';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Саратов'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
      formTitle.textContent = 'Срочный выкуп автомобиля в Саратове в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Сызрань') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Сызране';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Сызрань'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
      formTitle.textContent = 'Срочный выкуп автомобиля в Сызране в автоломбарде "Pobeda"';
    } else if (currentCityBurger.getAttribute('data-city') == 'Челябинск') {
      mainTitle.textContent = 'Срочный выкуп автомобиля в Челябинске';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = 'Челябинск'
      })
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
      formTitle.textContent = 'Срочный выкуп автомобиля в Челябинске в автоломбарде "Pobeda"';
    }
  })
})

burgerMenuService.addEventListener('click', () => {
  burgerAddList.forEach((el) => {
    el.classList.toggle('active-menu');
  })
})
