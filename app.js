document.getElementById("message").innerHTML = "login required!!!!!";

function login() {
  //var myWindow = window.open("http://localhost:3001/#loginemail?apto=app1.com&apid=wenasgdj", "", "width=500,height=600");
  window.location="[AUTHX_URL]/#loginemail?apto=[YOUR_REDIRECT_URL]&apid=[YOUR_UNIQUE_APID]";
}
function signup() {
  window.location="[AUTHX_URL]/#register?apto=[YOUR_REDIRECT_URL]&apid=[YOUR_UNIQUE_APID]";
}
var url = window.location.href;

  var jwtToken = url.split('#')[1];
  if(jwtToken!==""){
  localStorage.setItem('jwtToken', jwtToken);
  }
  setTimeout(function(){ window.location.hash = '';}, 1000);
  console.log('jwtToken is: ', jwtToken);
  
  //var x = document.getElementById("btn-login");
  if(localStorage.getItem('jwtToken')){
    console.log('hello',)
    document.getElementById("message").innerHTML = "Congratulations.......you are logged in";
    //x.style.display = "none";
    document.getElementById("btn-login").disabled = true;
  }
function logout() {
  console.log('Logged Out');
  jwtToken = null
  localStorage.removeItem('jwtToken');
  document.getElementById("message").innerHTML = "Successfully Logged out";
  document.getElementById("btn-login").disabled = false;
  setTimeout(function(){ document.getElementById("message").innerHTML = "login required!!!!!";}, 3000);
}