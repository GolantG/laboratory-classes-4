 class Product{
    constructor(name,description){
         this.name = name;
         this.description = description;
    }
    
    static #products = [];

    static getAll(){
         return this.#products;
    }

    static add(product){
        const exists = this.findByName(product.name);
        if(exists){
            throw new Error(`Product "${product.name}" allready exists!`);
        }

        this.#products.push(product);
        return product;
    }

    static findByName(name){
        return this.#products.find(product => product.name === name);
    }

    static deleteByName(name){
        const index = this.#products.findIndex(product => product.name == name);
        if(index !== -1){
            const deleted = this.#products.splice(index, 1);
            return deleted[0];
        }
        return null;
    }

    static getLast(){
        return this.#products.at(-1) || null;
    }
}

module.exports = Product;