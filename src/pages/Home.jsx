import { useNavigate } from "react-router-dom";


const services = [
  { id: 1, name: "Buscar", description: "Encuetra el producto", image: "/images/funciones/funcion_1.png" },
  { id: 2, name: "Comparar", description: "¿Más barato? ¿Más caro?", image: "/images/funciones/funcion_2.png" },
  // Agrega más servicios según sea necesario
];

const benefits = [
  { id: 1, name: "Ahorrar", description: "Sin perder tiempo o dinero", image: "/images/beneficios/ahorrar.png" },
  // Agrega más beneficios según sea necesario
];

const rewards = [
  { id: 1, name: "Colaborar", description: "Ayuda a actualizar la información y se te recompensa", image: "/images/recompensas/colaborar.png" },
  // Agrega más recompensas según sea necesario
];



const products = [
  { id: 1, name: "Productos cárnicos", description: "Carnes", image: "/images/información/descripcion-1.jpg" },
  { id: 2, name: "Cereales", description: "Derivados de granos", image: "/images/información/descripcion-2.jpg" },
  { id: 3, name: "Productos de origen animal", description: "Derivados de animales", image: "/images/información/descripcion-3.jpg" },
  { id: 3, name: "Salsas y Condimentos", description: "Realzan el sabor", image: "/images/información/descripcion-4.jpg" },
];


function Home() {
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

  return (
    <>
      <div className="container">
        <div className="navigation">
          <button onClick={handleClick3}>Inicio</button>
          <button onClick={handleClick}>Supermercados</button>
          <button onClick={handleClick2}>Productos</button>
        </div>
      </div>
      <div className="logos-wrapper">
        <div className="logos-image-wrapper">
          <img src="/images/supermercados/lidl-logo.jpg" alt="Lidl" />
          <img src="/images/supermercados/aldi-logo.jpg" alt="Aldi" />
          <img src="/images/supermercados/mercadona-logo.jpg" alt="Mercadona" />
          <img src="/images/supermercados/carrefour-logo.jpg" alt="Carrefour" />
          <img src="/images/supermercados/hiperdino-logo.jpg" alt="Hiperdino" />
        </div>
      </div>

      <div className="group">
        <div className="images-and-texts">
          {services.map(service => (
            <div key={service.id} style={{ flex: '0 0 auto', maxWidth: '300px' }} className="service-card">
              <img src={service.image} alt={service.name} style={{ width: '100%', height: '150px' }} />
              <div className="image-and-text">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="group">
        <div className="images-and-texts">
          {benefits.map(benefit => (
            <div key={benefit.id} style={{ flex: '0 0 auto', maxWidth: '300px' }} className="benefit-card">
              <img src={benefit.image} alt={benefit.name} style={{ width: '100%', height: '150px' }} />
              <h3>{benefit.name}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="group">
        <div className="images-and-texts">
          {rewards.map(reward => (
            <div key={reward.id} style={{ flex: '0 0 auto', maxWidth: '300px' }} className="reward-card">
              <img src={reward.image} alt={reward.name} style={{ width: '100%', height: '150px' }} />
              <h3>{reward.name}</h3>
              <p>{reward.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="description">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="social-icons">
        <img src="/images/redes-sociales/facebook.jpg" alt="Facebook" />
        <img src="/images/redes-sociales/instagram.jpg" alt="Instagram" />
        <img src="/images/redes-sociales/twitter.jpg" alt="Twitter" />
      </div>
    </>
  );
}

export default Home;
