const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const reset = document.querySelector("#reset");


function BtnClick(event){
    event.preventDefault();
    const value = loginInput.value;
    localStorage.setItem("username", value)
    loginForm.classList.add("hidden");
    PaintGreeting(value);
    
}

function PaintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
    reset.classList.remove("hidden");
}

function reset1(){
    localStorage.removeItem("username");
    location.reload();
}

reset.addEventListener("click", reset1);

const username = localStorage.getItem("username");
if(username === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",BtnClick);
}else{
    PaintGreeting(username);
}





