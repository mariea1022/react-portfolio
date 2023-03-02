import React from "react";
// import { BrowserRouter as Router, Switch,
//   Route, Redirect,} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
// import Projects from "./Projects"
// import Contact from "./Contact"
// import Resume from "./Resume";


function Project() {
  return (
    //     <>
    //   {/* This is the alias of BrowserRouter i.e. Router */}
    //   <Router>
    //     <Switch>
    //       {/* This route is for home component
    //       with exact path "/", in component props
    //       we passes the imported component*/}
    //       <Route exact path="/" component={Homepage} />

    //       {/* This route is for aboutme component
    //       with exact path "/aboutme", in component
    //       props we passes the imported component*/}
    //       <Route path="/aboutme" component={AboutMe} />

    //       {/* This route is for projects component
    //       with exact path "/projects", in component
    //       props we passes the imported component*/}
    //       <Route path="/projects" component={Projects} />

    //       {/* This route is for contact component
    //       with exact path "/contact", in
    //       component props we passes the imported component*/}
    //       <Route path="/contact" component={Contact} />

    //       {/* This route is for resume component
    //       with exact path "/resume", in
    //       component props we passes the imported component*/}
    //       <Route path="/resume" component={Resume} />

    //       {/* If any route mismatches the upper
    //       route endpoints then, redirect triggers
    //       and redirects app to home component with to="/" */}
    //       <Redirect to="/" />
    //     </Switch>
    //   </Router>
    // </>
    <div>
      <AboutMe />
    </div>
  );
}

export default Project;
