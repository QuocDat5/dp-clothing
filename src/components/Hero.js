import React from "react";
// import images
import WomanImg from "../assets/woman_hero.png";
// import link
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
            <div className="container mx-auto flex justify-around h-full">
                {/* text */}
                <div className="flex">
                    <div>
                        <div>New trend</div>
                    </div>
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
