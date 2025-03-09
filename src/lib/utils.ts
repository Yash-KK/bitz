import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

export const generateWallet = (mnemonic?: any, index: number = 0) => {
  const seedBuffer = mnemonicToSeedSync(mnemonic);
  const path = `m/44'/501'/${index}'/0'`;
  const derivedSeed = derivePath(path, seedBuffer.toString("hex")).key;

  const privateKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keypair = Keypair.fromSecretKey(privateKey);

  const privateKeyEncoded = bs58.encode(privateKey);
  const publicKeyEncoded = keypair.publicKey.toBase58();

  return { publicKey: publicKeyEncoded, privateKey: privateKeyEncoded };
};
