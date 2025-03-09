# Bitz

Bitz is a comprehensive blockchain wallet that allows users to interact with Solana blockchain seamlessly. With this wallet, users can generate a mnemonic seed phrase and create multiple wallets or import existing wallet.

## Features

- **Mnemonic Generation:** Generate a 12-word mnemonic seed phrase for secure wallet creation.
- **Clean UI:** A clean and responsive interface designed for ease of use.

## Tech Stack

- **Frontend:** React, TypeScript
- **Blockchain Interaction:** @solana/web3.js (for Solana)
- **Styling:** Tailwind

## Installation

**Clone the repository:**
   ```bash
   git clone https://github.com/Yash-KK/bitz.git
   cd bitz
  ```
### Install dependencies:

```bash
npm install
```

## Run the project

```bash
npm run dev
```

### Usage

- **Generate a Seed Phrase**: Click the "Generate Seed Phrase" button to create a new mnemonic.
- **Create a Wallet**: Use the generated seed phrase to create a new wallet.
- **Check Balance**: Select a wallet to view its balance in ETH or SOL.
- **Send Transactions**: Click "Send" to open the transaction form, enter the recipient's address, and the amount to send.

### Future Enhancements

- **Transaction History**: Display a list of past transactions for each wallet.
- **Multi-Wallet Support:** Create multiple wallets under a single mnemonic, each with its own address and private key.
- **Wallet Import**: Import existing wallets using private keys or JSON files.
- **Check Balance**: Select a wallet to view its balance in ETH or SOL.
- **Send Transactions**: Click "Send" to open the transaction form, enter the recipient's address, and the amount to send.



