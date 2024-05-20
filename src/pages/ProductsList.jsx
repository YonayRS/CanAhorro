import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productsService from "../service/firebase/products.service.js";

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

    const handleClick4 = () => {
        window.location.href = "/rss.xml";
    }

    return (
        <>
            <div className="container">
                <div className="navigation">
                    <button onClick={handleClick2}>Inicio</button>
                    <button onClick={handleClick}>Supermercados</button>
                    <button onClick={handleClick3}>Productos</button>
                    <button onClick={handleClick4}>RSS</button>
                </div>
            </div>
            <Products />
        </>
    );
}

function Products() {
    const [products, setProducts] = useState([]);

    const getAllProducts = () => {
        productsService.getAllProducts().then((items) => {
            let auxProducts = [];
            items.forEach((item) => {
                const key = item.key;
                const data = item.val();

                auxProducts.push({
                    key: key,
                    ...data,
                    selected: false
                })
            })
            setProducts([...auxProducts]);
        });
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    // Función para manejar el clic en la descripción de un producto
    const handleDescriptionClick = (index) => {
        setProducts(prevProducts => {
            return prevProducts.map((product, i) => {
                if (i === index) {
                    // Invierte el estado de selección del producto clickeado
                    return { ...product, selected: !product.selected };
                } else if (product.selected && i !== index) {
                    // Si otro producto estaba seleccionado, lo deja así
                    return { ...product, selected: true };
                } else {
                    // Deselecciona los productos que no fueron clickeados
                    return { ...product, selected: false };
                }
            });
        });
    };

    return (
        <>

            <img src="images/comparando.jpg" alt="Comparando" className="absolute" />

            <div className="product-buttons-container">
                {products.map((p, index) => (
                    <div key={index} className="product-button-wrapper">
                        <button className="product-button" onClick={() => handleDescriptionClick(index)}>{p.Supermarket}</button>
                        <div className={`product-info ${p.selected ? 'active' : ''}`}>
                            <p><strong>Categoría:</strong> {p.Category}</p>
                            <p><strong>Marca:</strong> {p.Brand}</p>
                            <p><strong>Formato:</strong> {p.Format}</p>
                            <p><strong>Price:</strong> {p.Price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
