import React, { useContext } from "react";

// import product context
import { ProductContext } from "../contexts/ProductContext";
// import product
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
    // get products from product context
    const { products } = useContext(ProductContext);

    // get only men clothing, women clothing, & jewelry category
    const filteredProducts = products.filter((item) => {
        return (
            item.category === "men's clothing" ||
            item.category === "women's clothing" ||
            item.category === "jewelery"
        );
    });
    console.log(filteredProducts);

    return (
        <div>
            <Hero />

            <section id="our-products" className="py-16">
                <p className="text-4xl text-center mb-10">Our products</p>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                        {filteredProducts.map((product) => {
                            return (
                                <Product product={product} key={product.id} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
