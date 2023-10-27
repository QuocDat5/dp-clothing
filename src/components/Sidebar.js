import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import component
import CartItem from "../components/CartItem";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, itemAmount, total } = useContext(CartContext);

    return (
        <div
            className={`${
                isOpen ? "right-0" : "-right-full"
            } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}
        >
            <div className="flex items-center justify-between py-6 border-b">
                <div className="text-lg font-semibold">Cart ({itemAmount})</div>

                {/* right arrow icon */}
                <div
                    onClick={handleClose}
                    className="cursor-pointer w-8 h-8 flex justify-center items-center"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
                </div>
            </div>

            {/* check if cart is empty or not */}
            {itemAmount != 0 ? (
                <div>
                    <div className="flex flex-col gap-y-2 h-[520px] lg:h[640px] overflow-y-auto overflow-x-hidden border-b">
                        {cart.map((item) => {
                            return <CartItem item={item} key={item.id} />;
                        })}
                    </div>

                    <div className="flex flex-col gap-y-3 py-4">
                        {/* total price & trashcan icon container */}
                        <div className="flex w-full justify-between items-center">
                            {/* total price (round to 2 decimals place) */}
                            <div className="uppercase font-semibold">
                                <span className="mr-2">Total:</span>${" "}
                                {parseFloat(total).toFixed(2)}
                            </div>

                            {/* trashcan icon (to clear cart) */}
                            <div
                                onClick={clearCart}
                                className="cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl"
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                        </div>

                        {/* checkout button */}
                        <Link
                            to="/checkout"
                            className="bg-neutral-900 flex p-4 justify-center items-center text-white w-full font-medium hover:bg-white hover:text-neutral-900 hover:scale-105 hover:border-2 hover:border-black duration-300"
                            onClick={handleClose}
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="pt-4">
                    <h1 className="font-normal text-lg">
                        Your cart is currently empty.
                    </h1>

                    <h1 className="font-normal text-lg">
                        Take at look at our{" "}
                        <span
                            className="text-red-500 font-semibold hover:underline"
                            onClick={handleClose}
                        >
                            <a href="#our-products">products</a>
                        </span>{" "}
                        and discover your style.
                    </h1>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
