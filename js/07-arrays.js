let animales = ["tigre", "leon", "elefante", "mono"];
console.log(animales);
animales[4] = "conejo";
animales[10] = "jichi";
console.log(animales);
console.log(typeof animales);
// Array simple con números
let numeros = [10, 20, 30, 40];

// Array con diferentes tipos de datos
let mezcla = ["texto", 42, true, null];
console.log(numeros[0]); // 10
console.log(numeros[2]); // 30
let frutas = ["manzana", "banana", "pera"];
frutas.push("naranja"); // ["manzana", "banana", "pera", "naranja"]

frutas.forEach(f => console.log(f));
// imprime cada fruta en la consola
