import { ProductHandler} from '../src/handler/ProductHandler';
import { ProductService} from '../src/services/ProductServices';

jest.mock('../src/services/ProductServices');

    describe('loadProducts', () => {
        it('should return the products using the product service', async () => {
            const expectedProducts = [{
                "name": "Silla de escritorio",
                "price": 99,
                "img": "../src/assets/img/Silla-Harry_Potter.jpg",
                "category": "Mobiliario oficina",
                "productStatus": "Nuevo",
                "unit": "2",
                "description": "Silla gaming original, asiento de oficina Licencia oficial. Asiento ultraconfortable con respaldo ergonómico y reposabrazos acolchados. Acabado de alta calidad con bordados y costuras, cubierta de piel sintética de fácil cuidado. Robusta estructura de acero y ajuste de altura con sistema de jack de clase 3. Función de silla mecedora, rocking-chair. Silla de juego de diseño exclusivo para eSports bajo licencia oficial.",
                "date": "2023-02-01",
                "id": 1
              },
              {
                "name": "Paraguas Plegable Compacto Harry Potter",
                "price": "10",
                "img": "../src/assets/img/paraguas-Harry_Potter.jpg",
                "category": "Accesorios",
                "productStatus": "Nuevo",
                "unit": "4",
                "description": "Paraguas Adulto, Estructura Alta Resistencia, Paraguas Hogwarts, Paraguas Grande 8 Varillas.",
                "date": "2023-02-27T19:04:16.177Z",
                "id": 2
            }];
            ProductService.getProducts.mockResolvedValue(expectedProducts);
            let result = await ProductHandler.loadProducts();
            expect(result).toEqual(expectedProducts);
            expect(ProductService.getProducts).toHaveBeenCalled();
            
        });
    })