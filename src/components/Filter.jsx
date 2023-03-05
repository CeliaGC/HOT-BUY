import {useLoaderData } from "react-router-dom";


function Filter() {
    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
    const { products} = useLoaderData();
    const [productsData, setProductsData] = useState(products);
    const [searchQuery, setSearchQuery] = useState("");
    const data = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) 
       
    );
    const deleteProduct = async (id) => {
      await productHandler.deleteProduct(id);
      setProductsData(productsData.filter(post => post.id !== id))
  }
  return (
    <div className="block--dashboard">
      <div className="block--search-container">
        <label htmlFor="">Search</label>
        <input type="input" onChange={handleSearch} value={searchValue}/>
      </div>
      <section className="block--products-container">
        {filteredProducts && filteredProducts.map((product) => (
          <ProductList key={product.id} product={product} deleteProduct={deleteProduct} />
        ))}
      </section>
    </div>
  )
}

export default Filter