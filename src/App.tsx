import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import WalletGenerator from "./components/WalletGenerator";
function App() {
  return (
    <div className="flex flex-col h-dvh mx-80">
      <AppBar />
      <WalletGenerator />
      <Footer />
    </div>
  );
}

export default App;
