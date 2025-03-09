import { BitzIcon } from "./icons";
import Label from "./Label";
import Version from "./Version";

const AppBar = () => {
  return (
    <div className="flex justify-between mx-80 bg-black">
    <div className="flex items-center p-6">
      <Label leftIcon={<BitzIcon />} text="Bitz" />
      <Version versionNumber="1.1" />
    </div>
    </div>
  );
};

export default AppBar;
