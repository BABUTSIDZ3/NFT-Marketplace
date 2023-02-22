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
    }else{
        counter++
    }
    slide.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter)*300}%)` // 0 100 200
    })
})
btn_left.addEventListener('click',()=>{
    if(counter==0){
        counter=slide.length-1
    }else{
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

