// import { useForm } from 'react-hook-form';
import './Form.css'

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <input id="productName" placeholder='Nombre del producto' {...register("productName", { required: true })} />
        {errors.productName && <span>Debe rellenar este campo</span>}

        <input id="Category" placeholder='Categoría'{...register("category", { required: true })} />
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

        <input id="Price" placeholder='Precio' {...register("price", { required: true })} />
        {errors.price && <span>Debe rellenar este campo</span>}

        <input id="Units" placeholder='Unidades' {...register("units", { required: true })} />
        {errors.units && <span>Debe rellenar este campo</span>}

        <input id="Description" placeholder='Descripción' {...register("description", { required: true })} />
        {errors.description && <span>Debe rellenar este campo</span>}

        {/* Le podemos poner un textarea: 
      <textarea id="Description" rows="6" cols="8" placeholder="Description. Maximum 250 characters."
      minlength="0" maxlength="250" pattern="[A-Za-z0-9]" required></textarea> */}

        <input id="productState" placeholder='Estado del producto'{...register("productState", { required: true })} />
        {errors.productState && <span>Debe rellenar este campo</span>}

        {/* Le podemos poner un radio */}

        <fieldset>

          <input id="productPicture" placeholder='Foto del producto' type="file" {...register("productPicture", { required: true })} />
          {errors.productPicture && <span>Debe rellenar este campo</span>}

          <input id="terms" placeholder='terms' type="checkbox" value="checkbox" class="inline" {...register("terms", { required: true })} />Acepto los términos y condiciones
          {errors.terms && <span>Debe rellenar este campo</span>}
        
        </fieldset>
      </fieldset>

      <input id="submit" type="submit" value="ENVIAR" />
      <input id="reset" type="reset" value="RESTABLECER" />

    </form>
  );
}
export default MyForm