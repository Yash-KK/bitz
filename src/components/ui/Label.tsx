type LabepProps = {
  leftIcon?: React.ReactNode;
  text: string;
  className?: string;
};
const Label: React.FC<LabepProps> = ({ text, leftIcon, className }) => {
  return (
    <label className={`flex items-center font-bold text-gray-200 ${className}`}>
      {leftIcon} {text}
    </label>
  );
};

export default Label;
