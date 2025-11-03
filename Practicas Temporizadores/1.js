var myname = localStorage.getItem("nombre");

if (myname) {
    let div = document.createElement("div");
    div.textContent = "Bienvenido/a/x: " + myname;
    document.body.appendChild(div);
} 
document.getElementById("save").addEventListener("click", function() {
let form = document.getElementById("form");
document.body.removeChild(form);
let name = document.getElementById("name").value;
    if (name != " ") {
        localStorage.setItem("nombre", name);
        location.reload();
    }
});
