import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Stock(props) {
    const apiKey = "d56209c71926d6b3d9855fd5868d6bf9"
    const params = useParams();
    const symbol = params.symbol;
    const URL = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;
    const [stock, setStock] = useState({});

    const getStock = async() => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setStock(data[0]);
        }   catch(err) {
            console.error(err)
        }
    };

    useEffect(() => {
        getStock()
    }, []);

    const loaded = () => {
        return (
            <main>
                <div className="container">
                    <h1>{stock.name}</h1>
                    <h1>USD {stock.price}</h1>
                    <h2>Change: {stock.change.toFixed(2)}</h2>
                    <h2>Daily High: {stock.dayHigh}</h2>
                    <h2>Daily Low: {stock.dayLow}</h2>
                    <h2>Volume: {stock.volume}</h2>
                </div>
            </main>
        )
    };

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    };

    return (
        stock && stock.price ? loaded() : loading()
    );
};