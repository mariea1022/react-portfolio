import React, { useState } from "react";
// import Header from "./Header";
import Footer from "./Footer";

import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navigation from "./Navigation";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("AboutMe");

    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />
        };
        if (currentPage === "Projects") {
            return <Projects />
        };
        if (currentPage === "Contact") {
            return <Contact />
        };
        if (currentPage === "Resume") {
            return <Resume />
        };
        return <AboutMe />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
};

export default PortfolioContainer;