import React, { useState } from "react";

function Milestone2() {
  const [walletAddress, setWalletAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:apexhomebuilderllc@gmail.com?subject=USDC Airdrop Request&body=ETH Wallet Address: ${walletAddress}`;
  };

  return (
    <div className="milestone-page" style={{ backgroundImage: "url('/images/s.jpg')", backgroundSize: "cover", minHeight: "100vh", textAlign: "center" }}>
      <h1>USDC AIRDROP FOR HOLDERS</h1>
      <p>
        ANYONE WHO HOLDS THIS COIN DURING THE SNAPSHOT WHEN WE REACH $2,000,000 MARKET CAP WILL RECEIVE AN AIRDROP OF 1/100000 FOR EACH BANK ERUPTCITY YOU HOLD.
      </p>

      <form onSubmit={handleSubmit} style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "8px", display: "inline-block" }}>
        <label>Add ETH Wallet Where You Want Your USDC Airdrop:</label>
        <input
          type="text"
          placeholder="Enter your ETH Wallet"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <script>
        {`
          function createCoinAnimation() {
              for (let i = 0; i < 15; i++) {
                  let coin = document.createElement("img");
                  coin.src = "/images/coin.png";
                  coin.className = "coin-fall";
                  coin.style.left = Math.random() * 100 + "vw";
                  coin.style.animationDuration = Math.random() * 3 + 2 + "s";
                  document.body.appendChild(coin);
                  setTimeout(() => { coin.remove(); }, 5000);
              }
          }
          setInterval(createCoinAnimation, 1000);
        `}
      </script>
    </div>
  );
}

export default Milestone2;
