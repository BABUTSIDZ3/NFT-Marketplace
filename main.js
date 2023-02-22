let headerul = document.getElementById('header-ul')
let slide=document.querySelectorAll('.slide')
let btn_right=document.getElementById('right')
let btn_left=document.getElementById('left')
let counter=0
if(btn_left.style.backgroundColor=='red'){
    console.log('ppp')
}else{console.log('ara')}
slide.forEach((value,index)=>{
    value.style.transform=`translate(${index*300}%)` // 0 100 200
    console.log(value)
})
btn_right.addEventListener('click',()=>{
    if(counter==slide.length-1){
        counter=0
    }else{
        counter++
    }
    slide.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter)*300}%)` // 0 100 200
        console.log(value)
    })
})
btn_left.addEventListener('click',()=>{
    if(counter==0){
        counter=slide.length-1
    }else{
        counter--
    }
    console.log(counter)
    slide.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter)*300}%)` // 100
        console.log(value)
    })
})


