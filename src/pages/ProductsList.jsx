import { useNavigate } from "react-router-dom";

const myArray = ['Arroz', 'Huevos', 'Pan', 'Queso batido', 'Cereales', 'Barbacoa', 'Miel', 'Mermelada de fresa'];

export default function ProductsList() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/market-list");
    }

    const handleClick2 = () => {
        navigate("/home");
    }

    const handleClick3 = () => {
        navigate("/product-list");
    }

    return (
        <>
            <div className="container">
                <div className="navigation">
                    <button onClick={handleClick2}>Inicio</button>
                    <button onClick={handleClick}>Supermercados</button>
                    <button onClick={handleClick3}>Productos</button>
                </div>
            </div>
            {myArray.map((item, index) => { return <p key={index}>{item}</p> })}
        </>

    );
}