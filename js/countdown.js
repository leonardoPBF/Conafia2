const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.getElementById('mensaje')


// Define la fecha de finalización de la cuenta regresiva (año, mes (base 0), día, hora, minuto, segundo)
var countdownDate = new Date("Jun 17, 2024 00:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var countdownFunction = setInterval(function() {
    // Obtiene la fecha y hora actual   
    var now = new Date().getTime();

    // Calcula la distancia entre la fecha de finalización y la fecha y hora actual
    var distance = countdownDate - now;

    // Calcula el tiempo restante en días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);


    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownFunction);
        $finalMessage.textContent = "El evento ya esta en desarrollo";
        $days.textContent = "00";
        $hours.textContent = "00";
        $minutes.textContent = "00";
        $seconds.textContent = "00";
    }
}, 1000); // Actualiza cada segundo