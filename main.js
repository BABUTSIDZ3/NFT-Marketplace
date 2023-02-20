let headerul = document.getElementById('header-ul')
let bars = document.querySelector('.fa-bars')
bars.addEventListener('click', function () {
    headerul.classList.toggle('show')
    bars.classList.toggle("fa-x")
})


