let masProductos = true;
let precios = [];
while(masProductos){
    precios.push(parseFloat((Math.random()*(100-1)+1).toFixed(2)))
    masProductos = confirm("¿Deseas añadir otro producto?")
};
if(!masProductos){
    let sumatoria = 0;
    console.log("Los precios de los productos son");
    console.log(precios);
    console.log("La suma es");
    for(let index = 0; index < precios.length; index++){
        sumatoria += precios[index];
    };
    console.log(sumatoria);
};