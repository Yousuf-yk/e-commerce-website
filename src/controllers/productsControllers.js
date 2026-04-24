import products from "../data/product.json" with {type:"json"};

export const getProducts = (req, res) => {
    res.render("index", { products });
};