import { useNavigate } from "react-router-dom";
import MapComponent from "../components/Map";

function SuperMarketList() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    }

    const handleClick2 = () => {
        navigate("/product-list");
    }

    const handleClick3 = () => {
        navigate("/market-list");
    }

    const handleClick4 = () => {
        navigate("/rss");
      }

    return (
        <>
            <div className="container">
                <div className="navigation">
                    <button onClick={handleClick}>Inicio</button>
                    <button onClick={handleClick3}>Supermercados</button>
                    <button onClick={handleClick2}>Productos</button>
                    <button onClick={handleClick4}>RSS</button>
                </div>
            </div>
            <MapComponent />

        </>
    );
}

export default SuperMarketList;