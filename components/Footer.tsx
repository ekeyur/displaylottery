import React from "react";
import SimpleCarousel from "./SimpleCarousel";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex items-center justify-center">
        <div className="bg-gray-100 p-8 rounded shadow-md md:flex md:items-center md:w-full justify-around">
          <div className="md:w-1/3 mb-4 md:mb-0 max-w-screen-xl">
            <h2 className="text-2xl font-semibold mb-6 text-fuchsia-900">
              Contact us to get started
            </h2>
            <p className="mb-2">
              {/* <strong>Address:</strong> 621 Bellwood Rd, Enterprise, AL 36330 */}
              <strong>Email:</strong> displaylotto@gmail.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1 408 673 7277
            </p>
          </div>

          <div className="h-32 w-64">
            <SimpleCarousel images={carouselImages} interval={10_000} />
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-gray-100">
        &copy; {new Date().getFullYear()} DisplayLotto. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

var carouselImages = [
  "/lotto-screen.png",
  "/menu1.png",
  "/menu2.png",
  "/menu3.png",
];