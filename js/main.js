const currentCity = document.querySelector('.current__city')
const cityChoise = document.querySelector('.city-choise')
const cityChoiseItem = document.querySelectorAll('.city-choise__item')
const currentCityBurger = document.querySelector('.current__city.burger')
const cityChoiseBurger = document.querySelector('.city-choise.burger')
const cityChoiseItemBurger = document.querySelectorAll('.city-choise__item.burger')
const burgerMenuService = document.querySelector('#burger-menu-service');
const burgerAddList = document.querySelectorAll('.dropdown-menu-burger');
const toggle = document.querySelector('.nav-toggle');
let slider1 = document.querySelector('.slider1');
let progress1 = document.querySelector('.progress1');
let slider2 = document.querySelector('.slider2');
let progress2 = document.querySelector('.progress2');
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
let sliderValue1 = document.querySelector('#sliderValue1');
let sliderValue2 = document.querySelector('#sliderValue2');
const readMoreBtn = document.querySelectorAll('.reviews__more');
let reviewTextAreas = document.querySelectorAll('.reviews__text');
const mainTitle = document.querySelector('.main-title');
const mapTitle = document.querySelector('.map > .title > h2');

currentCity.textContent = localStorage.getItem('currentCity');

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
      btn.textContent = '???????????? ??????????????????';
      text.scrollIntoView({block: "center"});
    } else {
      text.classList.add('show-all-text');
      btn.textContent = '???????????? ??????????';
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
    modalFormTitle.textContent = '?????????????? ???????? ????????????';
    modalForText.textContent = '?????????? ???????????????? ????????????';
    let btn = document.querySelector('.order-btn');
    btn.textContent = '???????????????? ????????????';
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
    modalFormTitle.textContent = '???????????????? ????????????';
    modalForText.textContent = '???? ???????????? ?????? ?????????? ??????';
    let btn = document.querySelector('.order-btn');
    btn.textContent = '???????????????? ????????????';
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
    modalFormTitle.textContent = '?????????????? ???????? ????????????';
    modalForText.textContent = '?????? ???????????????????????????? ??????????????????';
    let btn = document.querySelector('.order-btn');
    btn.textContent = '???????????????? ????????????';
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
  currentCity.setAttribute('data-city', '????????????');
} else {
  currentCity.setAttribute('data-city', localStorage.getItem('currentCity'));
}

currentCity.textContent = currentCity.getAttribute('data-city');
currentCityBurger.textContent = currentCityBurger.getAttribute('data-city');

window.addEventListener('load', () => {
  let reviewsCity = document.querySelectorAll('.reviews__city');
  if (currentCity.getAttribute('data-city') == '????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????';
  } else if (currentCity.getAttribute('data-city') == '??????????-??????????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????-????????????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '??????????-??????????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????-????????????????????';
  } else if (currentCity.getAttribute('data-city') == '????????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '????????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????';
  } else if (currentCity.getAttribute('data-city') == '??????????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '??????????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????????';
  } else if (currentCity.getAttribute('data-city') == '????????????????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????????????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '????????????????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????????????????????';
  } else if (currentCity.getAttribute('data-city') == '??????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '??????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????';
  } else if (currentCity.getAttribute('data-city') == '??????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '??????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????';
  } else if (currentCity.getAttribute('data-city') == '????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????';
  } else if (currentCity.getAttribute('data-city') == '????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????';
  } else if (currentCity.getAttribute('data-city') == '??????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '??????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????';
  } else if (currentCity.getAttribute('data-city') == '??????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '??????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????????';
  } else if (currentCity.getAttribute('data-city') == '??????????????????') {
    mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????????';
    reviewsCity.forEach((reviewCity) => {
      reviewCity.textContent = '??????????????????'
    })
    mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????????';
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
    if (currentCity.getAttribute('data-city') == '????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????';
    } else if (currentCity.getAttribute('data-city') == '??????????-??????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????-????????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????-??????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????-????????????????????';
    } else if (currentCity.getAttribute('data-city') == '????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????';
    } else if (currentCity.getAttribute('data-city') == '??????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????????';
    } else if (currentCity.getAttribute('data-city') == '????????????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????????????????????';
    } else if (currentCity.getAttribute('data-city') == '??????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????';
    } else if (currentCity.getAttribute('data-city') == '??????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????';
    } else if (currentCity.getAttribute('data-city') == '????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????';
    } else if (currentCity.getAttribute('data-city') == '????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????';
    } else if (currentCity.getAttribute('data-city') == '??????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????';
    } else if (currentCity.getAttribute('data-city') == '??????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????????';
    } else if (currentCity.getAttribute('data-city') == '??????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????????';
    }
  })
})

cityChoiseItemBurger.forEach((city) => {
  city.addEventListener('click', () => {
    currentCityBurger.setAttribute('data-city', city.textContent);
    localStorage.setItem('currentCity', city.textContent);
    currentCityBurger.textContent = currentCityBurger.getAttribute('data-city')
    cityChoiseBurger.classList.toggle('display-flex')
    let reviewsCity = document.querySelectorAll('.reviews__city');
    if (currentCityBurger.getAttribute('data-city') == '????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????';
    } else if (currentCityBurger.getAttribute('data-city') == '??????????-??????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????-????????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????-??????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????-????????????????????';
    } else if (currentCityBurger.getAttribute('data-city') == '????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????';
    } else if (currentCityBurger.getAttribute('data-city') == '??????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????????';
    } else if (currentCityBurger.getAttribute('data-city') == '????????????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????????????????????';
    } else if (currentCityBurger.getAttribute('data-city') == '??????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????';
    } else if (currentCityBurger.getAttribute('data-city') == '??????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????';
    } else if (currentCityBurger.getAttribute('data-city') == '????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????';
    } else if (currentCityBurger.getAttribute('data-city') == '????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????';
    } else if (currentCityBurger.getAttribute('data-city') == '??????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????';
    } else if (currentCityBurger.getAttribute('data-city') == '??????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ??????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ??????????????';
    } else if (currentCityBurger.getAttribute('data-city') == '??????????????????') {
      mainTitle.textContent = '?????????????? ?????????? ???????????????????? ?? ????????????????????';
      reviewsCity.forEach((reviewCity) => {
        reviewCity.textContent = '??????????????????'
      })
      mapTitle.textContent = '?????????? ?????? ???????????????????? ?????????? ?????? ?????????? ?????? ?? ????????????????????';
    }
  })
})

burgerMenuService.addEventListener('click', () => {
  burgerAddList.forEach((el) => {
    el.classList.toggle('active-menu');
  })
})
