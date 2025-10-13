for (let i = 0; i <50; i++) {
    const loteria = new Set();
    while (loteria.size<6)  {
        let combinacion = Math.floor(Math.random()*49);
        loteria.add(combinacion);
    }
    console.log(loteria);
}