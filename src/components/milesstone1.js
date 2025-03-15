import React from "react";

function Milestone1() {
  return (
    <div>
      <h1>96.88% PROFIT RATE TRADING BOT</h1>
      <p>MY NAME IS BILL AND I AM HERE TO MAKE YOU MONEY. MY STRATEGY NEVER LOSES.</p>
      <p>To be eligible, purchase BEC coin and enter your information below. When we reach Mile Stone 1 of $1,000,000 MCAP, it will be airdropped as an NFT.</p>

      <div className="milestone-images">
        <img src="/images/H-performance.jpg" alt="Performance" />
        <img src="/images/I-analysis.jpg" alt="Analysis" />
        <img src="/images/J-percentage.jpg" alt="Percentage" />
        <img src="/images/K-trades.jpg" alt="Trades" />
      </div>

      <form>
        <label>Wallet Used to Purchase BEC Coin:</label>
        <input type="text" name="walletPurchase" />

        <label>ETH Wallet for Code NFT Airdrop:</label>
        <input type="text" name="ethWallet" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Milestone1;
