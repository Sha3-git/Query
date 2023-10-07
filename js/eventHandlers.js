function formDescHandler(event) {
    var desc = event.target.value;
    var descCount = document.getElementById("descCount");
    var limit = 199;
    dynamicCount(descCount, desc, limit);
    var descInput = document.getElementById("questionDesc");
    descInput.style.borderColor = desc.length > 199 ? "#c02e2e" : "#ccc";
}
function answerDescHandler(event){
    var answer = event.target.value;
    var descCount = document.getElementById("descCount");
    var limit = 1499;
    dynamicCount(descCount, answer, limit);
    var descInput = document.getElementById("answerDesc");
    descInput.style.borderColor = answer.length > 1499 ? "#c02e2e" : "#ccc";
}
function formTitleHandler(event) {
    var title = event.target.value;
    var titleCount = document.getElementById("titleCount");
    var limit = 30;
    dynamicCount(titleCount, title, limit);
    var titleInput = document.getElementById("questionTitle");
    titleInput.style.borderColor = title.length > 30 ? "#c02e2e" : "#ccc";
}


function validateQuestionSubmission(event) {
    var desc = document.getElementById("questionDesc").value;
    var title = document.getElementById("questionTitle").value;
    var validForm = !validateFormDesc(desc) || !validateFormTitle(title) ? false : true;
    if (!validForm) {
        event.preventDefault();
    }
}

function validateAnswerSubmission(event) {
    var answer = document.getElementById("answerDesc").value;
    var validForm = answer.length < 1499? true : false;
    console.log(validForm);
    if (!validForm) {
       event.preventDefault();
    }
}

const dynamicCount = (html, text, limit) => {
    return html.innerHTML = `${text.length}/${limit}`;

}

function emailHandler(event) {
    var error = document.getElementById("email-error");
    var emailInput = document.getElementById("email");
    var email = event.target.value;
    var msg = "Invalid email";
    errorFunc(error, emailInput, email, validateEmail, msg);
}

function usernameHandler(event) {
    var error = document.getElementById("username-error");
    var usernameInput = document.getElementById("username");
    var username = event.target.value;
    var msg = "Invalid username. Use letters, numbers, and underscores";
    errorFunc(error, usernameInput, username, validateUsername, msg)
}

function dobHandler(event) {
    var error = document.getElementById("dob-error");
    var dobInput = document.getElementById("dob");
    var dob = event.target.value;
    var msg = "Invalid date of birth";
    errorFunc(error, dobInput, dob, validateDOB, msg);
}

function avatarHandler(event) {
    var error = document.getElementById("avatar-error");
    var avatarInput = document.getElementById("dropcontainer");
    var avatar = event.target.value;
    console.log('avatar: ' + avatar);
    var msg = "Invalid file exension. Try png or jpeg file types";
    errorFunc(error, avatarInput, avatar, validateAvatar, msg);
}
function avatarDropHandler(event) {
    event.preventDefault()
    dropContainer.classList.remove("drag-active")

    var error = document.getElementById("avatar-error");
    var avatarInput = document.getElementById("dropcontainer");
    var file = event.dataTransfer.files[0];
    var avatar = file.name;
    console.log('avatar: ' + avatar);
    var msg = "Invalid file exension. Try png or jpeg file types";
    errorFunc(error, avatarInput, avatar, validateAvatar, msg);
}
function passwordHandler(event) {
    var error = document.getElementById("password-error");
    var passwordInput = document.getElementById("password");
    var password = event.target.value;
    var msg = "Password must be 8 characters and contain uppercase lowercase and numerical characters";
    errorFunc(error, passwordInput, password, validatePassword, msg);
}

function confirmPasswordHandler(event) {
    var error = document.getElementById("cpassword-error");
    var confirmInput = document.getElementById("cpassword");
    var cpassword = event.target.value;
    var msg = "Passwords do not match";
    var password = document.getElementById("password").value;
    if(cpassword.length > 0) {
        error.innerHTML = cpassword != password ? msg: "";
        confirmInput.style.borderColor =  cpassword != password ? "#c02e2e" : "green";
    }else{
        error.innerHTML = "Empty field";
        confirmInput.style.borderColor = "#c02e2e";
    }
}

function validateSignin(event){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    var dob = document.getElementById("dob").value;
    var avatar = document.getElementById("images").value;
    var cpassword = document.getElementById("cpassword").value;

    var isValidForm = validateEmail(email) && validatePassword(password) && validateDOB(dob) && validateUsername(username) && validateAvatar(avatar) && (password === cpassword);
    if(!isValidForm){event.preventDefault();}
}

function validateLogin(event){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var isValidForm = validateEmail(email) && validatePassword(password);
    if(!isValidForm) event.preventDefault();
}
//default behaviour is true 
const validateFormDesc = (desc) => {
    return desc.length < 199;
}

const validateFormTitle = (title) => {
    return title.length < 30;
}

const validateEmail = (email) => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailPattern.test(email)
}

const validateUsername = (name) => {
    var unamePattern = /^[a-zA-Z0-9_]+$/;
    return unamePattern.test(name);
}

const validateDOB = (dob)=>{
	var datePattern = /^\d{4}[-]\d{2}[-]\d{2}$/
	return datePattern.test(dob);
}

const validateAvatar = (img) => {
    var filePattern = /^[^\n]+\.[a-zA-Z]{3,4}$/;
    return filePattern.test(img);
}

const validatePassword = (pswd)=>{
	var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[a-zA-Z]).{8,}$/;
	return passwordPattern.test(pswd);

}

const errorFunc = ( err, formInput, val, func, msg)=>{
    if (val.length > 0) {
        err.innerHTML = !func(val) ? msg : "";
        formInput.style.borderColor = !func(val) ? "#c02e2e" : "green";
    }
    else {
        err.innerHTML = "Empty field";
        formInput.style.borderColor = "#c02e2e";
    }
}