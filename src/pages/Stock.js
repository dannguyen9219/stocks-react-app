import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import stocksData from "../data";


export default function Stock(props) {
    const params = useParams();
    const symbol = params.symbol;
    const [stock, setStock] = useState({});
    
    const getStock = async () => {
        try {
            const data = await stocksData.find(s => s.symbol === symbol)
            setStock(data)
        }   catch(err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getStock()
    }, []);


    return (
        <main>
            <div>
                <h1>{stock.name}</h1>
                <h2>{stock.lastPrice}</h2>
            </div>
        </main>
    );

    // const loaded = () => {
    //     return (
    //         <main>
    //             <div>
    //                 <h1>{stock.name}</h1>
    //                 <h1>{stock.lastPrice}</h1>
    //             </div>
    //         </main>
    //     )
    // };

    // const loading = () => {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // };


    // return (
    //     stock && stock.lastPrice ? loaded() : loading()
    // )
};