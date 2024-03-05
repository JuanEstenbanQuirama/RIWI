
""" EJERCICIO SELECCIÓN DE CANDIDATOS PARA UN EMPLEO:  se hace una convocatoria para elegir candidatos para una multinacional.
La información que se debe tener de los candidatos es: nombre, experiencia laboral en años, 
lenguajes de programación que domina, idiomas...Las funciones que debe tener el código son: Agregar candidatos, 
Eliminar candidatos, Modificar candidatos, Mostrar candidatos.  QUE COMIENCE EL JUEGO!! """

base = [
        {"nombre": 'luisaw',
         "experiencia": 1, 
         "idiomas": ['ingles', 'espanol',],
         "lenguajes":['Python','Java','Javascript']
         },
            {"nombre": 'luisaw',
         "experiencia": 1, 
         "idiomas": ['ingles', 'espanol',],
         "lenguajes":['Python','Java','Javascript']
         },
            {"nombre": 'luisaw',
         "experiencia": 1, 
         "idiomas": ['ingles', 'espanol',],
         "lenguajes":['Python','Java','Javascript']
         },
        ]

def add_candidates(base):

    listLang = []
    listcode = []

    name = input("Ingrese el nombre del candidato: ")
    exp = int(input("Ingrese la experiencia laboral del candidato en años: "))
    languages = int(input("Ingrese la cantidad de idiomas que domina el candidato: "))
    for i in range(languages):
        lang = input(f"\nIngrese el idioma {i+1}")
        listLang.append(lang)
        print("Idioma agregado!")
    programming = int(input("Ingrese la cantidad de lenguajes de programacion que domina el candidato "))
    for i in range(programming):
        code = input(f"\nIngrese el lenguaje de programacion {i+1}")
        listcode.append(code)
        print("Lenguaje de programacion agregado")
    a = {"nombre": name,
         "experiencia": exp, 
         "idiomas":listLang,
         "lenguajes":listcode,}
    base.append(a)
    print("El candidato ha sido agregado correctamente")

def modify_candidates(base):
    show_candidates2(base)
    nombre = input("Ingrese el nombre de el candidato que desea modificar ").lower()
    print("Datos que puede modificar: \n(1) Experiencia \n(2) Idiomas \n(3) Lenguajes")

    for i in base:
        if nombre == i['nombre']:
            a = input("Que dato te gustaria modificar? ")
            nuevo = input("Ingrese el dato nuevo ")
            i[a] = nuevo
            print("Candidato modificado  con éxito.")
            """ 
            a = {"nombre": name, "experiencia": exp, "idiomas":lang, "lenguajes":code}
            base.append(a) """
        else:
            print("Informacion no valida")

def show_candidates(base):
    if not base:
        print("No hay candidatos en la lista.")
    else:
        print("Lista de candidatos:")
        for candidatos in base:
            print(f"Nombre del candidato: {candidatos['nombre']}, Experiencia laboral en años: {candidatos['experiencia']}, Idiomas que domina: {','.join(candidatos['idiomas'])}, Lenguajes de programacion que domina: {','.join(candidatos['lenguajes'])}")

def show_candidates2(base):
    if not base:
        print("No hay candidatos en la en la lista.")
    else:
        print("Lista de candidatos:")
        for i in base:
            print(f"Candidato: {i['nombre']}")

def delete_candidates(base):
    show_candidates2(base)
    a = input("Ingrese del candidato que desea eliminar ")
    for i in base:
        if a == i['nombre']:
            base.remove(i)
            print("El candidato ha sido eliminado exitosamente!")
        else:
            print("El candidato no ha sido encontrado.")

def main():
    while True:
        print("\nBienvenido al menu de lista de candidatos. A continuacion: ")
        print("(1) Agregar candidatos")
        print("(2) Modificar candidatos")
        print("(3) Eliminar candidatos")
        print("(4) Mostrar candidatos")
        print("(5) Finalizar el programa")

        start = input("\nIngrese el número de la opción que desea realizar: ")

        if start == "1":
            add_candidates(base)
        elif start == "2":
            modify_candidates(base)
        elif start == "3":
            delete_candidates(base)
        elif start == "4":
            show_candidates(base)
        elif start == "5":
            print("El programa ha finalizado")
            break
        else:
            print("Opción inválida. Por favor, ingrese un número válido.")

main()

# No le funciona el mostrar candidatos