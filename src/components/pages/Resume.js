import React from "react";
import resume from "../../assets/MarieResume2021.pdf";

function Resume() {
  return (
    <div className="grid h-screen">
      <h2 className="mt-10 text-center text-2xl font-bold">Technologies and Tools</h2>
    <div className="w-1/2 justify-self-center">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-black">
          HTML/CSS
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-black">
          70%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "70%" }}
        ></div>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-black">
          Javascript
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-black">
          65%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "65%" }}
        ></div>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-black">
          React
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-black">
          50%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-black">
          Express
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-black">
          60%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "60%" }}
        ></div>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-black">
          MongoDB
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-black">
          65%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "65%" }}
        ></div>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-black">
          SQL
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-black">
          70%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "70%" }}
        ></div>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-black">
          NodeJS
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-black">
          65%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "65%" }}
        ></div>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-black">
          TailwindCSS
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-black">
          60%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "60%" }}
        ></div>
      </div>
      </div>

      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
        <div className="mt-3 sm:mt-0 cursor-pointer w-1/2 flex justify-center">
          <a href={resume} download="resume">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
