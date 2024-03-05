
"""user="juanito"
password="12345"
i=0
j=0

while i < 3:
    userAuth = input("Ingresa usiario")
    passwordAuth = input("Ingresa pass")
    
    if user == userAuth and password == passwordAuth:
        print ("Bienvenido a la zona de administrador")"""


edad1 = int(input("Ingresa edad # 1:"))
edad2 = int(input("Ingresa edad # 2:"))

if edad1 < edad2:
    print("edad 1 es mayor")
elif edad1 > edad2:
    print("Edad 2 es mayor")
elif edad1 == edad2:
    print("Son iguales las edades")
