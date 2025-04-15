const Product = require(`../models/Product`);
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

const getProductsView = (_request, response) => {
    const products = Product.getAll();
    response.render("products.ejs", {
        headTitle: "Shop - Products",
        path: "/",
        menuLinks: MENU_LINKS,
        activeLinkPath: "/products",
        products,
      });
};

const getAddProductsView = (_request, response) => {
    response.render("add-product.ejs", {
        headTitle: "Shop - Add product",
        path: "/add",
        menuLinks: MENU_LINKS,
        activeLinkPath: "/products/add",
      });
};

const addNewProduct = (_request, response) => {
    const { name, description } = _request.body;
    try{
        const newProduct = new Product(name, description);
        Product.add(newProduct);
        response.status(STATUS_CODE.FOUND).redirect(`/products/new`);
    }catch(error){
        response.status(STATUS_CODE.BAD_REQUEST).send(error.message);
    }
};

const getNewProductView = (_request, response) => {
    const newestProduct = Product.getLast();
    response.render("new-product.ejs", {
        headTitle: "Shop - New product",
        path: "/new",
        activeLinkPath: "/products/new",
        menuLinks: MENU_LINKS,
        newestProduct,
      });
};

const getProductView = (_request, response) => {
    const { name } = _request.params;
    const foundProduct = Product.findByName();
    if(!foundProduct){
        return response.status(STATUS_CODE.NOT_FOUND).send("Can't find the product");
    }

    response.render("product.ejs", {
        headTitle: `Shop - ${foundProduct.name}`,
        product: foundProduct,
        menuLinks: MENU_LINKS,
      });
};