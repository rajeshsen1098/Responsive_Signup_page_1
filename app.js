const form=document.getElementById('form');
const firstname_input=document.getElementById('firstname-input');
const email_input=document.getElementById('email-input');
const password_input=document.getElementById('password-input');
const repet_password_input=document.getElementById('repet-password-input');
const error_message=document.getElementById('error-message');


form.addEventListener('submit',(e)=>{
    // e.preventDefault();
    let errors=[]

    if(firstname_input){
        errors=getSignupFromErrors(firstname_input.value,email_input.value,password_input.value,repet_password_input.value);
    }else{
        errors=getLoginFormErrors(email_input.value,password_input.value);
    }
    if(errors.length >=1){
        e.preventDefault();
        console.log(errors);
        error_message.innerText=errors.join(". ");
    }
})

function getSignupFromErrors(firstname,email,password,repeatPassword){
    let errors=[]
    if(firstname ==='' || firstname == null){
        errors.push('FirstName required')
        firstname_input.parentElement.classList.add('incorrect');
    }
    if(email ==='' || email == null){
        errors.push('Email required')
        email_input.parentElement.classList.add('incorrect');
    }
    if(password ==='' || password == null){
        errors.push('Password required')
        password_input.parentElement.classList.add('incorrect');
    }
    if(repeatPassword ==='' || repeatPassword == null){
        errors.push(' Repeat Password ')
        repet_password_input.parentElement.classList.add('incorrect');
    }
    if(password.length<8){
        errors.push('Password must contain 8 charactors')
        password_input.parentElement.classList.add('incorrect')
    }
    if(repeatPassword !==password){
        errors.push(' password does not match ')
        password_input.parentElement.classList.add('incorrect')
        repet_password_input.parentElement.classList.add('incorrect')
    }
    // console.log(errors)
    return errors;
}
const allInputs=[firstname_input,email_input,password_input,repet_password_input].filter(input=> input !=null);
allInputs.forEach(input =>{
    input.addEventListener('input',()=>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText='';
        }
    })
})
function getLoginFormErrors(email,password){
    let errors=[];
    if(email ==='' || email == null){
        errors.push('Email required')
        email_input.parentElement.classList.add('incorrect');
    }
    if(password ==='' || password == null){
        errors.push('Password required')
        password_input.parentElement.classList.add('incorrect');
    }
}