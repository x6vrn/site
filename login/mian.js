const nick = document.getElementById("nick")
const sub = document.getElementById("sub")
const home = document.getElementById("home")
const em = document.getElementById("em")


sub.addEventListener("click" , () =>{
    if(em == true){
        home.innerHTML =  `<a href="/index.html" class="home">home</a>`

    }
})