let cont = 0;
let div = document.createElement ("div");
if (cont == 120) {
    setTimeout(()=>div.textContent("¡Máximo alcanzado!"),1000);
} else if (cont <= 80) {
    setTimeout(()=>div.textContent("¡Mínimo alcanzado!"),1000);
}