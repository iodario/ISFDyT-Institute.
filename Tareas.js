let tareas = [];

/**
 * Función para añadir una nueva tarea
 */
let agregar = function() {
  let nuevaTarea = document.querySelector("#nueva");
  // Guardamos la tarea en el array
  tareas.push(nuevaTarea.value);
  // Borramos la tarea del input
  nuevaTarea.value = "";
  nuevaTarea.focus();
  // Redibujamos
  render();
};

/**
 * Función para borrar una tarea
 */
let borrar = function(pos) {
  // Borramos de tareas
  tareas.splice(pos, 1);
  // Redibujamos
  render();
};

/**
 * Función que redibuja las tareas
 */
let render = function() {
  let html_tareas = document.querySelector("#tareas");
  let html_final = "";
  // Generamos el HTML
  let num = 0;

  for (let i of tareas) {
    html_final += `
					<div class="card my-2">
						<div class="card-body d-flex">
							${i}
							<a href="#" class="btn btn-danger ml-auto" onclick="borrar(${num})">X</a>
						</div>
					</div>	
					`;
    num += 1;
  }
  // Insertamos el HTML
  html_tareas.innerHTML = html_final;
};
