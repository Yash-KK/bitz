import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Label from "./ui/Label";
import Toast from "./ui/Toast";

const SeedPhrase = ({ mnemonic }: { mnemonic: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const seedPhrase = mnemonic.split(" ");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(mnemonic);
    Toast("copied to clipboard")
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black border border-gray-800 shadow-2xl shadow-gray-800 text-white p-6 rounded-md w-full"
    >
      <motion.div
        className="cursor-pointer text-3xl font-semibold flex justify-between items-center hover:text-gray-300"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        Your Secret Phrase
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-2 text-gray-500"
        >
          ▼
        </motion.span>
      </motion.div>

      <motion.div
        ref={contentRef}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <motion.div
          onClick={handleCopy}
          className="mt-5 grid grid-cols-3 gap-3 text-center font-mono"
        >
          {seedPhrase.map((word, index) => (
            <motion.div
              key={index}
              className="p-3 bg-gray-900 rounded-md hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileTap={{ scale: 1.1 }}
            >
              <span className="font-medium text-gray-400">{index + 1}.</span>{" "}
              <span className="font-semibold">{word}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Label text="Click anywhere to copy" className="text-sm mt-2" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SeedPhrase;
