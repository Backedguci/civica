const pass = "32MPar"
var tried =window.prompt("pune parola")
if (pass == tried){
alert("parola corecta")
  
  
var  nu =window.prompt("pune numele celui care vrei sa il votezi");
var answer = confirm("iesti sigur?")
if (answer == false){
alert("refresh the page")
                   }
else                               {
if (nu == "Teodora"){

document.getElementById("p1").innerHTML = "ai votat cu " + nu;
                    }

else if(nu=="Elena") {

document.getElementById("p1").innerHTML = "ai votat cu " + nu;


}
else{
alert("nume invalid incearca din nou")
}
                                   }
                  }
else {
alert("parola incorecta")
}
