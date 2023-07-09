import React, { useContext, useEffect, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import link
import { Link } from "react-router-dom";
// logo
import logo from "../assets/logo.svg";

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);

    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    // event listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <header
            className={`${
                isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
            } fixed w-full z-10 transition-all`}
        >
            <div className="container mx-auto flex items-center justify-between h-full">
                {/* logo */}
                <Link to={"/"}>
                    <div>
                        <img
                            className={`${
                                isActive ? "w-[30px]" : "w-[40px]"
                            } transition-all`}
                            src={logo}
                            alt="Logo"
                        />
                    </div>
                </Link>

                {/* cart section */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer flex relative"
                >
                    {/* cart icon */}
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className={`${
                            isActive ? "text-xl" : "text-2xl"
                        } transition-all`}
                    />

                    {/* items amount on cart icon  */}
                    <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
