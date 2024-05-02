import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";
import "./styles/style.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
};

export default App;
