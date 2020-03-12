# Blueprint Management 4 - Heavy Clients


# Integrantes:

Jimmy Armando Chirivi Nivia
Juan Manuel Villate Izasa


Agregue al lienzo de la página un controlador de eventos que le permita capturar los 'clics' realizados, ya sea con el mouse o con una pantalla táctil. Para esto, considere este ejemplo del uso de eventos de tipo PointerEvent (aún no es compatible con todos los navegadores) para este propósito. Recuerde que, a diferencia del ejemplo anterior (donde el código JS está incrustado en la vista), se espera que la inicialización de los controladores de eventos esté modularizada correctamente, como se muestra en este código.

Codigo:

![Captura](https://user-images.githubusercontent.com/48265107/76494069-18fa7200-6402-11ea-8ae7-17583a110efa.JPG)

![Captura](https://user-images.githubusercontent.com/48265107/76494269-7db5cc80-6402-11ea-89d4-4ab23a26e08f.JPG)

Resultados:

![Captura](https://user-images.githubusercontent.com/48265107/76494513-05034000-6403-11ea-9fdf-b019b1d30a9c.JPG)


Agregue lo que se necesita en sus módulos para que cuando se capturen nuevos puntos en el lienzo abierto (si no se ha seleccionado un lienzo, no se debe hacer nada):
El punto se agrega al final de la secuencia de puntos en el lienzo actual (solo en la memoria de la aplicación, ¡NO INCLUSO EN LA API!).
El dibujo está repintado.

Codigo:
![Capture](https://user-images.githubusercontent.com/48265107/76530139-4b778f80-6441-11ea-832d-51a2e44a128e.PNG)

![Capture](https://user-images.githubusercontent.com/48265107/76530204-6518d700-6441-11ea-8313-b24fe6301622.PNG)

Resultado:

![Capture](https://user-images.githubusercontent.com/48265107/76530272-7cf05b00-6441-11ea-8a87-15c871debac7.PNG)







