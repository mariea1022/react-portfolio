import React from "react";
import resume from "../../assets/MarieResume2021.pdf";

function Resume() {
  return (
    <div className="h-screen mt-5 sm:mt-8 sm:flex sm:justify-center">
      <div className="mt-3 sm:mt-0 cursor-pointer w-1/2 flex justify-center">
        <a href={resume} download="resume">
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
