let button = document.getElementById('send');
button.addEventListener("click", function sendId() {
    let id = document.getElementById('id').value;
    //PARTE GET
    fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let product = data;

            let h2 = document.createElement('h2');
            h2.textContent = ('PRODUCTO ESCOGIDO:');
            document.body.appendChild(h2);

            let liid = document.createElement('li');
            liid.textContent = (`Id: ${product.id}`);

            let lititle = document.createElement('li');
            lititle.textContent = (`Nombre: ${product.title}`);

            let liprice = document.createElement('li');
            liprice.textContent = (`Precio: ${product.price}`);

            document.body.appendChild(liid);
            document.body.appendChild(lititle);
            document.body.appendChild(liprice);

            //PARTE POST
            const item = {
                id: product.id,
                title: product.title,
                price: product.price 
            };

            fetch(`https://httpbin.org/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            }) 
                .then((response) => {
                    if(response.ok) {
                        console.log(`Status: ${response.status}`);
                        return response.json();
                    } else {
                        console.log(`Status: ${response.status}`);
                    }
                })
                .then((data) => {
                    let h2 = document.createElement('h2');
                    h2.textContent = (`TÍTULO: ${lititle}`);
                    document.body.appendChild(h2);
                })
                    })
                .catch((error) => {
                    console.error('HA HABIDO UN ERROR :(', error);
                });
});