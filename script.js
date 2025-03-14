document.addEventListener("DOMContentLoaded", () => {
  // RAINING MONEY
  const moneyContainer = document.getElementById("money-rain-container");
  if (moneyContainer) {
    for (let i = 0; i < 20; i++) {
      const bill = document.createElement("img");
      bill.src = "images/money.png"; // your money.png
      bill.classList.add("falling-bill");
      // Random horizontal position
      bill.style.left = Math.random() * 100 + "vw";
      // Random delays + durations
      bill.style.animationDelay = Math.random() * 5 + "s";
      bill.style.animationDuration = 5 + Math.random() * 5 + "s";
      moneyContainer.appendChild(bill);
    }
  }

  // COIN ANIMATION (Milestone #2)
  const coinContainer = document.getElementById("coin-animation-container");
  if (coinContainer) {
    for (let i = 0; i < 10; i++) {
      const coin = document.createElement("img");
      coin.src = "images/coin.png"; // your coin.png
      coin.classList.add("falling-coin");
      coin.style.left = Math.random() * 100 + "vw";
      coin.style.animationDelay = Math.random() * 5 + "s";
      coin.style.animationDuration = 3 + Math.random() * 5 + "s";
      coinContainer.appendChild(coin);
    }
  }
});

// Add the CSS animations below:

.falling-bill {
  position: fixed;
  top: -100px;
  width: 60px; /* Adjust size as needed */
  height: auto;
  animation-name: billFall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes billFall {
  0% {
    transform: rotate(0deg) translateY(-100px);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg) translateY(110vh);
    opacity: 0.8;
  }
}

.falling-coin {
  position: absolute;
  top: -100px;
  width: 50px; /* Adjust as needed */
  height: auto;
  animation-name: coinFall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes coinFall {
  0% {
    transform: rotateY(0deg) translateY(-100px);
    opacity: 1;
  }
  100% {
    transform: rotateY(720deg) translateY(110vh);
    opacity: 0.8;
  }
}
