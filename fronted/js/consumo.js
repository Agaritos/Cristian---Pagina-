const categoria = document.getElementById('categoria')


fetch('http://localhost:3000/api/categorias')
    .then(respuesta=>respuesta.json())
.then(datos => { 
    
for (i=0;i<datos.data.length;i++){
      categoria.innerHTML += `<option>${datos.data[i].nombre}</option>`
}

  
    




})