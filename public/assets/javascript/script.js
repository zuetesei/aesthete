const loginBtn = document.querySelector('#login-btn')
const signinBtn =  document.querySelector('#signup-btn')
const logoutBtn = document.querySelector('#logout-btn')
const form =  document.querySelector('form')
const addBtn =document.querySelector('#add-new')
const modalCloseBtn = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')
if(addBtn){
    addBtn.addEventListener('click', event=>{
        
        modal.classList.add('is-active')
    })

    modalCloseBtn.addEventListener('click', event=>{
        modal.classList.remove('is-active')
    })



}



if(loginBtn){
    loginBtn.addEventListener('click',event=>{
        open('/login','_self')
    })
}

if(logoutBtn){
    logoutBtn.addEventListener('click',event=>{
        fetch('/signout').then(res=> open('/home','_self'))

    })
}

if(signinBtn){
    signinBtn.addEventListener('click',event=>{
        open('/signup','_self')
    })
}

if(form){
    form.addEventListener('submit', event=>{
        event.preventDefault()
        const formData  = new FormData(form)
        const input = {email:formData.get('email'),password:formData.get('password')}
        console.log(input)
        if(location.href === location.origin+'/login'){
            let input = {email:formData.get('email'),password:formData.get('password')}
            console.log('login')
            fetch('/api/login',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(input)

            }).then(res=>open('/home','_self'))
            
        }
        if(location.href === location.origin+'/signup'){
            let input = {email:formData.get('email'),password:formData.get('password'),username:formData.get('username')}
            console.log('signup')
            fetch('/api/user',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(input)

            }).then(res=>open('/home','_self'))
            
        }

        if(location.href === location.origin+'/dashboard'){
            let input = {image_tag:formData.get('image-link')}
            console.log('signup')
            fetch('/api/img',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(input)

            }).then(res=>open('/dashboard','_self'))
            
        }
    })
}