# Prueba técnica — React developer

Proyecto realizado con [create-react-app](https://github.com/facebookincubator/create-react-app).

## Comenzando 🚀

_Pararse en la raiz del proyecto, moverse a la carpeta `./dist` y en terminal, correr:_


```javascript
npm install
```

_Y luego:_

```javascript
npm start
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Para ejecutar los tests unitarios asegurarse estar dentro de la carpeta `/dist`_

```javascript
npm test
```

## Consigna 📋

### Opciones técnicas y arquitectónicas utilizadas 📌

* Uso de TypeScript por ser un lenguaje de tipado, lo cual minimiza errores y está orientado al trabajo en equipo.
* React-hooks, brindan mejores y mas sencillas soluciones funcionales que los componentes de clases.
* CSS modules para lo estilos, su principal ventaja es que hashea los nombres de las clases, evitando asi que una clase pise a otra.

### Mejoras 📌
* Inclusión de un MAYOR numero de test unitarios.
* Tests End to End.
* Agregar un menu desplegable el inicio de la version mobile.

### Mas mejoras 📌📌
* Implementar un inicio de sesión, donde se pueda registrar y posteriormente loguearse usando algun tipo de autorizacion por tokens.
* Un buscador para poder obtener mas titulos.
* Opcion de filtrado para que del lado del cliente se pueda ordenar los resultados por titulo o año.
* Poder obtener la descripcion real de cada video usando algun API externa.