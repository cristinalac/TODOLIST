const listaTareas = document.getElementById("listaTareas");
const nuevaTareaInput = document.getElementById("nuevaTarea");
// Función para agregar una nueva tarea a la lista


function agregarTarea() {
  const nuevaTareaTexto = nuevaTareaInput.value;
  console.log(nuevaTareaTexto);
  if (nuevaTareaTexto !== "") {
   const nuevaTareaElemento = document.createElement("li");
   nuevaTareaElemento.textContent = nuevaTareaTexto ;

    const completarBoton = document.createElement("button")
    completarBoton.textContent = "Completada";
    completarBoton.onclick = function () {
      nuevaTareaElemento.classList.toggle("completada");
    };

    const eliminarBoton = document.createElement("button");
    eliminarBoton.textContent = "Eliminar";
    eliminarBoton.onclick = function () {
      listaTareas.removeChild(nuevaTareaElemento);
      listaTareas.removeChild(completarBoton);
      listaTareas.removeChild(eliminarBoton);
    };
    

    // nuevaTareaElemento agregar elementos completarBoton y eliminarBoton a la nueva tarea


    listaTareas.append(nuevaTareaElemento,completarBoton,eliminarBoton);
    nuevaTareaInput.value = "";
  }
}
