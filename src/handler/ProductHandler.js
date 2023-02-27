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
            "unit": newProduct.unit,
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

        let updateProduct = {
            "name": updateProduct.productName,
            "price": updateProduct.price,
            "img": updateProduct.productPicture,
            "category": updateProduct.category,
            "productStatus": updateProduct.productState,
            "unit": updateProduct.unit,
            "description": updateProduct.description,
            "date": new Date(),
            "id": updateProduct.id
        }

        return ProductService.updateProduct(id, updateProduct);
    }
}

export default ProductHandler

