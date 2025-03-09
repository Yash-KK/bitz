import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Label from "./ui/Label";
import { generateMnemonic, validateMnemonic } from "bip39";
import SeedPhrase from "./SeedPhrase";
import { generateWallet } from "../lib/utils";
import Card from "./ui/Card";
import Toast from "./ui/Toast";

type Wallet = {
  publicKey: string;
  privateKey: string;
};

const WalletGenerator = () => {
  const [mnemonic, setMnemonic] = useState<string>("");
  const [wallets, setWallets] = useState<Wallet[]>([]);

  const handleGenerateWallet = () => {
    const newMnemonic = generateMnemonic();
    setMnemonic(newMnemonic);
    const wallet = generateWallet(newMnemonic);
    Toast("wallet generated");
    setWallets((prevWallets) => [...prevWallets, wallet]);
  };

  const handleAddWallet = () => {
    if (mnemonic && validateMnemonic(mnemonic)) {
      const newWallet = generateWallet(mnemonic, wallets.length);
      Toast("Wallet added");

      setWallets((prevWallets) => [...prevWallets, newWallet]);
    } else {
      Toast("Invalid Mnemonic");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      {wallets.length == 0 ? (
        <>
          <Label
            text="Secret Recovery Phrase"
            className="text-white font-serif text-5xl font-bold"
          />
          <Label
            text="Save these words in a safe place."
            className="pb-1 text-gray-500 text-xl font-bold"
          />
          <motion.div
            className="flex items-center mt-2 space-x-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              className="flex-1 p-3 rounded-sm border text-gray-200"
              placeholder="Enter your secret phrase (or leave it blank to generate)"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMnemonic(e.target.value);
              }}
              type="text"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={mnemonic ? handleAddWallet : handleGenerateWallet}
              className="bg-white font-medium text-black hover:bg-gray-200 rounded-lg p-3"
            >
              {mnemonic ? "Add Wallet" : "Generate Wallet"}
            </motion.button>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <SeedPhrase mnemonic={mnemonic} />
          <div className="flex justify-between mt-5">
            <Label text="Solana Wallet" className="text-4xl font-bold" />
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddWallet}
                className="bg-white font-medium text-black hover:bg-gray-200 rounded-lg mr-2 p-3"
              >
                Add Wallet
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setMnemonic("");
                  setWallets([]);
                  Toast("wallets cleared");
                }}
                className="bg-red-800 font-bold text-white hover:bg-red-900 rounded-lg p-3"
              >
                Clear Wallets
              </motion.button>
            </div>
          </div>
          <AnimatePresence>
            {wallets.map((wallet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  walletNo={index}
                  publicKey={wallet.publicKey}
                  privateKey={wallet.privateKey}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WalletGenerator;
