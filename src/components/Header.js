import { Link } from "react-router-dom"
import Nav from "./Nav";

export default function Header() {
    return (
        <div className="header">
            <Link to="/"><h1>iStocks</h1></Link>
            <Nav />
        </div>
    )
};