import { useState } from "react";
import { motion } from "framer-motion";
import Label from "./Label";
import { Eye, EyeOff } from "lucide-react";

type CardProps = {
  walletNo: number;
  publicKey: string;
  privateKey: string;
};

const Card: React.FC<CardProps> = ({ walletNo, publicKey, privateKey }) => {
  const [isPrivateKeyVisible, setIsPrivateKeyVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col my-6 p-4 shadow-2xl shadow-gray-700 border text-white border-gray-800 rounded-lg"
    >
      <Label
        text={`Wallet ${walletNo + 1}`}
        className="text-3xl p-2 font-bold"
      />
      <div className="mt-2 p-2 bg-gray-900 rounded">
        <div className="p-2">
          <Label
            text="Public Key"
            className="p-1 text-2xl text-gray-200 font-bold"
          />
          <Label
            text={publicKey}
            className="p-1 text-xl text-gray-300 font-medium"
          />
        </div>
        <div className="p-2">
          <Label
            text="Private Key"
            className="p-1 text-2xl text-gray-200 font-bold"
          />
          <div className="flex items-center">
            <motion.span
              key={isPrivateKeyVisible ? "visible" : "hidden"}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-1 w-dvh text-xl text-gray-300 font-medium"
            >
              {isPrivateKeyVisible
                ? privateKey
                : "**************************************************************"}
            </motion.span>
            <motion.button
              className="ml-2 text-gray-400 hover:text-white transition"
              onClick={() => setIsPrivateKeyVisible((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              {isPrivateKeyVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
