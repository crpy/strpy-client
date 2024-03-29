# Cliente de STP

## Instalacion

Copiar `public/` a un servidor HTTP publico

## Motivacion

Analizamos como esta desarrollado STP actualmente y decidimos que era mas factible empezar de cero, con la misma base de datos.

### Porque python?

Python es un lenguaje popular. Al ser popular es mas facil y barato conseguir mano de obra calificada. Tambien existe miles de librerias y frameworks que agilizan el desarrollo, lo hacen mantenible y evita problemas como los que encontramos en el sistema Actual (SQL injections)

### Porque React?

Es un framework que facilita bastante la logica de aplicaciones complejas de pagina unica (como GMAIL). Al tener estados y poder llamar al render las veces que exista algun cambio hace que la logica sea mas sencilla (jQuery es opcional, en este prototipo solo lo utilizamos para Ajax, pero es la version final no seria incluida).

React es utilizado en facebook, es un proyecto activo, lo cual nos aseguramos de que tenga soporte por muchos anhos.

Tambien `webpack` nos permite empaquetar nuestra app (que tiene muchos archivos) en uno solo. Tambien nos permite utilizar el nuevo Javascript (ES2016) para tener un codigo mas simple y conciso.

### Porque un servidor de API?

Al centralizar toda la logica del servidor en un solo lugar, con un solo lenguaje, simplifica bastante:

 1. Seguridad, todos los datos se acceden por medio de un solo servicio, lenguage y framework.
 2. Los clientes pueden estar hosteados en cualquier servidor, una telefono movil o una app de escritorio (con Electron)
 3. El servidor habla un solo lenguaje (JSON) uniforme para todos los clientes
 4. La sesion es manejada por el server.
 5. El rendering de los datos es responsabilidad exclusiva de cada cliente (este es el cliente "web").
 
En el stack actual el hay un servicio para usuario (CAS) (que esta mal configurado) permite a cualquier app loguear. STP es el encargado de manejar datos y tambien de "renderear".


## Development

### Requisitos

 1. Node, NPM
 2. React
 3. Webpack

### Instalacion

```bash
git clone https://github.com/crpy/strpy-client
cd strpy-client
npm install
npm install -g webpack

# editar

webpack # para construir
```

Editar `src/settings.js` para hablar con el servidor correcto API.

## TODO

1. Agregar mas vistas
2. Agregar formularios de edicion (proceso)
3. Agregar formularios de creacion de datos

_Debido a problemas con mi hardware el desarrollo esta retrasado_.
