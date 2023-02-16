import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const ProductService = {
    async getProducts() {
        let response = await apiClient.get("/products");
        let allProducts = response.data;
        return allProducts;
    },
    async getProduct(id) {
        let response = await apiClient.get("/products/" + id);
        let product = response.data;
        return product;
    },
    async submitProduct(newProduct){
        await apiClient.post("/products", newProduct)
    },
    async deleteProduct(id){
        await apiClient.delete("/products/" + id)
    },
    async updateProduct(id, updatedProduct){
        await apiClient.patch("/products/" + id, updatedProduct)
    }
}

export default ProductService