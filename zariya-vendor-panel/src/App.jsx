import { BrowserRouter } from "react-router-dom";
import VendorRoutes from "./routes/VendorRoutes";

function App() {
  return (
    <BrowserRouter>
      <VendorRoutes />
    </BrowserRouter>
  );
}

export default App;