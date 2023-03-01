import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductHandler from '../Handler/ProductHandler';
import { Link } from 'react-router-dom';
// import StockCounter from '../components/StockCounter'
/* import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import '../components/DetailView.css' */


export default function DetailedView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  library.add(faWhatsapp);

  useEffect(() => {
    async function fetchProduct() {
      const productData = await ProductHandler.loadHouse(id);
      setProduct(productData);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, price, img, category, productStatus, unit, description, date } = product;

  return (
    <>
    <div id="container">
      <img src={img} alt={name} />
      <div >
        <p>{date}</p>
        <h2>{name}</h2>
        <h3>Categoría del product: {category}</h3>
        <p>Estado del Producto: {productStatus}</p>
        {/* <p><StockCounter /></p> */}
        <p>{description}</p>
        <h3>{price} €</h3>
      </div>
      <div className="line"></div>
      <div id="checkbox">
      <div className="line"></div>
      <div>
{/*       <a href="https://api.whatsapp.com/send?phone=+34670036365" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-whatsapp"></i>
      Contactar con el dueño por WhatsApp
      </a> */}
      </div>
      <Link to="/dashboard"><input id="return" type="button" value="VOLVER" /></Link>
    </div>
    </div>
  </>
  );
}