document.getElementById("message").innerHTML = "login required!!!!!";

function myFunction() {
  //var myWindow = window.open("http://localhost:3001/#loginemail?apto=app1.com&apid=wenasgdj", "", "width=500,height=600");
  location.replace("http://localhost:3001/#loginemail?apto=app1.com&apid=wenasgdj");
}
var url = window.location.href;
  var jwtToken = url.split('#')[1];
  console.log('jwtToken is: ', jwtToken);
  localStorage.setItem('jwtToken', jwtToken);
  if(jwtToken){
    document.getElementById("message").innerHTML = "Congratulations.......you are logged in";

  }
function logout() {
  console.log('Logged Out');
  localStorage.removeItem('jwtToken');
  document.getElementById("message").innerHTML = "Successfully Logged out";
}