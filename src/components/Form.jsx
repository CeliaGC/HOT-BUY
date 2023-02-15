import { useForm } from 'react-hook-form';
import './Form.css'

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <input id="productName" placeholder='Product Name' {...register("productName", { required: true })} />
        {errors.productName && <span>This field is required</span>}

        <input id="Category" placeholder='Category'{...register("category", { required: true })} />
        {errors.category && <span>This field is required</span>}
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

        <input id="Price" placeholder='Price' {...register("price", { required: true })} />
        {errors.price && <span>This field is required</span>}

        <input id="Units" placeholder='Units' {...register("units", { required: true })} />
        {errors.units && <span>This field is required</span>}

        <input id="Description" placeholder='Description' {...register("description", { required: true })} />
        {errors.description && <span>This field is required</span>}

        {/* Le podemos poner un textarea: 
      <textarea id="Description" rows="6" cols="8" placeholder="Description. Maximum 250 characters."
      minlength="0" maxlength="250" pattern="[A-Za-z0-9]" required></textarea> */}

        <input id="productState" placeholder='Product State'{...register("productState", { required: true })} />
        {errors.productState && <span>This field is required</span>}

        {/* Le podemos poner un radio */}

        <fieldset>

          <input id="productPicture" placeholder='Product Picture' type="file" {...register("productPicture", { required: true })} />
          {errors.productPicture && <span>This field is required</span>}

          <label for="news" name="news">
          <input id="terms" placeholder='terms' type="checkbox" value="checkbox" class="inline" {...register("terms", { required: true })} />I accept the terms and conditions
          {errors.terms && <span>This field is required</span>}</label>
        
        </fieldset>
      </fieldset>

      <input id="submit" type="submit" value="AGREE" />
      <input id="reset" type="reset" value="RESET" />

    </form>
  );
}
export default MyForm