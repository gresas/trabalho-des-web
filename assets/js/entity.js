function Product(title, category, price, image_path, image_filename) {
    this._title = title;
    this._category = category;
    this._price = price;
    this._image = {
        filename: image_filename,
        path: image_path
    };

    this.parsed_price = () => {
        return parseFloat(this.price).toFixed(2).toString()
    };

}

Object.defineProperties(Product.prototype, {
    title : {
        get: function() {
            // Make some treatment
            return this._title;
        },
        set: function(title) {
            // Make validations
            this._title = title;
        }
    },
    image: {
        get: function() {
            // console.log(this)
            return this._image.path + this._image.filename;
        }
    },
    price: {
        get: function() {
            return this._price;
        },
        set: function(price) {
            if (parseFloat(price).toFixed(2).toString().match(/^\d+\.\d\d$/)) {
                this._price = price;
            } else throw new Error('Invalid Price'); 
        }
    },
    category: {
        get: function() {
            return this._category;
        },
        set: function(category) {
            this._category = category;
        }
    }
})

module.exports = {
    Product
}