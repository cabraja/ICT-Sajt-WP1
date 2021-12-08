// REGEX
const nameRegex = /^[A-Z]([a-z]){2,24}/;
const mailRegex = /^([a-z]|[0-9]){2,40}@([a-z]){3,15}\.(com|[a-z]{2,2})(?=)\b/;
const phoneRegex = /[0-9]{9,10}/;
const subjectRegex = /^[A-Z]([a-z]){2,24}/;
const spaceRegex = /\s/;

// INPUTS


const formButton = document.getElementById("form-button");

formButton.addEventListener("click",(e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const mail = document.getElementById("mail");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let correctValues = 0;

    // Name check
    if(nameRegex.test(name.value) && !spaceRegex.test(name.value)){
        name.style.border = "2px solid green";
       correctValues++;
    }
    else{
        name.style.border = "2px solid red";
    }
    // mail check
    if(mailRegex.test(mail.value) && !spaceRegex.test(mail.value)){
        mail.style.border = "2px solid green";
        correctValues++;
    }
    else{
        mail.style.border = "2px solid red";
    }
    // phone check
    if(phoneRegex.test(phone.value) && !spaceRegex.test(phone.value) && phone.value.length <11){
        phone.style.border = "2px solid green";
        correctValues++;
    }
    else{
        phone.style.border = "2px solid red";
    }
    // subject check
    if(subjectRegex.test(subject.value) && !spaceRegex.test(subject.value)){
        subject.style.border = "2px solid green";
        correctValues++;
    }
    else{
        subject.style.border = "2px solid red";
    }
    // message check
    if(message.value.length > 0){
        message.style.border = "2px solid green";
        correctValues++;
    }
    else{
        message.style.border = "2px solid red";
    }

    if(correctValues === 5){
        alert("Your message was sent!")
    }
})



