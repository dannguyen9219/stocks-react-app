import { Link } from "react-router-dom";
import stocksData from "../data";

export default function Stocks(props) {

    return (
        <main>
            <h1>Stocks Page</h1>
                <ul>
                    {
                        stocksData.map((stock, idx) => {
                            const { name, symbol } = stock;
                            return(
                                    <li key={idx}><Link to={`/stocks/${symbol}`}>{name}, {symbol}</Link></li>
                            )
                        })
                    }
                </ul>
        </main>
    );
};