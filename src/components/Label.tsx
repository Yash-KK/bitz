type LabepProps = {
  leftIcon?: React.ReactNode;
  text: string;
};
const Label: React.FC<LabepProps> = ({ text, leftIcon }) => {
  return (
    <label className="flex items-center font-bold text-6xl font-serif text-gray-200">
      {leftIcon} {text}
    </label>
  );
};

export default Label;
