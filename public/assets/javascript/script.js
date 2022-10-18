const loginBtn = document.querySelector('#login-btn')
const signinBtn =  document.querySelector('#signup-btn')
const logoutBtn = document.querySelector('#logout-btn')
const form =  document.querySelector('form')



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
            console.log('login')
            fetch('/api/login',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(input)

            }).then(res=>open('/home','_self'))
            
        }
    })
}