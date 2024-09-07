function calcularCd() {
    let dificultadBase = parseInt(Number(prompt("********CUAL ES LA DIFICULTAD BASE DEL ENFRENTAMIENTO?********\n\n -Tené en cuenta que:\n\n °Facil:5\n\n °Normal:10\n\n °Dificil:15\n\n °Muy Dificil:20")));
    if (dificultadBase == " " || dificultadBase == null) {
    
    }else{
        let atributoBase = parseInt(Number(prompt("**CUAL ES EL VALOR DE LA PROPIEDAD A USAR (SIN MODIFICADOR)**\n\n -Por Ejemplo: Destresa= 10\n")));
        if (atributoBase == " " || atributoBase == null){
        }else{
            if (!isNaN(dificultadBase && atributoBase)) {
                let cd = dificultadBase + (10 - atributoBase);  
                if (cd <= 0) {
                    cd = "**LA CLASE DE DIFICULTAD FINAL** \nEL PERSONAJE LO PUEDE HACER CON LOS OJOS CERRADOS CD = 0"
                }else{
                    alert("**LA CLASE DE DIFICULTAD FINAL**\n\n"+`-Dificultad Base del enfrentamiento: ${dificultadBase}CD\n -Valor del Atributo: ${atributoBase}\n -Clase de Dificultad final: ${cd}`)
                }
            } else {
                alert("**UNO O LOS DOS DATOS INTRODUCIDOS SON INCORRECTOS**")
                calcularCd()
            }
        }
        
    }
}

calcularCd()

