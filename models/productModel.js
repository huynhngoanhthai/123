// models/product.js
class Product {
    constructor(id, name, description, price, imageUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

// Xuất class Product để sử dụng ở nơi khác trong ứng dụng của bạn
module.exports = Product;
