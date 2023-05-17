import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black py-12 relative w-full h-auto bg-indigo-800">
            {/* container */}
            <div>
                {/* about us section */}
                <div>
                    <h2 className="relative text-white font-medium mb-4">
                        About Us
                    </h2>
                    <p>
                        Welcome to Se7en Store, the fashion destination for
                        trendy and affordable clothing in Ho Chi Minh City. Our
                        brand was founded by a group of students with a passion
                        for fashion and a vision to create a one-stop-shop for
                        all your fashion needs. We offer a wide range of
                        clothing options for men and women, including casual
                        wear, party wear, and accessories to complete your look.
                    </p>

                    <ul>
                        <li>
                            <a href="#">fa</a>
                        </li>
                        <li>
                            <a href="#">ins</a>
                        </li>
                    </ul>
                </div>

                {/* quick links section */}
                <div>
                    <h2 className="relative text-white font-medium mb-4">
                        Quick Links
                    </h2>

                    <ul>
                        <li>
                            <a href="#">My Account</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Cart</a>
                        </li>
                    </ul>
                </div>

                {/* another quick links section */}
                <div>
                    <h2 className="relative text-white font-medium mb-4">
                        Shop
                    </h2>

                    <ul>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">Tops</a>
                        </li>
                        <li>
                            <a href="#">Bottoms</a>
                        </li>
                    </ul>
                </div>

                {/* contact section */}
                <div>
                    <h2 className="relative text-white font-medium mb-4">
                        Contact Us
                    </h2>

                    <ul>
                        {/* address */}
                        <li>
                            <span>icon</span>
                            <span>
                                Linh Trung, Thu Duc, <br />
                                Ho Chi Minh City
                            </span>
                        </li>

                        {/* phone number */}
                        <li>
                            <span>icon</span>
                            <p>
                                <a href="tel:+84261517265">0261 517 265</a>
                            </p>
                        </li>

                        {/* email */}
                        <li>
                            <span>icon</span>
                            <p>
                                <a href="mailto:7store@gmail.com">
                                    7store@gmail.com
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* copyright text */}
            <div className="container mx-auto">
                <p className="text-white text-center">
                    Copyright &copy; Se7en Store 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
