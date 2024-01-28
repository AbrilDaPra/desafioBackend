class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos deben ser completados.");
            return;
        }

        if(this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con ese código.");
            return;
        }

        const newProduct = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);

        return newProduct;
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        const foundProduct = this.products.find(product => product.id === id);

        if(foundProduct) {
            return foundProduct;
        } else {
            console.error("Not found.");
        }
    }
}

const productManager = new ProductManager();

const tshirt = productManager.addProduct("T-shirt", "White cotton t-shirt", 150, "img1.jpg", "A01", 200);
const pants = productManager.addProduct("Pants", "Blue jeans", 200, "img2.jpg", "A002", 140);

console.log(productManager.getProducts());

const productFound = productManager.getProductsById(1);
console.log(productFound);

const productNotFound = productManager.getProductsById(999);
