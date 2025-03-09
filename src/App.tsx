import AppBar from "./components/AppBar";
import { Toaster } from "react-hot-toast";

import Footer from "./components/Footer";
import WalletGenerator from "./components/WalletGenerator";
function App() {
  return (
    <div className="flex flex-col h-dvh mx-80">
      <AppBar />
      <WalletGenerator />
      <Footer />
      <Toaster
        toastOptions={{
          duration: 1000,
        }}
        position="bottom-right"
        reverseOrder={false}
      />{" "}
    </div>
  );
}

export default App;
