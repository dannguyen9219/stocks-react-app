import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Dashboard";
import Stock from "./pages/Stock";

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/stocks" element={<Stocks/>}></Route>
                <Route path="/stocks/:symbol" element={<Stock/>}></Route>
            </Routes>
        </div>
    );
};