document.getElementById("input-password").setAttribute("minlength", "6"); 



function validateForm(evt) {
var nombre, apellido, email, contraseña;
nombre = document.getElementById("name").value;
apellido = document.getElementById("lastname").value;
email = document.getElementById("input-email").value;
contraseña = document.getElementById("input-password").value;
    
var lista = document.getElementById("bici").selectedIndex;
   
     
    if(nombre===""||apellido===""|| email===""|| contraseña==="") {
        alert("Todos los campos son obligatorios.");
        return false; 
            }
    
    else if !(/^[a-zA-Z\s]*$/).test(nombre)){
        alert("No es un nombre válido");
        return false;
        evt.preventDefault();
        
    }
    
    else if (!(/^[a-zA-Z\s]*$/).test(apellido)){
        alert("No es un apellido válido");
        return false;
        evt.preventDefault();
    }
    
    else if(contraseña === "password"|| contraseña==="123456"|| contraseña==="098754"){
        alert("No es una contraseña válida.");
        return false;
        evt.preventDefault();
    }
    
    else if (!(/\w+@\w+\.+[a-z]/).test(email)) {
        alert("No es un correo válido");
        return false;
        evt.preventDefault();
    }
    
    
    else if( lista == null || lista == 0 ) {
        alert("Escoge una de la lista.");
    return false;
        evt.preventDefault();
}
    
    else if (nombre.charAt(0) != nombre.charAt(0).toUpperCase()|| apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
        alert ("Primera letra en mayúsculas.");   
               return false;
        evt.preventDefault();
  
       
    }
    
  
}