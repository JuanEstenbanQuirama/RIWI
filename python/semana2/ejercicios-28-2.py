"""
crear una funcion pára registrar documento,
"""

def registroId(nombre, cedula):
    return print("Bienvenido", nombre, "tu id es: ", cedula)

nombre = input("ingresa tu nombre: ")
cedula = int(input("ingresa tu cedula: "))

registro1 = registroId(nombre, cedula)
   

def guardarDoc(lista, documento):
    resultado = lista.append(documento)
    return resultado

dataBase = []

cedula1 = int(input("ingresa tu cedula: "))
cedula2 = int(input("ingresa tu cedula: "))

guardarDoc(dataBase, cedula1)
guardarDoc(dataBase, cedula2)

print(f"los doc guardados: {dataBase}")
print("los doc guardados:", dataBase)

#crear una funcion para agregar el iva de un producto
#crear una funcion para hacer un descuento de 5% si el cliente compara 5 o mas productos
#calcular saldo restante de un salario de 2 millones despues de gastos por un millon