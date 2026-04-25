import products from "../data/product.json" with {type:"json"};
//function used to render home page with products.
export const getProducts = (req, res) => {
    res.render("index", { products });
};
//productCard function.
export const getProductById = (req, res) => {
  const id = req.params.id;

  console.log("ID:", id); // debug

  const product = products.find(p => p.id == id);

  console.log("FOUND:", product); 

  if (!product) {
    return res.send("Product not found");
  }

  res.render("product", { product });
//   res.send(product);  use this to see what data has coming
};