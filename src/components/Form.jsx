import { useForm } from 'react-hook-form';
import './Form.css'
import React, { useState } from 'react';
import ProductHandler from '../handler/ProductHandler';

function MyForm() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const handleImage = (data) => {
      // console.log(data)
      // console.log(register.productPicture[0]);
      const picture = data.productPicture[0];
      const reader = new FileReader();
      // console.log(reader)
      let parsedData = {}
        reader.readAsDataURL(picture);
        // reader.onload = () => {
            parsedData = {
              ...data,
              productPicture: reader.result

            }
            // console.log(parsedData)

        
        return parsedData
        // console.log(parsedData)
      
      // return Image;
      
    }
    // const [value, setValue] = useState(null);

    // const handleChange = (event) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //         setValue(reader.result);
    //     };
    
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     ProductHandler.addProduct(value);
    // };

  
    const onSubmit = (data) => {
    // console.log(data);  
    let parsedData = handleImage(data)
    console.log(parsedData)
    return ProductHandler.addProduct(parsedData)
    
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <input  id="name" placeholder='Nombre del producto' {...register("productName", { required: true })} />
        {errors.productName && <span>Debe rellenar este campo</span>}

        <input id="category" placeholder='Categoría'{...register("category", { required: true })} />
        {errors.category && <span>Debe rellenar este campo</span>}
        {/* Le podemos poner un dropdown:
       Category:
        <select id="Category" name="dropdown">
          <option value="">(select an option)</option>
          <option value="1">Electronics</option>
          <option value="2">Textile</option>
          <option value="3">Home</option>
          <option value="4">Entertainment</option>
          <option value="5">Pets</option>
        </select>*/}

        <input id="price" placeholder='Precio' {...register("price", { required: true })} />
        {errors.price && <span>Debe rellenar este campo</span>}

        <input id="unit" placeholder='Unidades' {...register("units", { required: true })} />
        {errors.units && <span>Debe rellenar este campo</span>}

        <input id="description" placeholder='Descripción' {...register("description", { required: true })} />
        {errors.description && <span>Debe rellenar este campo</span>}

        {/* Le podemos poner un textarea: 
      <textarea id="Description" rows="6" cols="8" placeholder="Description. Maximum 250 characters."
      minlength="0" maxlength="250" pattern="[A-Za-z0-9]" required></textarea> */}

        <input id="productStatus" placeholder='Estado del producto'{...register("productState", { required: true })} />
        {errors.productState && <span>Debe rellenar este campo</span>}

        {/* Le podemos poner un radio */}

        <fieldset>

          <input id="img" placeholder='Foto del producto' type="file" {...register("productPicture", { required: true })} />
          {errors.productPicture && <span>Debe rellenar este campo</span>}

          <input id="Terms" placeholder='terms' type="checkbox" value="checkbox" className="inline" {...register("terms", { required: true })} />Acepto los términos y condiciones
          {errors.terms && <span>Debe rellenar este campo</span>}
        
        </fieldset>
      </fieldset>

      <input id="submit" type="submit" value="ENVIAR" />
      <input id="reset" type="reset" value="RESTABLECER" />

    </form>
  );
  
}

export default MyForm
