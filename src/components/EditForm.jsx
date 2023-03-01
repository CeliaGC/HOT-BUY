import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useLoaderData } from "react-router-dom";
import ProductHandler from "../handler/ProductHandler";
import { Link } from "react-router-dom"
import './Form.css'
import '../../src/index.css'

const FormEditProduct = () => { 
        const { product } = useLoaderData();
        const id = product.id;
        const [name, setName] = useState(product.name);
        const [price, setPrice] = useState(product.price);
        const [img, setImg] = useState(product.img);
        const [category, setCategory] = useState(product.category);
        const [productStatus, setProductStatus] = useState(product.productStatus);
        const [unit, setUnit] = useState(product.unit);
        const [description, setDescription] = useState(product.description);

        const handleImgChange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImg(reader.result);
            };
        };
    
        const handleNameChange = (event) => {
            let nameInput = event.target.value;
            setName(nameInput);
        };
        const handlePriceChange = (event) => {
            let priceInput = event.target.value;
            setPrice(priceInput);
        };

        const handleCategoryChange = (event) => {
            let categoryInput = event.target.value;
            setCategory(categoryInput);
        };
        const handleProductStatusChange = (event) => {
            let productStatusInput = event.target.value;
            setProductStatus(productStatusInput);
        };
        const handleUnitChange = (event) => {
            let unitInput = event.target.value;
            setUnit(unitInput);
        };
        
        const handleDescriptionChange = (event) => {
            let descriptionInput = event.target.value;
            setDescription(descriptionInput);
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            let updatedProduct = {name, price, img, category, productStatus, unit, description};
            ProductHandler.updateProduct(id, updatedProduct);
        };

        const [showAlert, setShowAlert] = useState(false);

        const handleAgregarClick = () => {
            setShowAlert(true);
        }

        const handleAlertClose = () => {
            setShowAlert(false);
        }

    return (
        <>
        <h2>estás editando el producto:</h2>
            <p>{product.name}</p>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label for="productName">Nombre del producto</label>
                <input onChange={handleNameChange} id="productName" placeholder={product.name} />
                
                <label for="category">Categoría del producto</label>
                <select onChange={handleCategoryChange} id="category" name="category" placeholder={product.category}>
                <option value="selecciona">{product.category}</option>
                <option value="bebé">Bebé</option>
                <option value="moda">Moda</option>
                <option value="complementos">Complementos</option>
                <option value="mobiliario">Mobiliario</option>
                <option value="menaje">Menaje</option>
                <option value="deporte">Deporte</option>
                <option value="deporte">Tecnología</option>
                </select>

                <label for="price">Precio del producto</label>
                <input onChange={handlePriceChange} id="price" placeholder={product.price} />
                
                <label for="units">Unidades del producto</label>
                <input onChange={handleUnitChange} id="units" placeholder={product.unit} />
                
                <label for="description">Descripción del producto</label>
                <input onChange={handleDescriptionChange} id="description" placeholder={product.description} />
                
                <label for="productState">Estado del producto</label>
                <select onChange={handleProductStatusChange} id="productState" name="productState" placeholder={product.productStatus}>
                <option value="selecciona">{product.productStatus}</option>
                <option value="nuevo">Nuevo</option>
                <option value="semminuevo">Seminuevo</option>
                <option value="desperfectos">Con desperfectos</option>
                </select>

                <fieldset>
                <label for="productPicture">Estado del producto</label>
                <input onChange={handleImgChange} id="productPicture" placeholder={product.img} type="file"/>


                </fieldset>
            </fieldset>
            <div id="buttons">
            <input onClick={handleAgregarClick} id="submit" type="submit" value="ACTUALIZAR" />
            <Link to="/" className="nav--item"><input id="back" type="button" value="VOLVER" /></Link>
            </div>

            <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
        <Alert.Heading>Producto actualizado en su cuenta</Alert.Heading>
        <p>
          ¡Gracias por confiar en nosotras! Esperemos que no haya tenido que bajarle el precio.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleAlertClose} variant="outline-success">
            Cerrar
          </Button>
        </div>
      </Alert>
        </form>
        </>
        );
};

 export default FormEditProduct;