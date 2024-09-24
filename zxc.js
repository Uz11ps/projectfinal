
let currentSlide = 0;
let slides = document.getElementsByClassName("slide-darkbeef");





ymaps.ready(init);
//кнопки справа сверху
function scrollToSection(buttonId, sectionId) {
    document.getElementById(buttonId).addEventListener("click", function() {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  scrollToSection("button1", "section1");
  scrollToSection("button2", "section2");
  scrollToSection("button3", "section3");
  scrollToSection("button4", "section4");
  scrollToSection("button5", "section5");
  scrollToSection("button6", "section6");
  scrollToSection("button7", "section7");
  scrollToSection("button8", "section8");
  scrollToSection("button9", "section9");
///










/// яндекс карта
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.660958393562325,37.54329647329642], // Начальные координаты
        zoom: 10 // Масштаб
    });
    
    myMap.controls.remove("zoomControl");
myMap.controls.remove("typeSelector");
myMap.controls.remove("fullscreenControl");
myMap.controls.remove("rulerControl");
myMap.controls.remove("searchControl");
myMap.controls.remove("routeButtonControl");
myMap.controls.remove("trafficControl");

    var placemark1 = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Метка 1',
        balloonContent: 'Это метка 1'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'map-marker.png', // Путь к изображению для метки 1
        iconImageSize: [30, 40], // Размеры изображения
        iconImageOffset: [-15, -15] // Смещение изображения
    });
    myMap.geoObjects.add(placemark1);

    // Создание метки 2
    var placemark2 = new ymaps.Placemark([55.7566210675427,37.527546311205796], {
        hintContent: 'Метка 2',
        balloonContent: 'Это метка 2'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'map-marker.png', // Путь к изображению для метки 2
        iconImageSize: [30, 40], // Размеры изображения
        iconImageOffset: [-15, -15] // Смещение изображения
    });
    myMap.geoObjects.add(placemark2);

    // Создание метки 3
    var placemark3 = new ymaps.Placemark([55.62471511897197,37.64677388744652], {
        hintContent: 'Метка 3',
        balloonContent: 'Это метка 3'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'map-marker.png', // Путь к изображению для метки 3
        iconImageSize: [30, 40], // Размеры изображения
        iconImageOffset: [-15, -15] // Смещение изображения
    });
    myMap.geoObjects.add(placemark3);
}
///





///бургер слайд
function showSlide() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.transform = "translateX(" + (i - currentSlide) * 100 + "%)";
    };
  };

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
  };

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  };
///




/// модальное окно для заказа бургера
function openModal() {
    document.getElementById("myModal").style.display = "block";
    };
    
    function closeModal() {
    document.getElementById("myModal").style.display = "none";
    };
    

///





/// для аватарок с фамилиями....


let slideIndex = 0;
showSlide(slideIndex);
var members = document.getElementsByClassName('member');
        for (var i = 0; i < members.length; i++) {
            members[i].addEventListener('click', function() {
                var avatar = this.getElementsByClassName('avatar')[0];
                var description = this.getElementsByClassName('description')[0];
                if (avatar.style.display === 'none') {
                    avatar.style.display = 'block';
                    description.style.display = 'block';
                } else {
                    avatar.style.display = 'none';
                    description.style.display = 'none';
                }
            });
        };



function showProfile(profileNumber) {
    var profiles = document.getElementsByClassName("profile");
    for (var i = 0; i < profiles.length; i++) {
    profiles[i].style.display = "none";
    }
    var profile = document.getElementById("profile" + profileNumber);
    profile.style.display = "block";
    profile.querySelector("h3").innerText = "Оператор";
    profile.querySelector("p").innerText = "С радостью поможет подобрать идеальный бургер и оформить заказ.";
    };
///




///  стрелка сверху
function scrollDown() {
    window.scrollTo({
      top: window.scrollY + 500,
      behavior: "smooth"
    });
  };
  
///


/// модальное окно для формы
function submitForm(event) {
    event.preventDefault(); // Отменяем отправку формы
    document.getElementById('orderForm').reset();
    document.getElementById('modale').style.display = 'block';
    document.body.classList.add('modal-open'); // Добавляем класс для заднего фона
    var overlay = document.createElement("div");
    overlay.id = "overlaye";
    document.body.appendChild(overlay);
  }
  
  document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('modale').style.display = 'none';
    document.body.classList.remove('modal-open'); // Удаляем класс для заднего фона
    var overlay = document.getElementById("overlaye");
    overlay.parentNode.removeChild(overlay);
  });
  





  function closeeModal() {
    // Закрываем модальное окно
    document.getElementById('modal').style.display = 'none';
  };
 

///



/// модальное окно для 8 фотографий 
// Функция для открытия модального окна
function openeModal(surname, text) {
    // Получаем элементы модального окна
    var modal = document.getElementById("modal");
    var content = document.getElementById("modal-content");
    var closeBtn = document.getElementById("close");

    // Заполняем модальное окно данными
    var surnameElement = document.createElement("div");
    surnameElement.innerHTML = surname;

    var textElement = document.createElement("div");
    textElement.innerHTML = text;

    content.innerHTML = "";
    content.appendChild(surnameElement);
    content.appendChild(textElement);

    // Отображаем модальное окно
    modal.style.display = "block";

    // Закрываем модальное окно при клике на крестик
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };

    // Закрываем модальное окно при клике вне его области
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };
///




/// меню

oneio.addEventListener("click", function(){
    if(oneio.classList.contains('show')){
        if(twoio.classList.contains('show')){
            twoio.classList.remove('show');
            threeio.classList.remove('show');
        }
        else{
            oneio.classList.remove('show');
        }
    }
    else{
        oneio.classList.add('show');
    }
});
twoio.addEventListener("click", function(){
    if(twoio.classList.contains('show')){
        twoio.classList.remove('show');
        oneio.classList.remove('show');
        threeio.classList.remove('show');
    }
    else{
        oneio.classList.add('show');
        twoio.classList.add('show');
    }
});
threeio.addEventListener("click", function(){
    if(threeio.classList.contains('show')){
        oneio.classList.remove('show');
        threeio.classList.remove('show');
        twoio.classList.remove('show');
    }
    else{
        oneio.classList.add('show');
        twoio.classList.add('show');
        threeio.classList.add('show');
    }
});
///



///стрелка вверх и стрелка вниз...

document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы h3_text
    var names = document.querySelectorAll('.h3_text');
  
    // Добавляем слушатель событий для каждого элемента
    names.forEach(function(name) {
      name.addEventListener('click', function() {
        // находим предыдущий элемент (стрелку) и переключаем активный класс
        var arrow = this.previousElementSibling;
        arrow.classList.toggle('active');
      });
    });
  });
///



  