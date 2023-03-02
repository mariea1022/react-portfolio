import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
      <div className="align-items-center">
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <div
            onClick={(e) => {
              window.location.href = "mailto:mariea1022@gmail.com";
            }}
            className="cursor-pointer text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <i className="fa-solid fa-envelope"></i>
            <span className="sr-only">Email</span>
          </div>
          <a
            href="https://linkedin.com/in/hrmarielewis"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span className="sr-only">LinkedIn page</span>
          </a>
          <a
            href="https://github.com/mariea1022"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <i className="fa-brands fa-github"></i>
            <span className="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
