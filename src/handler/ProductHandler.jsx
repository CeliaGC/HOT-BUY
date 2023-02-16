import ProductService from "../services/ProductServices";

const ProductHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let product = {
            "name": newProduct.name,
            "price": newProduct.price,
            "img": newProduct.img,
            "category": newProduct.category,
            "productStatus": newProduct.productStatus,
            "unit": newProduct.unit,
            "description": newProduct.description,
            "date": newProduct.date,
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
    updateProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let newProductModel = {
            "name": newProduct.name,
            "price": newProduct.price,
            "img": newProduct.img,
            "category": newProduct.category,
            "productStatus": newProduct.productStatus,
            "unit": newProduct.unit,
            "description": newProduct.description,
            "date": newProduct.date,
            "id": newProduct.id
        }

        let id = newProductModel.id;

        return ProductService.updateProduct(id, newProductModel);
    }
}

export default ProductHandler