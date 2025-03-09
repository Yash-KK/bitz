import { useState } from "react";
import Label from "./ui/Label";
import { generateMnemonic } from "bip39";
import SeedPhrase from "./SeedPhrase";
import Button from "./ui/Button";

const WalletGenerator = () => {
  //   const [mnemonic, setMnemonic] = useState<string>(() => {
  //     return localStorage.getItem("mnemonic") || "";
  //   });
  const [mnemonic, setMnemonic] = useState<string>("");
  //   useEffect(() => {
  //     if (mnemonic) {
  //       localStorage.setItem("mnemonic", mnemonic);
  //     }
  //   }, [mnemonic]);

  return (
    <div className="flex flex-col">
      {!mnemonic ? (
        <>
          <Label
            text="Secret Recovery Phrase"
            className="text-white font-serif text-5xl"
          />
          <Label
            text="Save these words in a safe place."
            className="pb-1 text-gray-500 text-xl"
          />
          <div className="flex items-center mt-2 space-x-4">
            <input
              className="flex-1 p-3 rounded-sm border text-gray-200"
              placeholder="Enter your secret phrase (or leave it blank to generate)"
              type="text"
            />
            <Button
              onClick={() => {
                const newMnemonic = generateMnemonic();
                setMnemonic(newMnemonic);
              }}
              text="Generate Wallet"
              className="bg-white font-medium text-black hover:bg-gray-200 rounded-sm p-3"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col">
          <SeedPhrase mnemonic={mnemonic} />
          <div className="flex justify-between mt-5">
            <Label text="Solana Wallet" className="text-4xl" />
            <div>
              <Button
                onClick={() => {
                  alert("hello");
                }}
                text="Add Wallet"
                className="bg-white font-medium text-black hover:bg-gray-200 rounded-sm mr-2 p-3"
              />
              <Button
                onClick={() => {
                  setMnemonic("");
                }}
                text="Clear Wallets"
                className="bg-red-800 font-bold text-white hover:bg-red-900 rounded-sm p-3"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletGenerator;
