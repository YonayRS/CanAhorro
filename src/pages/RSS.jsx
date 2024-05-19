import { useNavigate } from "react-router-dom";

function RSS() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/market-list");
    }

    const handleClick2 = () => {
        navigate("/product-list");
    }

    const handleClick3 = () => {
        navigate("/home");
    }

    const handleClick4 = () => {
        navigate("/rss");
    }

    return (
        <>
            <center>
                <p className="rss-link"><a href="https://www.lidl.es/">https://www.lidl.es/</a></p>
                <p className="rss-link"><a href="https://www.aldi.es/">https://www.aldi.es/</a></p>
                <p className="rss-link"><a href="https://www.carrefour.es/">https://www.carrefour.es/</a></p>
                <p className="rss-link"><a href="https://www.mercadona.es/">https://www.mercadona.es/</a></p>
                <p className="rss-link"><a href="https://www.hiperdino.es/">https://www.hiperdino.es/</a></p>
            </center>
            <div className="container">
                <div className="navigation">
                    <button onClick={handleClick3}>Inicio</button>
                    <button onClick={handleClick}>Supermercados</button>
                    <button onClick={handleClick2}>Productos</button>
                    <button onClick={handleClick4}>RSS</button>
                </div>
            </div>
        </>
    );
}

export default RSS;
