import ProductService from "../services/ProductServices";

const ProductHandler = {
    addProduct(newProduct){
        // console.log(newProduct);
        if (!newProduct) {
            return;
        }

        let product = {
            "name": newProduct.productName,
            "price": newProduct.price,
            "img": newProduct.productPicture,
            "category": newProduct.category,
            "productStatus": newProduct.productState,
            "unit": newProduct.units,
            "description": newProduct.description,
            "date": new Date(),
            "id": ""

        }
        ProductService.submitProduct(product);
        return product;
    },
    loadProducts(){
        return ProductService.getProducts();
    },
    loadProduct(id) {
        return ProductService.getProduct(id);
    },
    deleteProduct(id){
        return ProductService.deleteProduct(id);
    },
    updateProduct(id, updatedProduct){
        if (!updatedProduct) {
            return;
        }

        let updatedProductStructure = {
            "name": updatedProduct.name,
            "price": updatedProduct.price,
            "img": updatedProduct.img,
            "category": updatedProduct.category,
            "productStatus": updatedProduct.productStatus,
            "unit": updatedProduct.unit,
            "description": updatedProduct.description,
            "date": new Date(),
            "id": updatedProduct.id
        }

        return ProductService.updateProduct(id, updatedProductStructure);
    },
    async fetchProducts() {
        const products = await ProductHandler.loadProducts();
        return { products };
    },
    async fetchProduct({ params }) {
        const product = await ProductHandler.loadProduct(params.id);
        return { product };
    },
}

export default ProductHandler

