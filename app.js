  document.getElementById("message").innerHTML = "login required!!!!!";

function login() {
  //var myWindow = window.open("http://localhost:3001/#loginemail?apto=app1.com&apid=wenasgdj", "", "width=500,height=600");
  window.location="https://authx.in/#loginemail?apto=[REDIRECT_URI]&apid=[UNIQUE_APP_ID]";
}
function signup() {
  //var myWindow = window.open("http://localhost:3001/#loginemail?apto=app1.com&apid=wenasgdj", "", "width=500,height=600");
  window.location="https://authx.in/#register?apto=[REDIRECT_URI]&apid=[UNIQUE_APP_ID]";
}
var url = window.location.href;
var z = document.getElementById("btn-logout");
if (z){
  z.style.display = "none";
}

  var jwtToken = url.split('#')[1];
  if(jwtToken!==""){
  localStorage.setItem('jwtToken', jwtToken);
  }
  setTimeout(function(){ window.location.hash = '';}, 1000);
  //console.log('jwtToken is: ', jwtToken);
  
  //var x = document.getElementById("btn-login");
  if(localStorage.getItem('jwtToken') && localStorage.getItem('jwtToken')!== "undefined"){
    //console.log('hello',)
    document.getElementById("message").innerHTML = "Congratulations.......you are logged in";
    var x = document.getElementById("btn-login");
    var y = document.getElementById("btn-signup");
    var z = document.getElementById("btn-logout");
    if (x){
      x.style.display = "none";
    }
    if (y){
      y.style.display = "none";
    }
    if (z){
      z.style.display = "";
    }
    //x.style.display = "none";
    //document.getElementById("btn-login").disabled = true;
  }
function logout() {
  console.log('Logged Out');
    var x = document.getElementById("btn-login");
    var y = document.getElementById("btn-signup");
    var z = document.getElementById("btn-logout");
    if (x){
      x.style.display = "";
    }
    if (y){
      y.style.display = "";
    }
    if (z){
      z.style.display = "none";
    }
  jwtToken = null
  localStorage.removeItem('jwtToken');
  document.getElementById("message").innerHTML = "Successfully Logged out";
  document.getElementById("btn-login").disabled = false;
  setTimeout(function(){ document.getElementById("message").innerHTML = "login required!!!!!";}, 3000);
}
  // </script>
