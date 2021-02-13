console.log("This is project 4 JS");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const namevalid = document.getElementById('namevalid');
const submit = document.getElementById('submit');

let validName = false;
let validEmail = false;
let validPhone = false;

$('#success').hide();
$('#failure').hide();

// console.log(name,email,phone);

name.addEventListener('blur',()=>{
    console.log('name is blured');
    //Validate name here
     let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
     let str = name.value;
     console.log(regex,str);
     if(regex.test(str)) {
         console.log("Your name is Valid");
         name.classList.remove('is-invalid');
         validName = true;
     }
     else{
        console.log("Your name is not Valid");
        name.classList.add('is-invalid');
        validName = false;

     }
})

email.addEventListener('blur',()=>{
    console.log('email is blured');
    //Validate email here
    let regex = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)) {
        console.log("Your email is Valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
       console.log("Your email is not Valid");
       email.classList.add('is-invalid');
       validEmail = false;

    }
     
})

phone.addEventListener('blur',()=>{
    console.log('phone is blured');
    //Validate phone here
    
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)) {
        console.log("Your phone is Valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
       console.log("Your phone is not Valid");
       phone.classList.add('is-invalid');
       validPhone = false;
    }
     
})

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked submit button');

    if(validEmail && validName && validPhone){
        console.log("Phone , Email and Name are valid Submitting the form ");
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
        //failure.classList.remove('show');
        //$('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log("On out of Phone,Email or Name are not valid Hence not submitting the form,Please chek the error and try again ");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        //success.classList.remove('show');
        //$('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }

    })