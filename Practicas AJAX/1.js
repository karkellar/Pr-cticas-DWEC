fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let user = data.results[0];

        let h1 = document.createElement('h1');
        h1.textContent = ("USUARIO:")
        document.body.appendChild(h1);

        let lifirstname = document.createElement('li');
        lifirstname.textContent = (`${user.name.first} , ${user.name.last}`);
        let liemail = document.createElement('li');
        liemail.textContent = (`Email: ${user.email}`);
        let liaddress = document.createElement('li');
        liaddress.textContent = (`${user.location.street.number}, ${user.location.street.name}, ${user.location.city}`);
        let licountry = document.createElement('li');
        licountry.textContent = (`${user.location.country} , ${user.location.postcode}`);
        let image = document.createElement('img');
        image.src = user.picture.large;

        document.body.appendChild(image);
        document.body.appendChild(lifirstname);
        document.body.appendChild(liemail);
        document.body.appendChild(liaddress);
        document.body.appendChild(licountry);
    })
    .catch((error) => {
        console.error('HA HABIDO UN ERROR :(', error)
    });