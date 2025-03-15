// Falling money animation script
function createMoneyAnimation() {
    for (let i = 0; i < 15; i++) {
        let money = document.createElement("img");
        money.src = "images/money.png";
        money.className = "money";
        money.style.left = Math.random() * 100 + "vw";
        money.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(money);
        setTimeout(() => { money.remove(); }, 5000);
    }
}
setInterval(createMoneyAnimation, 1000);

// Smooth fade-in effect for milestones
window.addEventListener("scroll", function() {
    let milestones = document.querySelectorAll(".milestone");
    milestones.forEach(milestone => {
        let position = milestone.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
            milestone.classList.add("fade-in");
        }
    });
});
