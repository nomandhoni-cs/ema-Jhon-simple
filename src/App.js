import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    token: "",
    password: "",
  })
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route path="/review" element={<Review />} />
            <Route path="/manage" element={<Inventory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:productKey" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
