/*De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta ``json-server --watch exercise-3.json`` y obtendremos de la url `http://localhost:3000` los datos del ejercicio.

En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

El endpoint `http://localhost:3000/orders` nos devolverá una lista de pedidos de la tienda Mari & Juan y el endpoint `http://localhost:3000/products` que nos devuelve una lista de productos.

La intención es pintar todos los pedidos ordenados por fecha (ultimos pedidos al principio) y en los que pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida. Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, por ejemplo ``http://localhost:3000/products/2``. De esta forma podremos obtener ya toda la información y pintarla en el html.*/

const ordersUrl = 'http://localhost:3000/orders';
const productsUrl = 'http://localhost:3000/products';
const body = document.querySelector('body');

// Función principal para obtener y mostrar los datos
const obtenerDatos = async () => {
    try {
        const ordersResponse = await fetch(ordersUrl);
        const ordersData = await ordersResponse.json();
        
        const sortedOrders = ordersData.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        for (const order of sortedOrders) {
            const orderElement = await crearPedido(order);
            body.appendChild(orderElement);
        }
    } catch (error) {
        console.log(error);
    }
};

const obtenerNombreProducto = async (id) => {
    try {
        const productsResponse = await fetch(productsUrl);
        const productsData = await productsResponse.json();

        const product = productsData.find(product => product.id === id);

        if (product) {
            return product.name;
        } else {
            console.warn(`No se encontró información del producto para el ID: ${id}`);
            return 'Producto Desconocido';
        }
    } catch (error) {
        console.log(error);
        return 'Producto Desconocido';
    }
};

const crearPedido = async (order) => {
    const orderDiv = document.createElement('div');
    const orderNumber = document.createElement('h2');
    orderNumber.textContent = `Pedido #${order.id}`;
    orderDiv.appendChild(orderNumber);

    const orderDate = document.createElement('h3');
    orderDate.textContent = `Fecha: ${order.date}`;
    orderDiv.appendChild(orderDate);

    const orderList = document.createElement('ul');

    for (const product of order.products) {
        const orderItem = document.createElement('li');
        const productName = await obtenerNombreProducto(product.productId);
        const orderName = document.createElement('span');
        orderName.textContent = productName;
        orderItem.appendChild(orderName);

        const orderQuantity = document.createElement('span');
        orderQuantity.textContent = ` x ${product.quantity}`;
        orderItem.appendChild(orderQuantity);

        orderList.appendChild(orderItem);
    }

    orderDiv.appendChild(orderList);

    return orderDiv;
};

obtenerDatos();