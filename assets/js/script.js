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
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

   const pad = n => n.toString().padStart(2,'0');
   countdown.innerHTML = `
  ${pad(days)} D &nbsp; • &nbsp;
  ${pad(hours)} H &nbsp; • &nbsp;
  ${pad(minutes)} M &nbsp; • &nbsp;
  ${pad(seconds)} S
`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});