
type VersionProps = {
    versionNumber: string
}

const Version: React.FC<VersionProps> = ({versionNumber}) => {
  return (
    <span className="text-sm ml-3 font-semibold text-white bg-black border py-1 px-3 rounded-full">
      v{versionNumber}
    </span>
  );
};

export default Version;
