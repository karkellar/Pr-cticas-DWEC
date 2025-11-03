class Pc {
    constructor(brand, model, ram=4, capacity=512, screen=17) {
        this.brand = brand;
        this.model = model;
        this.ram = ram;
        this.capacity = capacity;
        this.screen = screen;
    }
    toString() {
        return 'Marca: ' + this.brand + ', Modelo: ' + this.model + ', Memoria RAM: ' + this.ram + ', Capacidad Disco Duro: ' + this.capacity + ', Tamaño de pulgadas de la pantallas: ' + this.screen;
    }

}

class Portatil extends Pc {
    constructor(brand, model, ram=4, capacity=256, screen=12, autonomy=4) {
        super(brand, model, ram, capacity, screen);
        this.autonomy = autonomy;
    }

    toString() {
        return super.toString() + ', Autonomía: '+ this.autonomy;
    }
}
const pc1 = new Pc ("HP", "ProDesk 400", '8', '512', '24');
const portatil1 = new Portatil("Lenovo", "IdeaPad 3", '16', '512', '15.6', '7');

let div = document.createElement("div");
div.textContent = ("ESTE ES NUESTRO PC: " + pc1.toString());
document.body.appendChild(div);

let newdiv = document.createElement("div");
newdiv.textContent = ("ESTE ES NUESTRO PORTÁTIL: " + portatil1.toString());
document.body.appendChild(newdiv);