import React from "react";
import hero from "../assets/images/hero.svg";
const Hero = () => {
  return (
    <>
      <section class="text-gray-600 body-font ">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center overflow-y-visible">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              <span className="bg-indigo-300 rounded-full leading-loose">
                Revolutionize
              </span>
              your
              <br class="hidden lg:inline-block" />
              Software{" "}
              <span className="bg-indigo-300 rounded-full leading-loose">
                Engineering
              </span>
              <br class="hidden lg:inline-block " />
              Experience.
            </h1>
            <p class="mb-8 leading-loose">
              Unlock the full potential of your software engineering<br></br>{" "}
              teams with codelytix.io.
              {/* <h3>WHERE ENGINEERING MEETS ANALYTICS.</h3> */}
            </p>
            <p class="mb-8 leading-relaxed font-medium text-black">
              Where Engineering Meets<br></br> Analytics.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-24 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 max-w-2xl">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
