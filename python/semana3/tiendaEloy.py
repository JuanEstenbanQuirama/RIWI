def agregarArticulo(listaArticulo):
    articuloNuevo = input('Agregar articulo al inventario ')
    precioArticulo = input('¿Cuál es precio del articulo? ')
    stockProducto = input('¿Cuantas unidades desea almacenar ?')
    inventario = {'Nombre articulo ':articuloNuevo, 'Precio articulo ':precioArticulo, 'Cantidad en stock ':stockProducto}
    listaArticulo.append(inventario)
    print('------Se ha agregado el articulo exitosamente------')

def modificarArticulo(listaArticulo):
    mostrarLista(listaArticulo)
    indice = int(input('Elija el producto que desea modificar '))
    if 0 <= indice < len(listaArticulo):
        modNombreArt = input('Escribe el nombre modificado correctamente ')
        modPrecio = input('Ingrese el nuevo precio ')  
        modStock = input('Ingrese cantidad de unidades actualizadas ')
        listaArticulo[indice]['Nombre articulo '] = modNombreArt
        listaArticulo[indice]['Precio articulo '] = modPrecio
        listaArticulo[indice]['Cantidad en stock '] = modStock
    else:
        print('----El articulo que desea modificar no existe en nuestra lista----')  

def eliminarArticulo(listaArticulo):
    mostrarLista(listaArticulo)
    indice = int(input('Elija el producto que desea modificar '))
    if 0 <= indice < len(listaArticulo):
        del listaArticulo[indice]
        print('---------Se elimino el articulo con exito---------')
    else:
        print('----El articulo que desea modificar no existe en nuestro inventario----')

def mostrarLista(listaArticulo):
    if not listaArticulo:
        print('----No hay articulos en la lista----')
    else:
        print('------------INVENTARIO------------')
        for i, listado in enumerate(listaArticulo):
            print(f"{i}. {listado['Nombre articulo ']} ${listado['Precio articulo ']} {listado['Cantidad en stock ']} Unidades")

def main():
    listaArticulo = []
    while True:
        print('\n-----------MENÚ DE OPCIONES-----------\n')
        print('(1). Agregar Artículo')
        print('(2). Modificar Articulo')
        print('(3). Eliminar Artículo')
        print('(4). Mostar Artículo')
        print('(5). Terminar operación')

        opcion = int(input('\n------Elija una opción del Menú------\n'))

        if opcion == 1:
            agregarArticulo(listaArticulo)
        elif opcion == 2:
            modificarArticulo(listaArticulo)
        elif opcion == 3:
            eliminarArticulo(listaArticulo)      
        elif opcion == 4:
            mostrarLista(listaArticulo)
        elif opcion == 5:
            print('------Gracias por preferirnos para la seguridad de tu inventario------')
            break
        else:
            print('-----Opción no válida, vuelva a intentarlo-----')


main()
