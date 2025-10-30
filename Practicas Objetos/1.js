class Rectangulo {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
        this.width = 1;
        this.height = 1;
        } else {
            this.width = width;
            this.height = height;
        }
    }

    cambiarDimensiones(width, height) {
        this.width = width;
        this.height = height;
    }
    calcularArea(width, height) {
        let area = width * height;
        return area;
    }
    copia() {
        let newRect = new Rectangulo (this.width, this.height);
        return "¡La copia se ha creado! Ahora existe otro rectángulo (ancho: " + newRect.width + ", alto: " + newRect.height + ")";
    }
    comparar(rectangulo) {
        let areaRectangulito = this.calcularArea(this.width, this.height);
        let areaRectangulo = rectangulo.calcularArea(rectangulo.width, rectangulo.height);
        if (areaRectangulito > areaRectangulo) {
            return "Nuestro rectangulito es mayor.";
        } else if (areaRectangulito < areaRectangulo) {
            return "Nuestro rectangulito es menor.";
        } else if (areaRectangulito == areaRectangulo) {
            return "Nuestro rectangulito es igual que rectángulo.";
        }
    }
}

const rectangulito = new Rectangulo ('100','50');
const rectangulo = new Rectangulo ('150','75');

let div = document.createElement("div");
div.textContent = "Tenemos dos rectángulos: 1- Rectangulito: Ancho de " + rectangulito.width + " y alto de " + rectangulito.height
+ " , y 2- Rectángulo: Ancho de " + rectangulito.width + " y alto de " + rectangulito.height;
document.body.appendChild(div);

let divCambiar = document.createElement("div");
rectangulito.cambiarDimensiones ('200', '100');
divCambiar.textContent = "Ahora rectangulito tiene un ancho " + rectangulito.width + " y un alto de " + rectangulito.height;
document.body.appendChild(divCambiar);

let divArea = document.createElement("div");
divArea.textContent = "El área de rectangulito es: " + (rectangulito.calcularArea(200,100));
document.body.appendChild(divArea);

let divCopia = document.createElement("div");
divCopia.textContent = rectangulito.copia();
document.body.appendChild(divCopia);

let divComparar = document.createElement("div");
divComparar.textContent = "Si comparamos rectangulito con rectángulo... " + rectangulito.comparar(rectangulo);
document.body.appendChild(divComparar);