const btn = document.getElementById('btn');
const btnUpdate = document.getElementById('btnUpdate');

btnUpdate.disabled = true;

btn.onclick = () =>{
  cargarProductos();
  location.reload();

}


btnUpdate.onclick = () =>{
  let id = document.getElementById('txtId').innerHTML;
  modificar(id);
  cargarProductos();
  location.reload();
  
}

const btnCrear = document.getElementById('btnCrear');

  btnCrear.onclick = () =>{
  agregarProducto();
  location.reload();

}

const cargarProductos = async () => {

       await fetch('/tasks').then((response) => {
                return response.json();
            }).then((productos) => {


    let listadoHtml = '';

     for (let product of productos) {
     let botonEliminar = '<a href="#" onclick="eliminarProducto(' + product.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="bi bi-trash"></i></a>';
     let botonUpdate = '<a href="#" onclick="llenarformulario(' + product.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="bi bi-pencil"></i></a>';

     let productoHtml = '<tr><td>'+product.id+'</td><td>'+product.title+'</td><td>'+product.description+'</td><td>'+product.precio+'</td><td>'+product.image+'</td><td>'+botonEliminar+'</td><td>'+ botonUpdate+'</td></tr>';
         listadoHtml += productoHtml;
     }

    document.querySelector('#productos tbody').outerHTML = listadoHtml;
  })
}

cargarProductos();


async function eliminarProducto(id) {

  if (!confirm('¿Desea eliminar este producto?')) {
    return;
  }

    const request = await fetch('/tasks/delete/' + id, {
     method: 'DELETE'
  });

  location.reload()
}

/* ya no se usa pero se deja de ejemplo*/
async function modificarProducto(id) {

  if (!confirm('¿Desea modificar este producto?')) {
    return;
  }

    const request = await fetch('/tasks/update/' + id, {
     method: 'PATCH'
  });

  location.reload()
}


async function agregarProducto() {

let datos = {};
  datos.description = document.getElementById('txtDescription').value;
  datos.id = "";
  datos.title = document.getElementById('txtTitle').value;
  datos.image = document.getElementById('txtImage').value;
  datos.precio = document.getElementById('txtPrecio').value;


 const request = await fetch('/tasks/create', {
     method: 'POST',
      headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(datos)
  });
 alert("el producto fue creado con exito!");
  location.reload()

}


async function modificar(id) {



  let datos = {};
  datos.description = document.getElementById('txtDescription').value;
  datos.id = id;
  datos.title = document.getElementById('txtTitle').value;
  datos.image = document.getElementById('txtImage').value;
  datos.precio = document.getElementById('txtPrecio').value;


  if (!confirm('¿Desea modificar este producto?')) {
    return;
  }

    const request = await fetch('/tasks/create', {
                                     method: 'POST',
                                      headers: {
                                           'Accept': 'application/json',
                                           'Content-Type': 'application/json'
                                         },
                                         body: JSON.stringify(datos)
                                  });
                                 alert("El producto fue modificado con exito!");
                                  location.reload()

}

async function llenarformulario(id){

  if (!confirm('¿Desea modificar este producto?')) {
    return;
  }

   await fetch('/tasks').then((response) => {
       return response.json();
            }).then((productos) => {
                for (let product of productos) {
                    if(product.id == id){
                              document.getElementById('txtDescription').value = product.description;
                              document.getElementById('txtId').innerHTML = product.id;
                              document.getElementById('txtTitle').value =  product.title;
                              document.getElementById('txtImage').value = product.image;
                              document.getElementById('txtPrecio').value = product.precio;

                    }

                }

     });

     let btnUpdate = document.getElementById('btnUpdate');

    btnUpdate.disabled = false;

}


