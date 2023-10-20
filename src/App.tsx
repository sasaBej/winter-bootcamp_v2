import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { Footer } from "./pages/components/footer/Footer";
import { Header } from "./pages/components/header/Header";
import "./App.scss";
import { FormPage } from "./pages/formPage/FormPage";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
