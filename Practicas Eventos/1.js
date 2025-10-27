function selectOption() {
    let menu = document.getElementById("options").value;
    let result = document.getElementById("results");
    switch (menu) {
        case "hi":
            let div = document.createElement("div");
            div.textContent = "Hola :)";
            result.appendChild(div);
        break;
        case "create":
            const box = document.createElement("div");
            box.textContent = "Cajita";
            box.style.backgroundColor = "red";
            box.style.color = "white";
            box.style.width = "100px";
            box.style.height = "100px";
            box.style.display = "flex";
            result.appendChild(box);
        break;
        case "generate":
            const num = Math.floor(Math.random() * 100) + 1;
            result.textContent = "Nº aleatorio: " + num;
        break;
    }
}
selectOption();