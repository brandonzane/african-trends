import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-10 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-black">
        <div className="pb-8 mb-2 border-t-2 border-white dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>2022 © African Trends</p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="#"
              className={"transition-colors hover:text-indigo-500"}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="#"
              className={"transition-colors hover:text-indigo-500"}
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
            <a
              href="#"
              className={"transition-colors hover:text-indigo-500"}
              target="_blank"
              rel="noreferrer"
            >
              DEV
            </a>
            <a
              href="#"
              className={"transition-colors hover:text-indigo-500"}
              target="_blank"
              rel="noreferrer"
            >
              Hashnode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
