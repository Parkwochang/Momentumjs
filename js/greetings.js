const loginForm = document.getElementById("login_form");
const loginIput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout_btn");
const todo = document.getElementById("todo_form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//submit and remember username
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginIput.value.toUpperCase();
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  showLogoutBtn();
  todo.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = 
  `Hello 
  ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//prevent forget username
const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUsername);
  showLogoutBtn();
}

//logout
function showLogoutBtn() {
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.addEventListener("click", clickLogoutButton);
}
function clickLogoutButton() {
  localStorage.clear();
  window.location.reload();
}
