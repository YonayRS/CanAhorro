import { useEffect } from "react";

function Footer() {

  const redirectToFacebook = () => {
    window.location.href = "https://facebook.com"; // Abre Facebook en una nueva pestaña
  };

  const redirectToInstagram = () => {
    window.open("https://instagram.com", "_blank"); // Abre Instagram en una nueva pestaña
  };

  const redirectToTwitter = () => {
    window.open("https://twitter.com", "_blank"); // Abre Twitter en una nueva pestaña
  };



  return (
    <footer>
      <div className="social-icons" >
        <div className="social-button">
          <a href="https://facebook.com"><img src="/images/social-networks/facebook.jpg" alt="Facebook" /></a>
          <a href="https://instagram.com"><img src="/images/social-networks/instagram.jpg" alt="Instagram" /></a>
          <a href="https://twitter.com"><img src="/images/social-networks/twitter.jpg" alt="Twitter" /></a>
        </div>
      </div>
      <p className="footer-text">© 2024 Canahorro. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;