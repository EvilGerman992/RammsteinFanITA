// Funzione per ottenere l'ora attuale formattata come stringa
function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    // Aggiunge uno zero iniziale se i numeri sono a singola cifra
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
  
    var currentTime = hours + ":" + minutes + ":" + seconds;
    return currentTime;
  }
  
  // Funzione per aggiornare l'ora attuale sulla pagina
  function updateCurrentTime() {
    var currentTimeElement = document.getElementById("current-time");
    var currentTime = getCurrentTime();
    currentTimeElement.textContent = currentTime;
  }
  
  // Aggiorna l'ora attuale ogni secondo
  setInterval(updateCurrentTime, 1000);
  