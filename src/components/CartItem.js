import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } =
        useContext(CartContext);
    const { handleClose } = useContext(SidebarContext);

    // destructure item
    const { id, title, image, price, amount } = item;

    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link to={`/product/${id}`} onClick={handleClose}>
                    <img
                        className="max-w-[80px]"
                        src={image}
                        alt={`Product ${id}'s image`}
                    />
                </Link>

                <div className="w-full flex flex-col">
                    {/* title & remove button */}
                    <div className="flex justify-between mb-2">
                        {/* title */}
                        <Link
                            to={`/product/${id}`}
                            className="text-sm font-medium max-w-[240px] text-neutral-900 hover:underline"
                            onClick={handleClose}
                        >
                            {title}
                        </Link>

                        {/* remove icon (to remove item from cart) */}
                        <div
                            onClick={() => removeFromCart(id)}
                            className="text-xl cursor-pointer"
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="text-gray-500 hover:text-red-500 transition"
                            />
                        </div>
                    </div>

                    {/* quantity, item price  & final price */}
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        {/* quantity */}
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-neutral-900 font-medium">
                            {/* minus icon */}
                            <button
                                onClick={() => decreaseAmount(id)}
                                className="flex-1 flex justify-center items-center cursor-pointer h-full"
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>

                            {/* amount */}
                            <div className="h-full flex justify-center items-center px-2">
                                {amount}
                            </div>

                            {/* plus icon */}
                            <button
                                onClick={() => increaseAmount(id)}
                                className="flex-1 flex justify-center items-center cursor-pointer h-full"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>

                        {/* item price */}
                        <div className="flex-1 flex items-center justify-around font-normal text-gray-500">
                            $ {price}
                        </div>

                        {/* final price (round to 2 decimals place) */}
                        <div className="flex-1 flex justify-end items-center text-neutral-900 font-bold">{`$ ${parseFloat(
                            price * amount
                        ).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
