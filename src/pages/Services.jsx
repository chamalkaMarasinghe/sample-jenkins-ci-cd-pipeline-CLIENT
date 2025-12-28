import React from "react";
import { CONFIGURATIONS } from "../config/envConfig";

const Services = () => {
    return (
        <>
            <div className="max-w-4xl px-6 py-10">
                <h1 className="mt-24 mb-4 text-4xl font-bold text-left text-primary">
                    Welcome to my Services
                </h1>
                <h1 className="mt-24 mb-4 text-4xl font-bold text-left text-primary">
                    images
                </h1>
                <img
                    src={`https://res.cloudinary.com/drtlgof0d/image/upload/v1766952770/samples/assets/gh5lovi0oxw7e4k3xzep.jpg`}
                    alt="Services 1"
                    className="w-full h-auto rounded-lg shadow-md"
                />
                <img
                    src={`https://res.cloudinary.com/drtlgof0d/image/upload/v1766952647/samples/assets/eqpijtyywfthaftjnvzr.jpg`}
                    alt="Services 2"
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>
        </>
    );
};

export default Services;
