"""
Funciones: son bloques de código reusables
    la funcion puede aceptar parametros que nos ayuden a reusar ese bloque de código
    palabra clave def identificador y parametro
        def mi_funcion(parametro1,parametro2)

            pass - cuando no va codigo
                 - se usa para indicar que no se a a escribir ningun tipo de codigo y continue la ejecucion del programa, permite que siga el flujo
                 - si no pongo pass no se podria segui ejecutando el programa
                 - no es para relizar lógica de codigo, es como para mejorar el flujo de trabajo mas que todo para proyectos iniciales
"""
#if cosa1 in cosa2
#    pass
#else:
"""
Funciones propias de Python 
"""
suma_sin_funcion = 3 + 4
print(suma_sin_funcion)

def sumar_numeros_encapsulados(a, b):
    suma = a + b
    return suma

resultado = sumar_numeros_encapsulados(3, 4)
print("el resultado de la suma es: ", resultado)
print(sumar_numeros_encapsulados(2,4))

def sumar_lista_escapsulados(lista):
    suma = sum(lista)
    return suma

numeros = [1,2,3,4,5,6]
resultado = sumar_lista_escapsulados(numeros)
print(resultado)

#EJME: calcular el promedio de calificaciones
def calcular_promedio(numeros):
    total = sum(numeros)
    promedio = total / len(numeros)
    return promedio

lista_numeros = [18, 28, 30, 40, 50]
promedio = calcular_promedio(lista_numeros)
print("la nota es: ", promedio)

def es_palidromo(cadena):
    cadena = cadena.lower().replace(" ", "")
    return cadena == cadena[::-1] # forma de invertir una cadena

palabra = "reconocer"
resultado = es_palidromo(palabra)
if resultado: # si "resultado contiene algo"
    print(palabra, "es palidromo")
else:
    print(palabra, "no es palidromo")

def invertir_lista(lista):
    return lista[::-1]

mi_listas = [2, "hola", 1, 4]
lista_invertida = invertir_lista(mi_listas)
print(mi_listas)
print(lista_invertida)

#contar la cantidad de palarbas en una cadena

def contar_palabras(cadena):
    palabras = cadena.split() #separamos las palabras por los espacios
    cantidad_palabras = len(palabras)
    return cantidad_palabras

texto = "esto es una cadena alv"
cantidad_de_palabras = contar_palabras(texto)
print("el texto tiene ", cantidad_de_palabras , "palabras")

listado = ("juan esteban quirama lopez")
contador = {}

for caracter in listado:
    if caracter not in contador:
        contador[caracter] = 1
    else:
        contador[caracter] += 1

print(contador)
print(listado.count('a'))

"""
Diccionarios = {'clave': 'valor'}
"""
mi_diccionario = {'nombre': 'juna', 'edad': 30, 'ciudad': 'madrid'}

#acceder a un valor
print(mi_diccionario['nombre'])
#agregar una nueva clave valor (al final)
mi_diccionario['ocupacion'] = "Ingeniero"
#modificar un valor existente
mi_diccionario['edad']=50
#eliminar una clave valor
print(mi_diccionario)
del mi_diccionario['ciudad']
print(mi_diccionario)

"""
metodos de los diccionarios
dic.values()  -> devuelve todos los valores del diccionario sin las claves
dic.items()   -> develve una lista  con pares (clave, valor).
dic.keys()    -> devuelve todas las claves del diccionario.
"""

mi_diccionario_basico = {'a': 1, 'b':2, 'c':3}
valores = mi_diccionario_basico.values()
print(valores)

items = mi_diccionario_basico.items()
print(items)

keys = mi_diccionario_basico.keys()
print(keys)

for valor in mi_diccionario_basico.values():
    print(valor)

#mirar archivo en el drive