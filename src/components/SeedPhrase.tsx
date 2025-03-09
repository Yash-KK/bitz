import Label from "./ui/Label";

const SeedPhrase = ({ mnemonic }: { mnemonic: string }) => {
  const seedPhrase = mnemonic.split(" ");

  const handleCopy = () => {
    navigator.clipboard.writeText(mnemonic);
  };

  return (
    <details className="bg-black border border-gray-800 shadow-2xl shadow-gray-800 text-white p-6 rounded-md w-full">
      <summary className="cursor-pointer text-3xl font-semibold hover:text-gray-300">
        Your Secret Phrase
      </summary>

      <div
        onClick={handleCopy}
        className="mt-5 grid grid-cols-3 gap-3 text-center font-mono"
      >
        {seedPhrase.map((word, index) => (
          <div
            key={index}
            className="p-3 bg-gray-900 rounded-md hover:bg-gray-700 transition-colors"
          >
            <span className="font-medium text-gray-400">{index + 1}.</span>{" "}
            <span className="font-semibold">{word}</span>
          </div>
        ))}

        <Label text="click anywhere to copy" className="text-sm mt-2" />
      </div>
    </details>
  );
};

export default SeedPhrase;
