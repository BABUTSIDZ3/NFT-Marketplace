const bar = document.querySelector('.fa-bars')
const headerul = document.getElementById('header-ul')

bar.addEventListener('click', function () {
    headerul.classList.toggle('show')
    bar.classList.toggle('fa-x')
})
import data from "./data.json"assert{type: "json"}
const parentelement = document.getElementById('sec-1-divs')
const createdomelement = () => {
    for (let i = 0; i < data.length; i++) {
        const element = document.createElement("div")
        element.setAttribute('id', 'sec-1-divs-div')
        const numberelement = document.createElement('div')
        numberelement.setAttribute('id', 'sec-1-divs-div-number')
        parentelement.append(element)
        const num = document.createElement('div')
        numberelement.append(num)
        num.setAttribute('id', 'sec-1-divs-div-number-num')
        num.textContent = data[i].id
        const imgdiv = document.createElement('div')
        imgdiv.setAttribute('id', "sec-1-divs-div-img")
        const img = document.createElement('img')
        img.setAttribute('src', data[i].img)
        imgdiv.append(img)
        let names = document.createElement('div')
        names.textContent = data[i].name
        names.setAttribute('id', 'sec-1-divs-div-names')
        const changes = document.createElement('div')
        changes.setAttribute('id', 'sec-1-divs-div-changes')
        changes.textContent = data[i].change
        const nftsold = document.createElement('div')
        nftsold.setAttribute('id', 'sec-1-divs-div-sold')
        nftsold.textContent = data[i].sold
        const nftvolume = document.createElement('div')
        nftvolume.setAttribute('id', 'sec-1-divs-div-volume')
        nftvolume.textContent = data[i].volume 
       element.append(numberelement,imgdiv,names,changes,nftsold,nftvolume)
    }
}
createdomelement()










