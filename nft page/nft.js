const bar = document.querySelector('.fa-bars')
const headerul = document.getElementById('header-ul')

bar.addEventListener('click', function () {
    headerul.classList.toggle('show')
    bar.classList.toggle('fa-x')
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
            timer2.innerText = time2
        } else if (time2 == 0) {
            time2 = 59
            time1--
            timer1.innerText = time1
        } else if (time1 == 0) {
            timeroff.style.display = 'flex'
            timeron.style.display = 'none'
        }
    }, 1000)
}
myfunc()


const div1 = document.getElementById('sec-2-divs1')
const div2 = document.getElementById('sec-2-divs2')
const div3 = document.getElementById('sec-2-divs3')



import data from "./data.json"assert{type: "json"}
console.log(data)
const createdomelement = (elementtype, elementid) => {
    for (let i = 0; i < data.length; i++) {
        const element = document.createElement(elementtype)
        div1.appendChild(element)
        const mainimg = document.createElement('img')
        const maintxt = document.createElement('div')
        maintxt.setAttribute('id', 'sec-2-divs-main-txt')
        maintxt.textContent = data[i].text
        const imgdiv = document.createElement('div')
        imgdiv.setAttribute('id', 'sec-2-divs-imgdiv')
        const imgdivimg = document.createElement('img')
        const imgdivtxt = document.createElement('p')
        imgdiv.append(imgdivimg, imgdivtxt)
        imgdivtxt.textContent = data[i].text2
        const pricediv = document.createElement('div')
        pricediv.setAttribute('id', 'sec-2-divs-pricediv')
        imgdivimg.setAttribute('src', data[i].img)
        mainimg.setAttribute('id', 'sec-2-divs-main-img')
        mainimg.setAttribute('src', data[i].mainimg)
        element.setAttribute('id', elementid)
        const pricedivtxt1 = document.createElement('p')
        const pricedivtxt2 = document.createElement('p')
        pricediv.append(pricedivtxt1, pricedivtxt2)
        pricedivtxt1.textContent = data[i].pricedivtxt1
        pricedivtxt2.textContent = data[i].pricedivtxt2
        const pricediv2 = document.createElement('div')
        const pricediv2txt1 = document.createElement('p')
        const pricediv2txt2 = document.createElement('p')
        pricediv2txt1.textContent = data[i].price
        pricediv2txt2.textContent = data[i]["highest bid"]
        pricediv2.append(pricediv2txt1, pricediv2txt2)
        pricediv2.setAttribute('id', 'sec-2-divs-pricediv2')
        element.append(mainimg, maintxt, imgdiv, pricediv, pricediv2)
        if (div1.childElementCount > 3) {
            div1.removeChild(element)
            div2.append(element)
        }
        if (div2.childElementCount > 3) {
            div2.removeChild(element)
            div3.append(element)
        }

    }
}




createdomelement('div', 'sec-2-divs-div',)
