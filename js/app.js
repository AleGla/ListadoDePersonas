const personas = [];

function mostrarPersonas(){
    console.log("Mostrar Personas");
    let texto="";
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.getNombre} ${persona.getApellido}</li>`;    
    }
            document.getElementById("personas").innerHTML=texto;
}

function agregarPersona(){
    const forma=document.forms["forma"];
    const nombre=forma["nombre"];
    const apellido=forma["apellido"];
    const persona= new Persona(nombre.value, apellido.value);
    if(nombre.value!='' && nombre.value!=''){
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log("Error");
    }
    
}
