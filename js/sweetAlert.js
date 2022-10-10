function alerta() {
    verificar = document.querySelectorAll(".required");
    console.log(verificar);
    if (( verificar[0].value != "" ) && ( verificar[1].value != "" ) && ( verificar[2].value != "" )) {
        Swal.fire(
            'Enviado!',
            'Pronto nos pondremos en contacto con usted!',
            'success'
          )
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Rellenar todos los campos obligatorios!',
          })
    }
}