let bar = document.querySelector('.fa-bars')
let headerul = document.getElementById('header-ul')

bar.addEventListener('click', function () {
    headerul.classList.toggle('show')
    bar.classList.toggle('fa-x')
})
