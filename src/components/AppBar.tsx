import { BitzIcon } from "./icons";
import Label from "./ui/Label";
import Version from "./Version";

const AppBar = () => {
  return (
    <div className="flex items-center p-6">
      <Label
        leftIcon={<BitzIcon />}
        text="Bitz"
        className="font-serif text-6xl font-bold"
      />
      <Version versionNumber="1.1" />
    </div>
  );
};

export default AppBar;
