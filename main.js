var arregloDatos= Array();

function guardar(){
    
    let nombres= document.getElementById("nombres").value;
    let apellidos= document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let contraseña= document.getElementById("password").value;
    let edad= document.getElementById("edad").value;
    let sexo= document.querySelector("input[name='sexo']:checked").value;
    let egresado= document.getElementById("egresado").value;
    
    let nuevoElemento= {
        "nombres": nombres,
        "apellidos": apellidos,
        "correo": correo,
        "contraseña": contraseña, 
        "edad": edad,
        "sexo": sexo,
        "egresado": egresado,         
    }
        arregloDatos.push(nuevoElemento);
        document.getElementById("form-register").reset();
        alert("Datos guardados con exito");
        
        console.log(nuevoElemento);
}
