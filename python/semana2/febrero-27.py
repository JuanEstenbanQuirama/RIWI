"""

"""

#mi_lista = [1, 2, 3, 4, 5]
#print(len(mi_lista))

"""
Ejercicicio # 1
calcular el promedio de una lista de notas
    la suma de calificaciones, divivido entre el nnumero de notas o calificaciones


calificaciones = [12, 33, 59, 70, 86, 99]
total_calificaciones = sum(calificaciones)
numero_calificaciones = len(calificaciones)
promedio = total_calificaciones / numero_calificaciones
print(promedio)
"""

"""
Ejercicicio # 1
Calcular el numero mas grande
"""

numeros = [12, 55, 89, 90] # [12 = 0, 55 = 1 ....]
#print(max(numeros))
#con un for 
numero_mas_grande = numeros[0] #para guardar el numero mas grande

for numero in numeros: #  buscar numero en numeros  

    if numero > numero_mas_grande: # si buscar numermo es mas grande  12 > 12 / 55 >

        numero_mas_grande = numero
print(numero_mas_grande)    

"""
eliminar elementos diplicados de una lista

"""

duplicados = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,99,23,12,43,23]
for_duplicados = []

for j in duplicados:
    if j not in for_duplicados:
        for_duplicados.append(j)
        
print(for_duplicados)

"""
"""

dupli = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,99,23,12,43,23]
dupli = set(dupli)
dupli = list(dupli)
dupli.sort
print(dupli)

duplicaditos = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,99,23,12,43,23]

numeroRepetido = duplicaditos[0]
cont = 0

for numer in duplicaditos:
    for numer2 in duplicaditos:
        if numer == numer2:
            cont = cont+1
            if cont >= 2:
                duplicaditos.remove(numer)
    cont=0
print(duplicaditos)

"""
obtener la longitud minima entre las dos 
    pista (hoy una funcion que ya lo hace)
"""
lista_1 = [1,2,3,4,5]
lista_2 = ['a', 'b', 'c', 'd', 'e', 'f']
long1 = len(lista_1)
long2 = len(lista_2)

if long1 > long2:
    print("long 1 es mayor")
else:
    print("long2 es mayor")

listas_1 = [1,2,3,4,5]
listas_2 = ['a', 'b', 'c', 'd', 'e', 'f']

listas_2_lon = len(listas_1)
listas_1_lon = len(listas_2)
lista_total = (min(listas_1_lon, listas_2_lon))
print("la longitud menor es", lista_total)

"""
mostrar informacion de libros en la biblioteca organizados por titulo, autos, año
- 'python for Data", "Jake VanderPlas", 2015
- "Deep Learning", "Ian Goodfellow", 2016
- "The Elements of Statistical Learning", "Trevor Hastie", 2009

"""

autores = tuple ([("python for Data", "Jake VanderPlas", 2015),("Deep Learning", "Ian Goodfellow", 2016),("The Elements of Statistical Learning", "Trevor Hastie", 2009)])
for titulo,autor,ano in autores:
    print(f"{titulo}, {autor}, {ano}")

cadenas = ["Manzana", "pera", "banana", "naranja"]
#ordenar una lista de cadena alfabeticamente 
#y hacer tareas de riview