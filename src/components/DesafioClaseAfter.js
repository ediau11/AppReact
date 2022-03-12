function imprimirProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productos = [
        { nombre: "Denom", marca: "x122" },
        { nombre: "Denom", marca: "22" },
        { nombre: "Denom", marca: "22" },
      ];
      if (productos.length === 0) {
        reject("No hay productos");
      } else {
        resolve(productos);
      }
    }, 3000);
  });
}
imprimirProductos()
  .then(() => {
    console.log(productos);
    return productos;
  })
  .then(() => {
    if (productos.length === 1) {
      throw new Error("Error solo hay un procducto");
    }
  })
  .catch((error) => {
    console.log("No hay productos" + error);
  });

// async function verinfo() {
//   let productos2 = imprimirProductos().then((procductos) => {
//     return productos;
//   })
//   console.log()
// }
