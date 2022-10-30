//const
const h1 = document.getElementById("h1")
const now = new Date()
//time
setInterval(() => {
    const now = new Date();
    let hor = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    h1.innerHTML = `
    <span>${hor}</span>:
    <span>${min}</span>:
    <span>${sec}</span>
    `   
}, 1000 );