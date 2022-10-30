
//element
const head = document.querySelector(".head");
const item3 = document.querySelector(".item-3");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
let pro1 = document.querySelector(".project-1");
let pro2 = document.querySelector(".project-2");
const sea = document.getElementById("sea")
const url = document.getElementById("inp-url")
const search = document.getElementById("search")
const developer = document.getElementById("developer")



//if conditon
window.onscroll = function () {
    if (this.scrollY >= 10) {
        head.classList.add("border");
        head.classList.remove("bord");
    }
    if (this.scrollY <= 10) {
        head.classList.remove("border");
        head.classList.add("bord");
    }
    if (this.scrollY >= 1000) {
        item3.classList.add("item3Show");
        item3.classList.remove("item-3");
    }
    if (this.scrollY <= 1000) {
        item3.classList.remove("item3Show");
        item3.classList.add("item-3");
    }

    if (this.scrollY >= 1000) {
        item1.classList.add("item1Show");
        item1.classList.remove("item-1");
    }
    if (this.scrollY <= 1000) {
        item1.classList.remove("item1Show");
        item1.classList.add("item-1");
    }

    if (this.scrollY >= 1000) {
        item2.classList.remove("item-2");
        item2.classList.add("item2Show");
    }
    if (this.scrollY <= 1000) {
        item2.classList.remove("item2Show");
        item2.classList.add("item-2");
    }
    if (this.scrollY >= 1700) {
        pro2.classList.add("pro2-show");
        pro2.classList.remove("project-2")
    }
    if (this.scrollY <= 1600) {
        pro2.classList.remove("pro2-show");
        pro2.classList.add("project-2");
    }
    if (this.scrollY >= 1700) {
        pro1.classList.add("pro1-show");
        pro1.classList.remove("project-1")
    }
    if (this.scrollY <= 1600) {
        pro1.classList.remove("pro1-show");
        pro1.classList.add("project-1");
    }
    if (this.scrollY >= 2350) {
        sea.classList.add("sea-show");
        sea.classList.remove("sea")
    }
    if (this.scrollY <= 2350) {
        sea.classList.remove("sea-show");
        sea.classList.add("sea");
    }

};

//click

search.addEventListener("click" , () => {
sea.innerHTML = `<a href="https://www.google.com/search?q=${url.value}" class = "go-url">Google</a>`
})

developer.addEventListener("click" , () => {
    document.designMode = "on"
})
