const bar = document.querySelector('.fa-bars')
const headerul = document.getElementById('header-ul')

bar.addEventListener('click', function () {
    headerul.classList.toggle('show')
    bar.classList.toggle('fa-x')
})

const headdiv = document.getElementById('sec-1-div-head-div')
const headdiv2 = document.getElementById('sec-1-div-head-div2')

headdiv.addEventListener('click', function () {
    headdiv.style.borderBottom = '2px solid #858584FF'
    headdiv2.style.borderBottom = 'none'
    sectiondivs1.style.display='flex'
    sectiondivs2.style.display='none'
})
headdiv2.addEventListener('click', function () {
    headdiv2.style.borderBottom = '2px solid #858584FF'
    headdiv.style.borderBottom = 'none'
    sectiondivs1.style.display='none'
    sectiondivs2.style.display='flex'
})
const sectiondivs2div3 = document.getElementById('sec-1-div2-divs-div3')
const sectiondivs2div2 = document.getElementById('sec-1-div2-divs-div2')
const sectiondivs2div1 = document.getElementById('sec-1-div2-divs-div1')
const sectiondivs2 = document.getElementById('sec-1-div2-divs')
const sectiondivs1 = document.getElementById('sec-1-div-divs')
const sectiondiv1 = document.getElementById('sec-1-div-divs-div1')
const sectiondiv2 = document.getElementById('sec-1-div-divs-div2')
const sectiondiv3 = document.getElementById('sec-1-div-divs-div3')
import data from "./data.json"assert{type: "json"}
console.log(data)
const createdomelement = (elementtype, elementid) => {
    for (let i = 0; i < data.length; i++) {
        const element = document.createElement(elementtype)
        sectiondiv1.appendChild(element)
        const mainimg = document.createElement('img')
        const maintxt = document.createElement('div')
        maintxt.setAttribute('id', 'sec-1-div-divs-div-inner-main-txt')
        maintxt.textContent = data[i].text
        const imgdiv = document.createElement('div')
        imgdiv.setAttribute('id', 'sec-1-div-divs-div-inner-imgdiv')
        const imgdivimg = document.createElement('img')
        const imgdivtxt = document.createElement('p')
        imgdiv.append(imgdivimg, imgdivtxt)
        imgdivtxt.textContent = data[i].text2
        const pricediv = document.createElement('div')
        pricediv.setAttribute('id', 'sec-1-div-divs-div-inner-pricediv')
        imgdivimg.setAttribute('src', data[i].img)
        mainimg.setAttribute('id', 'sec-1-div-divs-div-inner-main-img')
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
        pricediv2.setAttribute('id', 'sec-1-div-divs-div-inner-pricediv2')
        element.append(mainimg, maintxt, imgdiv, pricediv, pricediv2)
        if (sectiondiv1.childElementCount > 4) {
            sectiondiv1.removeChild(element)
            sectiondiv2.append(element)
        }
        if (sectiondiv2.childElementCount > 4) {
            sectiondiv2.removeChild(element)
            sectiondiv3.append(element)
        }
        if(sectiondiv3.childElementCount>4){
            sectiondiv3.removeChild(element)
            sectiondivs2div1.append(element)
        }
        if( sectiondivs2div1.childElementCount>4){
            sectiondivs2div1. removeChild(element)
            sectiondivs2div2. append(element)
        }
        if( sectiondivs2div2.childElementCount>4){
            sectiondivs2div2. removeChild(element)
            sectiondivs2div3. append(element)
        }
    }
}




createdomelement('div', 'sec-1-div-divs-div-inner',)



