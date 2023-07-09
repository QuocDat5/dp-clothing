import React from "react";
// import images
import WomanImg from "../assets/woman_hero.png";
// import link
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
            <div className="container mx-auto flex justify-around h-full">
                {/* text section */}
                <div className="flex flex-col justify-center">
                    {/* pre-title */}
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New
                        trend
                    </div>

                    {/* title */}
                    <h1 className="text-[70px] leading-[1.1] font-light mb-4">
                        AUTUMN SALE
                        <br />
                        <span className="font-semibold">WOMEN</span>
                    </h1>

                    {/* discover-more button */}
                    <Link
                        to={"/"}
                        className="self-start uppercase font-semibold border-b-2 border-primary"
                    >
                        Discover more
                    </Link>
                </div>

                {/* image */}
                <div className="hidden lg:block">
                    <img src={WomanImg} alt="Woman image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
