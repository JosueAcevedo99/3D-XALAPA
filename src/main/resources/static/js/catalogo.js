
const cargarCatalogo = async () => {

    const container = document.querySelector('#portafolio');
    let contentHTML = '';

     contentHTML += `<div class="col-md-4">
                        <img src="images/glow-3d.jpg" class="img-thumbnail">
                        <h5 class="title">ID: Único</h5>
                        <h5 class="title">Producto: Personalizado en PLA fosforesente</h5>
                        <h5 class="title">Descripción: La mejor figura es la que tú personalizas</h5>
                        <h5 class="title">Precio: incalculable</h5>
                    </div>`;

     contentHTML += `<div class="col-md-4">
                        <img src="images/paquete-3.webp" class="img-thumbnail">
                        <h5 class="title">ID: Único</h5>
                        <h5 class="title">Producto: Personalizado en  resina hiper-realista</h5>
                        <h5 class="title">Descripción: La mejor figura es la que tú personalizas</h5>
                        <h5 class="title">Precio: incalculable</h5>
                    </div>`;


       await fetch('/tasks').then((response) => {
                      return response.json();
                  }).then((productos) => {

          for (let product of productos) {

              const image= product.image;
              const tittle = product.title;
              const description = product.description;
              const precio = product.precio;
              const id = product.id;

              contentHTML += `
              <div class="col-md-4">
                    <img src="${image}" class="img-thumbnail">
                    <h5 class="title">ID: ${id}</h5>
                    <h5 class="title">Producto: ${tittle}</h5>
                    <h5 class="title">Descripción: ${description}</h5>
                    <h5 class="title">Precio: ${precio}</h5>
              </div>`;
          }
          container.innerHTML = contentHTML;
      })

  }

cargarCatalogo();



