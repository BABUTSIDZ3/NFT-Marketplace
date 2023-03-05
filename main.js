let headerul = document.getElementById('header-ul')
let slide=document.querySelectorAll('.slide')
let btn_right=document.getElementById('right')
let btn_left=document.getElementById('left')
let bar=document.querySelector('.fa-bars')
let sec3right=document.getElementById('sec-3-right')
let sec3left=document.getElementById('sec-3-left')
let slide1=document.getElementById('sec-3-div1')
let slide2=document.getElementById('sec-3-div2')
let counter=0
slide.forEach((value,index)=>{
    value.style.transform=`translate(${index*300}%)` // 0 100 200
})
btn_right.addEventListener('click',()=>{
    if(counter==slide.length-1){
        counter=0
    }
    else{
        counter++
    }
    slide.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter)*300}%)` // 0 100 200
    })
})

btn_left.addEventListener('click',()=>{
    if(counter==0){
        counter=slide.length-1
    }
    else{
        counter--
    }
    slide.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter)*300}%)` // 100
    })
})
bar.addEventListener('click',function(){
    headerul.classList.toggle('show')
    bar.classList.toggle('fa-x')
})
sec3right.addEventListener('click',function(){
    sec3left.style.display='block'
    sec3right.style.display='none'
    slide1.classList.remove('slideshow')
slide1.classList.toggle('slidehide')
slide2.classList.remove('slidehide')
slide2.classList.toggle('slideshow')
})

sec3left.addEventListener('click',function(){
    sec3left.style.display='none'
    sec3right.style.display='block'
    slide1.classList.toggle('slideshow')
    slide1.classList.remove('slidehide')
slide2.classList.toggle('slidehide')
slide2.classList.remove('slideshow')
})
let timer
let timer1=document.getElementById('timer1')
let timer2=document.getElementById('timer2')
let timer3=document.getElementById('timer3')
let timeron=document.getElementById('timeron')
let timeroff=document.getElementById('timeroff')
function myfunc(){ 
    let time1=59 
    let time2=59 
    let time3=59 
    timer=setInterval(()=>{
        timer1.innerText=time1
        time1-- 
          if(time1==0){
            timeroff.style.display='flex'
            timeron.style.display='none'
    }
    },1000*30*30)
     timer=setInterval(()=>{
        timer2.innerText=time2
        time2--
        if(time2==0){
            time2=59
         }
        
    },1000*30)
    timer=setInterval(()=>{
        timer3.innerText=time3
        time3--
        if(time3==0){
        time3=59
         }
    },1000)




}
myfunc()

