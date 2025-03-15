import React, { useEffect } from "react";
import "./roadmap.css"; // Ensure you create this CSS file

const Roadmap = () => {
    useEffect(() => {
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
    }, []);

    return (
        <div className="roadmap-container">
            <h2 className="roadmap-title">Roadmap</h2>
            <img src="images/road.png" alt="Roadmap" className="roadmap-img" />

            <div className="milestone fade-in">
                <h3>Mile Stone 1 - $1 Million Market Cap</h3>
                <img src="images/F-ai.jpg" alt="Trading Bot" />
                <p>96.88% Profit Rate Trading Bot</p>
                <a href="milestone1.html" className="button">Click here for access</a>
            </div>

            <div className="milestone fade-in">
                <h3>Mile Stone 2 - $2 Million Market Cap</h3>
                <img src="images/G-airdrop.jpg" alt="USDC Airdrop" />
                <p>Free USDC AIR DROP at 2 Million Market Cap</p>
                <a href="milestone2.html" className="button">Click for more information</a>
            </div>

            <div className="milestone fade-in">
                <h3>Mile Stone 3 - $3 Million Market Cap</h3>
                <img src="images/B-bot.jpg" alt="Virtual Agent" />
                <p>I am a Virtual Agent that can predict future stock/crypto prices. As an LLVM Model, I need to learn first, so buy Bank Eruptcity Coin and use the 96.88% trading strategy bot so I can learn.</p>
            </div>
        </div>
    );
};

export default Roadmap;
