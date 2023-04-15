import Next from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Stylesheet from "../styles/Home.module.css";
import { BigNumber } from "@ethersproject/bignumber";
import { CoinbaseWallet } from "@thirdweb-dev/wallets";
import { ethers } from "ethers";
import React, { useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { ThirdwebProvider } from "@thirdweb-dev/react"
import useContract from "@thirdweb-dev/react"

const BurnPage = () => {
  const [amount, setAmount] = useState("");

  const sdk = new ThirdwebSDK("binance");



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const walletConnection = {
      ThirdWebProvider: CoinbaseWallet,
      chainId: 56,
    };

    const wallet = new CoinbaseWallet();
    await wallet.connect();

    const signer = await wallet.getSigner();

    const contract = await sdk.getContract("0x5c12C812794B874fe4Fdea9A4960df599C89b8E5");

    const value = BigNumber.from(amount.toString());
    const data = await contract.erc20.burn(value.toString());

    // Display success message to user
    alert("Tokens burned successfully");
  };

  return (
    <div>
      <h1>Burn Tokens</h1>
      <ThirdwebProvider activeChain="binance" />
      <form onSubmit={handleSubmit}>
        <label>
          Amount to Burn:
          <input
            type="text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <button type="submit">Burn</button>
      </form>
    </div>
  );
};

export default BurnPage;
