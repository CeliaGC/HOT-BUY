import { useForm } from 'react-hook-form';
import './Form.css'
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import ProductHandler from '../handler/ProductHandler';
import Button from 'react-bootstrap/Button';
import '../../src/index.css'

function MyForm() {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();

  const handleImageChange = (event) => {
    const picture = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = () => {
      setValue("productPicture", reader.result);
    };
  }

  const [showAlert, setShowAlert] = useState(false);

  const handleAgregarClick = () => {
    setShowAlert(true);
  }

  const handleAlertClose = () => {
    setShowAlert(false);
  }

  const onSubmit = (data) => {
    ProductHandler.addProduct(data)
    console.log(data)
    // return window.alert("Producto agregado a su cuenta");
}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <fieldset>
        <input id="productName" placeholder='Nombre del producto' {...register("productName", { required: true })} />
        {errors.productName && <span>Debe rellenar este campo</span>}

        <select id="category" name="category" {...register("category", { required: true })}>
        {errors.category && <span>Debe rellenar este campo</span>}
        <option value="selecciona">Tipo de producto...</option>
        <option value="bebé">Bebé</option>
        <option value="moda">Moda</option>
        <option value="complementos">Complementos</option>
        <option value="mobiliario">Mobiliario</option>
        <option value="menaje">Menaje</option>
        <option value="deporte">Deporte</option>
        <option value="deporte">Tecnología</option>
        </select>

        <input id="price" placeholder='Precio' {...register("price", { required: true })} />
        {errors.price && <span>Debe rellenar este campo</span>}

        <input id="units" placeholder='Unidades' type={'number'} {...register("units", { required: true })} />
        {errors.units && <span>Debe rellenar este campo</span>}

        <input id="description" placeholder='Descripción' {...register("description", { required: true })} />
        {errors.description && <span>Debe rellenar este campo</span>}

        <select id="productState" name="productState" {...register("productState", { required: true })}>
        {errors.category && <span>Debe rellenar este campo</span>}
        <option value="selecciona">Estado del producto...</option>
        <option value="nuevo">Nuevo</option>
        <option value="semminuevo">Seminuevo</option>
        <option value="usado">Usado</option>
        </select>

        <fieldset>

          <input id="productPicture" placeholder='Foto del producto' type="file" onChange={handleImageChange} />
          {errors.productPicture && <span>Debe rellenar este campo</span>}

          <div id="term">
          
          <input id="Terms" placeholder='terms' type="checkbox" value="checkbox" className="inline" {...register("terms", { required: true })} />
          {errors.terms && <span>Debe rellenar este campo</span>}
          <label>Acepto los términos y condiciones</label></div>

        </fieldset>
      </fieldset>
      <div id="buttons">
      <input onClick={handleAgregarClick} id="submit" type="submit" value="GUARDAR" />
      <input id="reset" type="reset" value="LIMPIAR" />
      </div>

      <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
        <Alert.Heading>Producto agregado a su cuenta</Alert.Heading>
        <p>
          ¡Gracias por confiar en nosotras! Esperemos se venda pronto y no tenga que bajarle el precio.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleAlertClose} variant="outline-success">
            Cerrar
          </Button>
        </div>
      </Alert>
    </form>
  )

}

export default MyForm