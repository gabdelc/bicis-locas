function validateForm(g){
    
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById(input-"email").value;
    var password = document.getElementById("input-password").value;
    var lista = document.getElementById("bici").selectedIndex;
    
    
  if(nombre == "" || apellido =="" || email =="" || password()==false )
  { 
     alert("Campos incompletos");
    return false;
  }

     else if (!/^[a-zA-Z\s]*$/).test(nombre))
     {
        alert("Nombre inválido");
        return false;
        g.preventDefault();   
     }
    
    else if (!/^[a-zA-Z\s]*$/).test(apellido))
    {
        alert("Apellido inválido");
        return false;
        g.preventDefault();
    }
    
    else if (nombre.charAt(0) != nombre.charAt(0).toUpperCase() || apellido.charAt(0) != apellido.charAt(0).toUpperCase())
    {
        alert ("Primera letra debe ser una mayúsculas.");
               return false;
        g.preventDefault();
   }
        
    else if (!/([a-zA-Z0-9(._)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/.test(email)) {
        alert("No es un correo válido");
        return false;
        g.preventDefault();
    }
    
    else if(password > 6  || password === "password"|| password==="123456"|| password==="098754"){
        alert("contraseña invalida, ingrese nueva contraseña.");
        return false;
        g.preventDefault();
    }
    
    
    else if( bici == null || bici == 0 ) {
        alert("Selecciona tu tipo de bicicleta.");
    return false;
        g.preventDefault();
    }    
     
}
