const form = document.querySelector("#form");
const descripcion = document.querySelector("#input-descripcion");
const monto = document.querySelector("#input-monto");
const tipo = document.querySelector("#input-tipo");
const categoria = document.querySelector("#input-categoria");
const inputEnviar = document.querySelector("#input-enviar");
const contenedorDatosUsuario = document.querySelector(".contenedor-datos-usuario");

// Funciones auxiliares de JSON

const convertirAJSON = (objeto) => {
    const objetoConvertidoAJSON = JSON.stringify(objeto);

    return objetoConvertidoAJSON;
}

const convertirDesdeJSON = (objetoJSON) => {
    const JSONConvertidoAObjeto = JSON.parse(objetoJSON);

    return JSONConvertidoAObjeto;
}

const guardarEnLocalStorage = (objeto, string) => {
    const objetoConvertidoAJSON = convertirAJSON(objeto);
    localStorage.setItem(string, objetoConvertidoAJSON);
}

const leerDesdeLocalStorage = (clave) => {
    const objetoGuardado = localStorage.getItem(clave);
    const objetoDeJavascript = convertirDesdeJSON(objetoGuardado);

    return objetoDeJavascript;
}

// Prevenir el envio del formulario

form.onsubmit = (event) => {
    event.preventDefault()
}

// Objeto sin informacion

const nuevaOperacion = {
    descripcion: "", 
    monto: 0, 
    tipo: "", 
    categoria: "",
}

console.log(nuevaOperacion);

// Cambiar las propiedades del objeto a partir de los datos del formulario y guardar en localstorage

inputEnviar.onclick = () => {
    nuevaOperacion.descripcion = descripcion.value;
    nuevaOperacion.monto = monto.value;
    nuevaOperacion.tipo = tipo.value;
    nuevaOperacion.categoria = categoria.value;
    console.log(nuevaOperacion);

    convertirOperacionAHTML(nuevaOperacion);

    guardarEnLocalStorage(nuevaOperacion, "nueva_operacion");
}

// Mostrar nueva operacion en HTML

const convertirOperacionAHTML = (objeto) => {
    contenedorDatosUsuario.innerHTML = `
    <p>${objeto.descripcion}</p>
    <p>${objeto.monto}</p>
    <p>${objeto.tipo}</p>
    <p>${objeto.categoria}</p>
    `;
}

convertirOperacionAHTML(leerDesdeLocalStorage("nueva_operacion"));

