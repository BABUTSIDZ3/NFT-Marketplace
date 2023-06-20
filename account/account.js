let bar = document.querySelector('.fa-bars')
let headerul = document.getElementById('header-ul')

bar.addEventListener('click', function () {
    headerul.classList.toggle('show')
    bar.classList.toggle('fa-x')
})

let btn=document.getElementById('sec-1-btn')
let username=document.getElementById('username')
let email=document.getElementById('email')
let password=document.getElementById('password')
let confpassword=document.getElementById('conf-password')
let counter=0
let arrobj=[]
btn.addEventListener('click',function(e){
if(password.value!==confpassword.value){
    e.preventDefault()
    alert('passwords does not match')
  
}else if(password.value==confpassword.value && username!=='' && email!==''&&password!==''&& confpassword!==''){
  
let user={
    id:counter++,
    username:username.value,
    email:email.value,
    pass:password.value,
}
arrobj.push(user)
localStorage.setItem("users", JSON.stringify(arrobj))
return true
}
}) 

