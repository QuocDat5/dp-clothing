import React, { useContext } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    return (
        <header className="bg-pink-200 shadow-2x">
            <div>Header</div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer flex relative"
            >
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </header>
    );
};

export default Header;
