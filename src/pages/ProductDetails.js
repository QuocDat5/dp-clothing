import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// toast messages
import { toast } from "react-toastify";

const ProductDetails = () => {
    // get product id from the url
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    // get 1 product with the id
    const product = products.find((item) => {
        return item.id === parseInt(id);
    });

    // scroll to the top of the page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    // if product can't be found
    if (!product) {
        return (
            <section className="h-screen flex justify-center items-center text-[26px]">
                Loading...
            </section>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, product.id);

        toast.success("Added to cart.", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    // destructure product
    const { title, price, description, image } = product;

    return (
        <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
                {/* image & text wrapper */}
                <div className="flex flex-col lg:flex-row items-center">
                    {/* image */}
                    <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                        <img
                            className="max-w-[200px] lg:max-w-sm hover:scale-105 duration-300"
                            src={image}
                            alt="Product image"
                        />
                    </div>

                    {/* text */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* title */}
                        <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                            {title}
                        </h1>

                        {/* price */}
                        <div className="text-2xl text-red-500 font-bold mb-6">
                            $ {price}
                        </div>

                        {/* description */}
                        <p className="mb-8">{description}</p>

                        {/* add-to-cart button */}
                        <button
                            onClick={handleAddToCart}
                            className="bg-neutral-900 py-4 px-8 text-white font-medium hover:bg-white hover:text-neutral-900 hover:scale-105 hover:border-2 hover:border-black duration-300 animate-bounce"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
