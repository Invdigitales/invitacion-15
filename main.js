
    const $days = document.getElementById('days'),
    $hours = document.getElementById('hours'),
    $minutes = document.getElementById('minutes'),
    $seconds = document.getElementById('seconds'),
    $finalMessage = document.querySelector('.final-sms');
    let boton = document.querySelector("#btn")




    boton.addEventListener("click", () => {

        Swal.fire({
          title: '<strong>VER LA UBICACION <u></u></strong>',
          icon: 'success',
          html:
            'INGRESA, ' +
            '<a href=https://www.google.com.ar/maps/@-33.1477351,-62.8617599,15z</a> ' +
            'and other HTML tags',
            
            
        })
      });
    
    //Fecha a futuro
const countdownDate = new Date('Oct 09 2022 18:43:30 GMT-0300').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);