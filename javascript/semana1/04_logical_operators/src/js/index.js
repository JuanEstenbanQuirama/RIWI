// construcctor: primer metodo que se ejecuta en una clase - eso corre por defecto
// let permite inicializar vacía, pero const, siempre se tiene que inicializar con un dato
console.groupCollapsed("Data Types");
let var1 = 12;
let var2 = "4";
let var3 = "Hello world";
let var4 = true;
let var5 = null;
let var6; // undefined
let var7 = NaN; //
let var8 = [1, 2, 3, 4, 5]; //console.log(typeof var8); - objeto , dado que js toma los arrays como objetos
let var9 = {
  name: "Juan",
  lastName: "Quirama",
  age: 26,
}; //console.log(typeof var9); - objeto
let var10 = function () {
  console.log("Hello world");
};
console.info(typeof var9);
console.groupEnd();

// -------------------------------arithmetic operators
console.groupCollapsed("arithmetic operators");
let number1 = 15;
let number2 = 4;

let suma = number1 + number2;
let resta = number1 - number2;
let multiplicación = number1 * number2;
let division = number1 / number2;
let potencia = number1 ** number2;
let modulo = number1 % number2;
console.log("la suma es", suma);
console.log("la suma es" + suma); // si suo el + me concatena el numero en un string
console.log("la resta es", resta);
console.log("la multiplicación es", multiplicación);
console.log("la division es", division);
console.log("el restante es", modulo);
console.log("la potencia es", potencia);

console.groupEnd();
// -------------increment and decrement operators
console.groupCollapsed("Increment and decrement operators");
let numberToIncrement = 50;
let numberToDecrement = 100;

console.log("inicio incremnet", numberToIncrement);
numberToIncrement++; // ++ al valor actual de la variable, suma UNA sola unidad
numberToIncrement++;
console.log("final", numberToIncrement);
numberToIncrement += 5; // para decirle de cuanto quiero sumarle
console.log("final", numberToIncrement);

console.log("inicio decrement", numberToDecrement);
numberToDecrement--;
numberToDecrement--;
console.log(numberToDecrement);
numberToDecrement -= 5;
console.log(numberToDecrement);
console.groupEnd();

// ---------------comparison operators
console.groupCollapsed("Comparison operators");
let compareNumber1 = 4;
let compareNumber2 = "4";
// operador de igualdad
console.log(
  "Lo que esta a la izquiera es igual a lo que esta a la derecha ==",
  compareNumber1 == compareNumber2
);
console.log(
  "Lo que esta a la izquiera es igual a lo que esta a la derecha ===",
  compareNumber1 === compareNumber2
);
// operador de diferencia
console.log(
  "se un elemento es diferente de otro elemento !=",
  compareNumber1 != compareNumber2
); // se un elemento es diferente de otro elemento
console.log(
  "diferentes en valor y en tipo !==",
  compareNumber1 !== compareNumber2
); // diferentes en valor y en tipo

console.log("// Operador < menor que");
console.log(2 < 5);
console.log(60 < 35);
// menor o igual
console.log(15 <= 15);

console.log("// Operador < mayor que");
console.log(2 > 5);
console.log(60 > 35);
// menor o igual
console.log(15 >= 15);
console.groupEnd();

// operadores logicos
console.group("Logical operators");
console.log(2 < 5);
console.log(2 > 1);
// Operador AND &&
console.log(2 < 5 && 2 > 1); // las dos DEBEN ser verdadres par que el operador && imprima true
console.log(2 > 1 && 10 > 6 && 100 > 69 && 5 < 1);

// operador OR || 
console.log(5<10 || 2<1) //alguna de las dos DEBE ser verdaderas 


// Operadores logicos anidados
console.log(4<10 && 2<60 || "Operador" == "operador") 
console.log(4<10 && (2<60 || "Operador" == "operador")) 

// operador NOT opera con los booleans
let boleano = true
console.log(!boleano)