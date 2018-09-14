document.getElementById("message").innerHTML = "login required!!!!!";

function myFunction() {
  location.replace("[AUTHX_URL]/#loginemail?apto=[YOUR_REDIRECT_URL]&apid=[YOUR_UNIQUE_APID]");
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