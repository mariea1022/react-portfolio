import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://" class="flex items-center">
          <div className="font-medium dark:text-white">
            <div>Marie Lewis</div>
          </div>
        </a>
        <Navigation></Navigation>
      </div>
    </div>
  );
}

export default Header;
