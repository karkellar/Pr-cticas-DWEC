let cont = 100;
let div = document.createElement ("div");
div.textContent = "Precio actual: " + cont;
document.body.appendChild(div);
let interval = setInterval(() => {
    let second = Math.floor(Math.random()*11)-5;
    cont = cont + second;
    div.textContent = "Precio ahora: " + cont;
    if (cont >= 120) {
        div.textContent = "¡Máximo alcanzado!";
        clearInterval(interval);
    } else if (cont <= 80) {
        div.textContent = "¡Mínimo alcanzado!";
        clearInterval(interval);
    }
}, 1000);