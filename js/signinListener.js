const dropContainer = document.getElementById("dropcontainer")
const fileInput = document.getElementById("images")

dropContainer.addEventListener("dragover", (e) => {
    // prevent default to allow drop
    e.preventDefault()
}, false)

dropContainer.addEventListener("dragenter", () => {
    dropContainer.classList.add("drag-active")
})

dropContainer.addEventListener("dragleave", () => {
    dropContainer.classList.remove("drag-active")
})

dropContainer.addEventListener("drop", (e) => {
    e.preventDefault()
    dropContainer.classList.remove("drag-active")
    fileInput.files = e.dataTransfer.files
})


document.getElementById("email").addEventListener("blur", emailHandler);
document.getElementById("username").addEventListener("blur", usernameHandler);
document.getElementById("dob").addEventListener("blur", dobHandler);
document.getElementById("images").addEventListener("blur", avatarHandler);
dropContainer.addEventListener("drop", avatarDropHandler);
document.getElementById("password").addEventListener("blur", passwordHandler);
document.getElementById("cpassword").addEventListener("blur", confirmPasswordHandler);
document.getElementById("signinForm").addEventListener("submit", validateSignin);


