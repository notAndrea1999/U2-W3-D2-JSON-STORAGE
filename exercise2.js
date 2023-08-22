let timer = 0;

window.addEventListener("DOMContentLoaded", (event) => {
  time();
});

const time = () => {
  const p = document.getElementById("timer");
  const initializeTimer = setInterval(function () {
    const prevTimer = sessionStorage.getItem("timer");
    if (prevTimer) {
      timer = prevTimer;
    }
    p.innerText = timer;
    timer++;
    sessionStorage.setItem("timer", timer);
  }, 1000);
};
