# NFT Claim DApp (Sepolia Eth)

A modern Web3 frontend that allows users to **connect a wallet, pay ETH, and claim an ERC-721 NFT** from a deployed smart contract on Ethereum Sepolia.

## Live Demo (Recommended to **Use Burner Wallet** for Test)

👉 https://nft-airdrop-claim-dapp-seoplia.vercel.app/


---

This repository contains **only the frontend (dApp)**.  
Smart contracts are maintained in a separate repository.
Smart contract source code:  
👉 https://github.com/TheinSoe137/NFT-airdrop-smartcontract

---

## Connected Smart Contract

- **Network:** Ethereum Sepolia
- **Contract Address:**  
  `0x1B6703d190624E6473B6f89b7bfAFfF666E042fC`
- **Standard:** ERC-721
- **Verification:** Verified on Etherscan


---

## User Flow

1. User connects Wallet
2. User clicks **Pay & Claim**
3. 0.001 ETH is sent to the contract
4. Contract transfers a pre-minted NFT to the user
5. UI displays transaction status and success modal

---

## Features

- RaindowKit wallet connection
- ETH payment (0.001 ETH)
- NFT claim via on-chain contract call
- Transaction lifecycle handling (pending / success / failure)
- Success modal with Etherscan link
- Dark, Web3-native UI (glassmorphism)
- Subtle animations
- Mobile responsive
- Hydration-safe Next.js rendering
- No backend required

---

## Tech Stack

### Frontend
- **Next.js** (App Router)
- **wagmi + viem**
- **Tailwind CSS**
- **TypeScript**

### Blockchain
- Ethereum Sepolia Testnet

---

## My socials 
https://x.com/theinsoe_dev
theinsoe.dev@gmail.com
discord : @theinsoe_dev

