import { useForm } from 'react-hook-form';
import './Form.css'

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("productName", { required: true })} />
      {errors.productName && <span>Este campo es obligatorio</span>}
      
      <input placeholder='Category'{...register("category", { required: true })} />
      {errors.category && <span>Este campo es obligatorio</span>}
      
      <input className="Price" placeholder='Precio'{...register("price", { required: true })} />
      {<errors ></errors> && <span>Este campo es obligatorio</span>}
      
      <input {...register("units", { required: true })} />
      {<errors className="Units"></errors> && <span>Este campo es obligatorio</span>}
      
      <input {...register("description", { required: true })} />
      {<errors className="Description"></errors> && <span>Este campo es obligatorio</span>}

      <input {...register("productState", { required: true })} />
      {<errors className="ProductState"></errors> && <span>Este campo es obligatorio</span>}
      

      <button type="submit">Agree</button>
    </form>
  );
}
export default MyForm