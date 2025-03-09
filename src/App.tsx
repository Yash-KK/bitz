import Label from "./components/Label";

function App() {
  return (
    <div className="flex justify-between mx-80 bg-black">
      <div className="p-4">
        <Label />
      </div>
      <Label />
    </div>
  );
}

export default App;
