var GuessTheNb = document.getElementById("guess-the-nb")
var fakestrongpasswordgeneration = document.getElementById("fake-strong-password-generation")
var todolist = document.getElementById("to-do-list")
var guesstheplayer = document.getElementById("guess-the-player")
var apps = document.getElementById("apps")

apps.addEventListener("click",()=>{
          location.href = "http://127.0.0.1:5501/index.html?id=9021&ali=saq"
})
urlString ="http://127.0.0.1:5501/index.html?id=9021&ali=saq"
let paramString = urlString.split('?')[1];
let queryString = new URLSearchParams(paramString);

for (let pair of queryString.entries()) {
   console.log("Key is: " + pair[0]);
   console.log("Value is: " + pair[1]);
   document.write("ali")
}


