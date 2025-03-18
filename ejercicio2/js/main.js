const precios ={
    producto1: 10.49,
    producto2: 25.99,
    producto3: 7.5,
    producto4: 15.85,
};

for (let dato in precios){
    console.log(precios[dato])
};
for (let precio in precios){
    console.log(Math.round(precios[precio]))
};