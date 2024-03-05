
inventarioData = {}

def gestionInventario():
    while True:
        print('elige una opcion')
        print('1. agregar producto')
        print('2. ver estado de inventario')
        print('3. cerrar sistema de inventario')
        option = input('ingresa la opcion: ')
        if option == '1':
            nameProduct = input('ingresa nombre del producto: ')
            priceProduct = input('precio unitario del producti: ')
            stockProduct = int(input('cantidad stock: '))
            if nameProduct in inventarioData.keys():
                print('ya existe, incremantando stock')
                inventarioData[nameProduct]['stock'] += stockProduct
            else:
                inventarioData[nameProduct] = {'precio': priceProduct, 'stock': stockProduct}
                print('producto agregado exitosamente')
        elif option == '2':
            print(inventarioData)
        elif option == '3':
            print('sistema cerrado')
            break
        

gestionInventario()