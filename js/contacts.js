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
const title = document.querySelector('.contacts__text');
const mapTitle = document.querySelector('.map > .title > h2');
const content = document.querySelector('.contacts__content .container');
const formTitle = document.querySelector('.form .title h2');

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

currentCity.textContent = currentCity.getAttribute('data-city')
currentCityBurger.textContent = currentCityBurger.getAttribute('data-city')

window.addEventListener('load', () => {
  if (currentCity.getAttribute('data-city') == 'Москва') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
    formTitle.textContent = 'Кредит под ПТС в Москве в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Москва:  3 филиала</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Москва, Путейский тупик, 6, стр. 1</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> Б (внешнее кольцо), 024, 40, 78</li>
          <li class="right-side__item"><b>Метро</b> Курская</li>
        </ul>
      </div>
    </div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Москва, ул. Академика Ильюшина, 11</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 105, 132, 322</li>
          <li class="right-side__item"><b>Метро</b> Аэропорт</li>
        </ul>
      </div>
    </div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Москва, ул. Мосфильмовская, 51А</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> с263, 394</li>
          <li class="right-side__item"><b>Метро</b> Ломоносовский проспект</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Санкт-Петербург') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
    formTitle.textContent = 'Кредит под ПТС в Санкт-Петербурге в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Санкт-Петербург:  3 филиала</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Санкт-Петербург, Гороховая улица, 47с2</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 49, 181</li>
          <li class="right-side__item"><b>Троллейбус</b> 17</li>
          <li class="right-side__item"><b>Метро</b> Сенная площадь</li>
        </ul>
      </div>
    </div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Санкт-Петербург, Пироговская наб., 17, корп. 7</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 86, 267</li>
          <li class="right-side__item"><b>Маршрутное такси</b> К-62, К-262</li>
          <li class="right-side__item"><b>Метро</b> Выборгская</li>
        </ul>
      </div>
    </div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Санкт-Петербург, ул. Фучика, 14</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 36, 59, 117, 141</li>
          <li class="right-side__item"><b>Метро</b> Бухарестская</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Тольятти') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
    formTitle.textContent = 'Кредит под ПТС в Тольятти в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Тольятти:  1 филиал</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Тольятти, ул. Свердлова, 24А</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 20, 62</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 93, 95, 96, 108, 116, 131, 328</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Краснодар') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
    formTitle.textContent = 'Кредит под ПТС в Краснодаре в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Краснодар:  2 филиала</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Краснодар, Новороссийская ул., 9</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 10</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 58, 90</li>
        </ul>
      </div>
    </div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Краснодар, Московская ул., 108</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
        <li class="right-side__item"><b>Трамвай</b> 5, 8, 15, 21, 22</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Магнитогорск') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
    formTitle.textContent = 'Кредит под ПТС в Магнитогорске в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Магнитогорск:  1 филиал</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Магнитогорск, ул. Маяковского, 19/4</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 145</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 10, 36, 48, 137</li>
          <li class="right-side__item"><b>Трамвай</b> 1, 4, 4б, 8, 16, 16а, 16Б, 18, 25, 31, 35</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Пенза') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
    formTitle.textContent = 'Кредит под ПТС в Пензе в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Пенза:  2 филиала</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Пенза, Рузаевская ул., 7</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Маршрутное такси</b> 18, 34</li>
        </ul>
      </div>
    </div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Пенза, Революционная ул., 65</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
        <li class="right-side__item"><b>Маршрутное такси</b> 8, 17, 21, 33, 39, 418</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Пермь') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
    formTitle.textContent = 'Кредит под ПТС в Перми в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Пермь:  2 филиала</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Пермь, ул. Чернышевского, 32</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 1, 5, 8, 25, 61, 63, 75, 485</li>
          <li class="right-side__item"><b>Трамвай</b> 8</li>
        </ul>
      </div>
    </div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Пермь, ул. Карпинского, 17, корп. 1</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 11, 13, 27, 62, 747, 748, 823</li>
          <li class="right-side__item"><b>Трамвай</b> 11, 12</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Рязань') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
    formTitle.textContent = 'Кредит под ПТС в Рязане в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Рязань:  2 филиала</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Рязань, ул. Строителей, 14, стр. 1</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 20, 32 м3</li>
          <li class="right-side__item"><b>Троллейбус</b> 2</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 62 м2, 77 м2</li>
        </ul>
      </div>
    </div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Рязань, ул. Типанова, 25</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
        <li class="right-side__item"><b>Автобус</b> 2, 23, 30 м3</li>
        <li class="right-side__item"><b>Троллейбус</b> 3, 9, 17</li>
        <li class="right-side__item"><b>Маршрутное такси</b> 50 м2, 65 м2, 71 м2, 90 м2, 95 м2, 99 м2</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Самара') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
    formTitle.textContent = 'Кредит под ПТС в Самаре в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Самара:  2 филиала</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Самара, просп. Карла Маркса, 318Г</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 38, 55, 55к, 55н</li>
          <li class="right-side__item"><b>Трамвай</b> 7, 11, 12, 19</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 272, 305д, 395</li>
        </ul>
      </div>
    </div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Самара, ул. Дыбенко, 23</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
        <li class="right-side__item"><b>Автобус</b> 22, 35, 39, 56, 66</li>
          <li class="right-side__item"><b>Метро</b> Спортивная</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 21м, 46, 99, 140а, 141, 215, 392, 396, 401, 429, 492</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Саратов') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
    formTitle.textContent = 'Кредит под ПТС в Саратове в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Саратов:  1 филиал</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Саратов, Луговая ул., 80</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Трамвай</b> 3</li>
          <li class="right-side__item"><b>Автобус</b> 6, 11, 18д, 53</li>
          <li class="right-side__item"><b>Троллейбус</b> 5, 5а, 10</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 75, 81</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Сызрань') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
    formTitle.textContent = 'Кредит под ПТС в Сызране в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Сызрань:  1 филиал</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Сызрань, Образцовская ул., 46</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 5, 8, 124а</li>
        </ul>
      </div>
    </div>`;
  } else if (currentCity.getAttribute('data-city') == 'Челябинск') {
    title.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
    mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
    formTitle.textContent = 'Кредит под ПТС в Челябинске в автоломбарде “Pobeda”';
    content.innerHTML = `<div class="office__count">Челябинск:  1 филиал</div>
    <div class="office-block">
      <div class="left-side">
        <ul class="left-side__list">
          <li class="left-side__item adress">г. Челябинск, ул. Косарева, 50Б</li>
          <li class="left-side__item phone">8 800 775 60 33</li>
          <li class="left-side__item time">8:00 - 21:00</li>
        </ul>
      </div>
      <div class="right-side">
        <div class="right-side__how">Как добраться</div>
        <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 8, 71</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 17, 39 желтая, 86 синяя, 136</li>
        </ul>
      </div>
    </div>`;
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
      title.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
      formTitle.textContent = 'Кредит под ПТС в Москве в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Москва:  3 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Москва, Путейский тупик, 6, стр. 1</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> Б (внешнее кольцо), 024, 40, 78</li>
            <li class="right-side__item"><b>Метро</b> Курская</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Москва, ул. Академика Ильюшина, 11</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 105, 132, 322</li>
            <li class="right-side__item"><b>Метро</b> Аэропорт</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Москва, ул. Мосфильмовская, 51А</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> с263, 394</li>
            <li class="right-side__item"><b>Метро</b> Ломоносовский проспект</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Санкт-Петербург') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
      formTitle.textContent = 'Кредит под ПТС в Санкт-Петербурге в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Санкт-Петербург:  3 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Санкт-Петербург, Гороховая улица, 47с2</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 49, 181</li>
            <li class="right-side__item"><b>Троллейбус</b> 17</li>
            <li class="right-side__item"><b>Метро</b> Сенная площадь</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Санкт-Петербург, Пироговская наб., 17, корп. 7</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 86, 267</li>
            <li class="right-side__item"><b>Маршрутное такси</b> К-62, К-262</li>
            <li class="right-side__item"><b>Метро</b> Выборгская</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Санкт-Петербург, ул. Фучика, 14</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 36, 59, 117, 141</li>
            <li class="right-side__item"><b>Метро</b> Бухарестская</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Тольятти') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
      formTitle.textContent = 'Кредит под ПТС в Тольятти в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Тольятти:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Тольятти, ул. Свердлова, 24А</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 20, 62</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 93, 95, 96, 108, 116, 131, 328</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Краснодар') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
      formTitle.textContent = 'Кредит под ПТС в Краснодаре в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Краснодар:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Краснодар, Новороссийская ул., 9</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 10</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 58, 90</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Краснодар, Московская ул., 108</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
          <li class="right-side__item"><b>Трамвай</b> 5, 8, 15, 21, 22</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Магнитогорск') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
      formTitle.textContent = 'Кредит под ПТС в Магнитогорске в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Магнитогорск:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Магнитогорск, ул. Маяковского, 19/4</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 145</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 10, 36, 48, 137</li>
            <li class="right-side__item"><b>Трамвай</b> 1, 4, 4б, 8, 16, 16а, 16Б, 18, 25, 31, 35</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Пенза') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
      formTitle.textContent = 'Кредит под ПТС в Пензе в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Пенза:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Пенза, Рузаевская ул., 7</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Маршрутное такси</b> 18, 34</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Пенза, Революционная ул., 65</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
          <li class="right-side__item"><b>Маршрутное такси</b> 8, 17, 21, 33, 39, 418</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Пермь') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
      formTitle.textContent = 'Кредит под ПТС в Перми в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Пермь:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Пермь, ул. Чернышевского, 32</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 1, 5, 8, 25, 61, 63, 75, 485</li>
            <li class="right-side__item"><b>Трамвай</b> 8</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Пермь, ул. Карпинского, 17, корп. 1</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 11, 13, 27, 62, 747, 748, 823</li>
            <li class="right-side__item"><b>Трамвай</b> 11, 12</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Рязань') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
      formTitle.textContent = 'Кредит под ПТС в Рязане в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Рязань:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Рязань, ул. Строителей, 14, стр. 1</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 20, 32 м3</li>
            <li class="right-side__item"><b>Троллейбус</b> 2</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 62 м2, 77 м2</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Рязань, ул. Типанова, 25</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 2, 23, 30 м3</li>
          <li class="right-side__item"><b>Троллейбус</b> 3, 9, 17</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 50 м2, 65 м2, 71 м2, 90 м2, 95 м2, 99 м2</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Самара') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
      formTitle.textContent = 'Кредит под ПТС в Самаре в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Самара:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Самара, просп. Карла Маркса, 318Г</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 38, 55, 55к, 55н</li>
            <li class="right-side__item"><b>Трамвай</b> 7, 11, 12, 19</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 272, 305д, 395</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Самара, ул. Дыбенко, 23</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 22, 35, 39, 56, 66</li>
            <li class="right-side__item"><b>Метро</b> Спортивная</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 21м, 46, 99, 140а, 141, 215, 392, 396, 401, 429, 492</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Саратов') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
      formTitle.textContent = 'Кредит под ПТС в Саратове в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Саратов:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Саратов, Луговая ул., 80</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Трамвай</b> 3</li>
            <li class="right-side__item"><b>Автобус</b> 6, 11, 18д, 53</li>
            <li class="right-side__item"><b>Троллейбус</b> 5, 5а, 10</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 75, 81</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Сызрань') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
      formTitle.textContent = 'Кредит под ПТС в Сызране в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Сызрань:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Сызрань, Образцовская ул., 46</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 5, 8, 124а</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCity.getAttribute('data-city') == 'Челябинск') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
      formTitle.textContent = 'Кредит под ПТС в Челябинске в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Челябинск:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Челябинск, ул. Косарева, 50Б</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 8, 71</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 17, 39 желтая, 86 синяя, 136</li>
          </ul>
        </div>
      </div>`;
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
      title.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Москве';
      formTitle.textContent = 'Кредит под ПТС в Москве в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Москва:  3 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Москва, Путейский тупик, 6, стр. 1</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> Б (внешнее кольцо), 024, 40, 78</li>
            <li class="right-side__item"><b>Метро</b> Курская</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Москва, ул. Академика Ильюшина, 11</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 105, 132, 322</li>
            <li class="right-side__item"><b>Метро</b> Аэропорт</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Москва, ул. Мосфильмовская, 51А</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> с263, 394</li>
            <li class="right-side__item"><b>Метро</b> Ломоносовский проспект</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Санкт-Петербург') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Санкт-Петербурге';
      formTitle.textContent = 'Кредит под ПТС в Санкт-Петербурге в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Санкт-Петербург:  3 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Санкт-Петербург, Гороховая улица, 47с2</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 49, 181</li>
            <li class="right-side__item"><b>Троллейбус</b> 17</li>
            <li class="right-side__item"><b>Метро</b> Сенная площадь</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Санкт-Петербург, Пироговская наб., 17, корп. 7</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 86, 267</li>
            <li class="right-side__item"><b>Маршрутное такси</b> К-62, К-262</li>
            <li class="right-side__item"><b>Метро</b> Выборгская</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Санкт-Петербург, ул. Фучика, 14</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 36, 59, 117, 141</li>
            <li class="right-side__item"><b>Метро</b> Бухарестская</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Тольятти') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Тольятти';
      formTitle.textContent = 'Кредит под ПТС в Тольятти в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Тольятти:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Тольятти, ул. Свердлова, 24А</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 20, 62</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 93, 95, 96, 108, 116, 131, 328</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Краснодар') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Краснодаре';
      formTitle.textContent = 'Кредит под ПТС в Краснодаре в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Краснодар:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Краснодар, Новороссийская ул., 9</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 10</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 58, 90</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Краснодар, Московская ул., 108</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
          <li class="right-side__item"><b>Трамвай</b> 5, 8, 15, 21, 22</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Магнитогорск') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Магнитогорске';
      formTitle.textContent = 'Кредит под ПТС в Магнитогорске в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Магнитогорск:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Магнитогорск, ул. Маяковского, 19/4</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 145</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 10, 36, 48, 137</li>
            <li class="right-side__item"><b>Трамвай</b> 1, 4, 4б, 8, 16, 16а, 16Б, 18, 25, 31, 35</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Пенза') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Пензе';
      formTitle.textContent = 'Кредит под ПТС в Пензе в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Пенза:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Пенза, Рузаевская ул., 7</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Маршрутное такси</b> 18, 34</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Пенза, Революционная ул., 65</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
          <li class="right-side__item"><b>Маршрутное такси</b> 8, 17, 21, 33, 39, 418</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Пермь') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Перми';
      formTitle.textContent = 'Кредит под ПТС в Перми в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Пермь:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Пермь, ул. Чернышевского, 32</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 1, 5, 8, 25, 61, 63, 75, 485</li>
            <li class="right-side__item"><b>Трамвай</b> 8</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Пермь, ул. Карпинского, 17, корп. 1</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 11, 13, 27, 62, 747, 748, 823</li>
            <li class="right-side__item"><b>Трамвай</b> 11, 12</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Рязань') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Рязане';
      formTitle.textContent = 'Кредит под ПТС в Рязане в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Рязань:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Рязань, ул. Строителей, 14, стр. 1</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 20, 32 м3</li>
            <li class="right-side__item"><b>Троллейбус</b> 2</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 62 м2, 77 м2</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Рязань, ул. Типанова, 25</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 2, 23, 30 м3</li>
          <li class="right-side__item"><b>Троллейбус</b> 3, 9, 17</li>
          <li class="right-side__item"><b>Маршрутное такси</b> 50 м2, 65 м2, 71 м2, 90 м2, 95 м2, 99 м2</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Самара') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Самаре';
      formTitle.textContent = 'Кредит под ПТС в Самаре в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Самара:  2 филиала</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Самара, просп. Карла Маркса, 318Г</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 38, 55, 55к, 55н</li>
            <li class="right-side__item"><b>Трамвай</b> 7, 11, 12, 19</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 272, 305д, 395</li>
          </ul>
        </div>
      </div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Самара, ул. Дыбенко, 23</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
          <li class="right-side__item"><b>Автобус</b> 22, 35, 39, 56, 66</li>
            <li class="right-side__item"><b>Метро</b> Спортивная</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 21м, 46, 99, 140а, 141, 215, 392, 396, 401, 429, 492</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Саратов') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Саратове';
      formTitle.textContent = 'Кредит под ПТС в Саратове в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Саратов:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Саратов, Луговая ул., 80</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Трамвай</b> 3</li>
            <li class="right-side__item"><b>Автобус</b> 6, 11, 18д, 53</li>
            <li class="right-side__item"><b>Троллейбус</b> 5, 5а, 10</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 75, 81</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Сызрань') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Сызране';
      formTitle.textContent = 'Кредит под ПТС в Сызране в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Сызрань:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Сызрань, Образцовская ул., 46</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 5, 8, 124а</li>
          </ul>
        </div>
      </div>`;
    } else if (currentCityBurger.getAttribute('data-city') == 'Челябинск') {
      title.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
      mapTitle.textContent = 'Офисы для оформления займа под залог ПТС в Челябинске';
      formTitle.textContent = 'Кредит под ПТС в Челябинске в автоломбарде “Pobeda”';
      content.innerHTML = `<div class="office__count">Челябинск:  1 филиал</div>
      <div class="office-block">
        <div class="left-side">
          <ul class="left-side__list">
            <li class="left-side__item adress">г. Челябинск, ул. Косарева, 50Б</li>
            <li class="left-side__item phone">8 800 775 60 33</li>
            <li class="left-side__item time">8:00 - 21:00</li>
          </ul>
        </div>
        <div class="right-side">
          <div class="right-side__how">Как добраться</div>
          <ul class="right-side__list">
            <li class="right-side__item"><b>Автобус</b> 8, 71</li>
            <li class="right-side__item"><b>Маршрутное такси</b> 17, 39 желтая, 86 синяя, 136</li>
          </ul>
        </div>
      </div>`;
    }
  })
})

burgerMenuService.addEventListener('click', () => {
  burgerAddList.forEach((el) => {
    el.classList.toggle('active-menu');
  })
})
