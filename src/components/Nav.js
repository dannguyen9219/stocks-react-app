import { Link } from "react-router-dom";


export default function Nav() {
    return (
        <div className="nav">
            <nav aria-label="Main Navigation" role="navigation">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/stocks">Stocks</Link></li>
                </ul>
            </nav>
        </div>
    )
};