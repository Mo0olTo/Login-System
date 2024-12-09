var userNameInput = document.getElementById("name");
var userMailInput = document.getElementById("signupMail");
var userPasswordInput = document.getElementById("signupPassword");

var signupBtn = document.getElementById("signUp");


var signinMailInput = document.getElementById("loginMail");
var signinPassInput = document.getElementById("loginPassword");

var loginBtn = document.getElementById("logIn");




var usersList = [];

if (localStorage.getItem("usersData") == null) {
  usersList = [];
} else {
  usersList = JSON.parse(localStorage.getItem("usersData"));
}

function addUsers() {
  if (emptyInput() == false) {
    emptyfields();
    return false;
    
  }

  if (alreadyExist() == false) {
    mailExist();
  } else {
    
    var user = {
      name: userNameInput.value,
      mail: userMailInput.value,
      password: userPasswordInput.value,
    };
    
    
    usersList.push(user);
    localStorage.setItem("usersData", JSON.stringify(usersList));

    Registered();
    clearFields();

    // window.open("./login.html" , "_self")
  }
}

function emptyInput() {
  if (
    userNameInput.value == "" ||
    userMailInput.value == "" ||
    userPasswordInput.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}

function alreadyExist() {
  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].mail == userMailInput.value) {
      return false;
    }
  }
}

function emptyfields() {
  var x = `
    <p class="text-danger fw-bold fs-5">
    Please enter all required inputs </p>
    `;
  document.getElementById("alert").innerHTML = x;
}
function mailExist() {
  var x = `
    <p class="text-danger fw-bold fs-5">
    Your Mail is already exist</p>
    `;
  document.getElementById("alert").innerHTML = x;
}
function Registered(){
  var x = `
    <p class="text-success fw-bold fs-4">
    Your Regiseration is Success .. go to login page</p>
    `;

  document.getElementById("alert").innerHTML = x;
}

function clearFields() {
  userNameInput.value = "";
  userMailInput.value = "";
  userPasswordInput.value = "";
}







// login functions // // .......

function loginEmpty() {
  if (signinMailInput.value == "" || signinPassInput.value == "") {
    return false;
  }
}

function wrongPassword() {
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].password == signinPassInput.value) {
      return false;
    }
  }
}

function emptyAlert() {
    var x = `
      <p class="text-danger fw-bold fs-5">
      Please enter all required inputs </p>
      `;
    document.getElementById("Alert").innerHTML = x;
  }

function incorrectInput() {
  var x = `
        <p class="text-danger fw-bold fs-5">
        Your Mail or Password is incorrect </p>
        `;
  document.getElementById("Alert").innerHTML = x;
}

function logIn() {
  if (loginEmpty() == false) {
    emptyAlert();

    return false;
  } else { 
    if(checkUser()== false) {
      window.open("./home.html","_self")
    }else{
      incorrectInput();
    }
  }

}

function checkUser() {
    

  for (var i = 0; i < usersList.length; i++) {
    if (signinMailInput.value == usersList[i].mail  &&
      signinPassInput.value == usersList[i].password){
        localStorage.setItem("nameToWelcome", usersList[i].name)
      return false ;
    } 
    
  }
}








// Home Page to saying Hello to user

  var x = `Welcome ${localStorage.getItem("nameToWelcome")}`
  document.getElementById("welcomeMsg").innerHTML = x ;


  var logoutBtn = document.getElementById("logOut")

  logoutBtn.addEventListener("click" , logOut)

  function logOut(){
    window.open("./login.html","_self")
  }






  