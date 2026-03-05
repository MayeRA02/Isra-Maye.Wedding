document.addEventListener('DOMContentLoaded', () => {
  const weddingDate = new Date("2026-07-20T18:00:00");
  const countdown = document.getElementById("countdown");
  const enterBtn = document.getElementById("enterBtn");
  const flares = document.querySelector('.light-flares');

  // Destellos
 function randomFlares() {
  const flare = document.createElement('div');
  flare.style.position = 'absolute';
  flare.style.width = `${Math.random()*10+5}px`;
  flare.style.height = flare.style.width;
  flare.style.borderRadius = '50%';
  flare.style.background = 'rgba(255, 255, 220, 0.6)';
  flare.style.top = `${Math.random()*100}%`;
  flare.style.left = `${Math.random()*100}%`;
  flare.style.pointerEvents = 'none';
  flare.style.filter = 'blur(3px)';
  flares.appendChild(flare);

  // Limitar máximo 30 destellos
  if(flares.children.length > 30) {
    flares.removeChild(flares.firstChild);
  }

  setTimeout(() => flare.remove(), 3000 + Math.random()*2000);
}

enterBtn.addEventListener('click', () => {
  const audio = document.getElementById('bg-music');
  if (audio.paused) audio.play().catch(()=>{/* manejo si autoplay bloqueado */});
  // aquí puedes redirigir a la ceremonia o mostrar contenido
});

  // Countdown
  function updateCountdown() {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
      countdown.style.display = "none";
      enterBtn.style.display = "inline-block";
      return;
    }

document.getElementById('enterBtn').addEventListener('click', () => {
  document.getElementById('bg-music').play();
});
  const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;
  if (diff <= 0) {
    document.querySelector('.countdown').style.display = 'none';
    enterBtn.style.display = 'inline-block';
    enterBtn.focus();
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const pad = n => n.toString().padStart(2,'0');
  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

  setInterval(updateCountdown, 1000);
  updateCountdown();

document.addEventListener('DOMContentLoaded', () => {
  // Fecha del evento
  const weddingDate = new Date("2026-07-20T18:00:00");

  // Elementos del DOM
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const countdownContainer = document.querySelector('.countdown');
  const enterBtn = document.getElementById('enterBtn');
  const audio = document.getElementById('bg-music');
  const flaresContainer = document.querySelector('.light-flares');

  // Mostrar/ocultar botón y reproducir audio con interacción del usuario
  enterBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {
        // Si el autoplay está bloqueado, no romper la experiencia
      });
    }
    // Aquí puedes añadir la lógica para "entrar" a la ceremonia (mostrar video, redirigir, etc.)
  });

  // Función para rellenar con ceros
  const pad = n => n.toString().padStart(2, '0');

  // Actualiza el contador en los spans individuales
  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      // Evento iniciado
      countdownContainer.style.display = 'none';
      enterBtn.style.display = 'inline-block';
      enterBtn.focus();
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  // Llamada inicial y temporizador
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Opcional: detener interval si la pestaña está oculta para ahorrar CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(countdownInterval);
    } else {
      // Reiniciar el intervalo y actualizar inmediatamente
      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
  });

  // Ejemplo simple de destellos si no tienes light-flares.js o quieres fallback
  // (Si ya tienes light-flares.js, puedes eliminar este bloque)
  if (flaresContainer && flaresContainer.children.length === 0) {
    setInterval(() => {
      const flare = document.createElement('div');
      const size = Math.random() * 12 + 6;
      Object.assign(flare.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: 'rgba(255, 255, 220, 0.6)',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        filter: 'blur(3px)',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        opacity: '0.9'
      });
      flaresContainer.appendChild(flare);
      // Limitar cantidad
      if (flaresContainer.children.length > 30) {
        flaresContainer.removeChild(flaresContainer.firstChild);
      }
      setTimeout(() => flare.remove(), 3000 + Math.random() * 2000);
    }, 600);
  }
});