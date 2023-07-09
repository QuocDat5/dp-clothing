import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";
// import cart context
import { CartContext } from "../contexts/CartContext";
// toast messages
import { toast } from "react-toastify";

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    // destructure product
    const { id, image, category, title, price } = product;

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

    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    {/* image */}
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img
                            className="max-h-[160px] group-hover:scale-110 transition duration-300"
                            src={image}
                            alt=""
                        ></img>
                    </div>

                    {/* buttons */}
                    <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {/* add-to-cart button */}
                        {/* <button onClick={() => addToCart(product, id)}> */}
                        <button onClick={handleAddToCart}>
                            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 drop-shadow-xl">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </button>

                        {/* view-product-details button */}
                        <Link
                            to={`/product/${id}`}
                            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                        >
                            <FontAwesomeIcon icon={faEye} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* category, title & price */}
            <div>
                <div className="text-sm capitalize text-gray-500 mb-1">
                    {category}
                </div>

                <Link to={`/product/${id}`}>
                    <h2 className="font-semibold mb-1 hover:underline">
                        {title}
                    </h2>
                </Link>

                <h2 className="text-lg font-bold text-green-500">$ {price}</h2>
            </div>
        </div>
    );
};

export default Product;
