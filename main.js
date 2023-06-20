let headerul = document.getElementById('header-ul')
let bar = document.querySelector('.fa-bars')
let sec3right = document.getElementById('sec-3-right')
let sec3left = document.getElementById('sec-3-left')
let slide1 = document.getElementById('sec-3-div1')
let slide2 = document.getElementById('sec-3-div2')
let counter = 0

bar.addEventListener('click', function () {
    headerul.classList.toggle('show')
    bar.classList.toggle('fa-x')
})
sec3right.addEventListener('click', function () {
    sec3left.style.display = 'block'
    sec3right.style.display = 'none'
    slide1.classList.remove('slideshow')
    slide1.classList.toggle('slidehide')
    slide2.classList.remove('slidehide')
    slide2.classList.toggle('slideshow')
})

sec3left.addEventListener('click', function () {
    sec3left.style.display = 'none'
    sec3right.style.display = 'block'
    slide1.classList.toggle('slideshow')
    slide1.classList.remove('slidehide')
    slide2.classList.toggle('slidehide')
    slide2.classList.remove('slideshow')
})
let timer
let timer1 = document.getElementById('timer1')
let timer2 = document.getElementById('timer2')
let timer3 = document.getElementById('timer3')
let timeron = document.getElementById('timeron')
let timeroff = document.getElementById('timeroff')
function myfunc() {
    let time1 = 59
    let time2 = 59
    let time3 = 59
    timer = setInterval(() => {
        timer3.innerText = time3
        time3--
        if (time3 == 0) {
            time3 = 59
            time2--
            timer2.innerText=time2
        }else if(time2==0){
            time2=59
            time1--
            timer1.innerText=time1
        }else if(time1==0){
            timeroff.style.display='flex'
            timeron.style.display='none'
        }
    }, 1000)
}
myfunc()


const swiper = new Swiper('.swiper', {
    effect:'cube',
grabCursor:true,
cubeEffect:{
    shadow:true,
    slideshadows:true,
    shadowOffset:20,
    shadowScale:0.94,
},
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


