const weddingDate = new Date("2026-07-20T18:00:00");
const countdown = document.getElementById("countdown");
const enterBtn = document.getElementById("enterBtn");

function updateCountdown() {
  const now = new Date();
  const difference = weddingDate - now;

  if (difference <= 0) {
    countdown.style.display = "none";
    enterBtn.style.display = "inline-block";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  countdown.innerHTML = `
    ${days} D &nbsp; • &nbsp;
    ${hours} H &nbsp; • &nbsp;
    ${minutes} M &nbsp; • &nbsp;
    ${seconds} S
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();