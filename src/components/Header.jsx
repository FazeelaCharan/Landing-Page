import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center overflow-y-auto">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} className="h-10 w-10 rounded-full" alt="" />
            <span class="ml-3 text-xl font-bold">CODELYTX</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <a class="mr-5 hover:text-gray-900">First Link</a> */}
            {/* <a class="mr-5 hover:text-gray-900">Second Link</a> */}
            <a class="mr-5 hover:text-gray-900 font-medium">Help and Support</a>
            <a class="mr-5 hover:text-gray-900">why Codalytix</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
