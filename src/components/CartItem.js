import React from "react";
// import link
import { Link } from "react-router-dom";
// import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
    // destructure item
    const { id, title, image, price, amount } = item;
    
    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link to={`/product/${id}`}>
                    <img className="max-w-[80px]" src={image}></img>
                </Link>

                <div className="w-full flex flex-col">
                    {/* title & remove button */}
                    <div className="flex justify-between mb-2">
                        {/* title */}
                        <Link
                            to={`/product/${id}`}
                            className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
                        >
                            {title}
                        </Link>
                        {/* remove icon */}
                        <div className="text-xl cursor-pointer">
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="text-gray-500 hover:text-red-500 transition"
                            />
                        </div>
                    </div>

                    {/* quantity, item price  & final price */}
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        {/* quantity */}
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                            {/* minus icon */}
                            <div className="flex-1 flex justify-center items-center cursor-pointer">
                                <FontAwesomeIcon icon={faMinus} />
                            </div>

                            {/* amount */}
                            <div className="h-full flex justify-center items-center px-2">
                                {amount}
                            </div>

                            {/* plus icon */}
                            <div className="flex-1 flex justify-center items-center cursor-pointer">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>

                        {/* item price */}
                        <div className="flex-1 flex items-center justify-around font-normal text-gray-500">
                            $ {price}
                        </div>

                        {/* final price (round to 2 decimals place) */}
                        <div className="flex-1 flex justify-end items-center text-primary font-bold">{`$ ${parseFloat(
                            price * amount
                        ).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
