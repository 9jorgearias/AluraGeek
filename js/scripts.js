document.getElementById('formAgregarProducto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').value;

    const producto = document.createElement('div');
    producto.className = 'producto'; // Asegurarse de que el div tenga la clase 'producto'
    producto.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <p>${nombre}</p>
        <p>${precio}</p>
        <i class="fas fa-trash delete-icon"></i>
    `;

    document.getElementById('productosLista').appendChild(producto);

    this.reset();

    producto.querySelector('.delete-icon').addEventListener('click', () => {
                producto.remove();
            });
        
            document.querySelector('.productos').appendChild(producto);
});



