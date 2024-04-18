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

    return (
        <>
            <div className="container">
                <div className="navigation">
                    <button onClick={handleClick}>Inicio</button>
                    <button onClick={handleClick2}>Supermercados</button>
                    <button onClick={handleClick2}>Productos</button>
                </div>
            </div>
            <p>Lista de Supermercados</p>
            <ul>
                <li>Lidl</li>
                <li>Aldi</li>
                <li>Carrefour</li>
                <li>Hacendado</li>
                <li>Dino</li>
            </ul>
            <MapComponent />

            <div className="social-icons">
                <img src="/images/redes-sociales/facebook.jpg" alt="Facebook" />
                <img src="/images/redes-sociales/instagram.jpg" alt="Instagram" />
                <img src="/images/redes-sociales/twitter.jpg" alt="Twitter" />
            </div>

        </>
    );
}

export default SuperMarketList;