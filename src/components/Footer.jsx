import { useEffect } from "react";

function Footer() {

  const redirectToFacebook = () => {
    console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    return;
    window.location.href = "https://facebook.com"; // Abre Facebook en una nueva pestaña
  };

  const redirectToInstagram = () => {
    window.open("https://instagram.com", "_blank"); // Abre Instagram en una nueva pestaña
  };

  const redirectToTwitter = () => {
    window.open("https://twitter.com", "_blank"); // Abre Twitter en una nueva pestaña
  };

  useEffect(() => {
    console.log("adiossssssssssssssssssssss")
  },[])


  return (
    <footer>
      <span>HOla holita</span>
      <div className="social-icons" >
        <div  className="social-button">
          <a href="https://facebook.com"><img src="/images/redes-sociales/facebook.jpg" alt="Facebook" /></a>
        </div>
        <button onClick={redirectToInstagram} className="social-button">
          <img src="/images/instagram-icon.png" alt="Instagram" />
        </button>
        <button onClick={redirectToTwitter} className="social-button">
          <img src="/images/twitter-icon.png" alt="Twitter" />
        </button>
      </div>
      <p className="footer-text">© 2024 Canahorro. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;