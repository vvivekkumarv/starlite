import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Action from "./components/Action";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";



import "./components/assets/css/bootstrap.min.css";
import "./components/assets/css/default.css";
import "./components/assets/css/magnific-popup.css";
import "./components/assets/css/style.css";
import "./components/assets/css/style.css.map";
import "./components/assets/css/LineIcons.css";

{/*import {Helmet} from "react-helmet";
const Demo = props => (
<div className="application">
            <Helmet>
              <script src="assets/js/vendor/modernizr-3.6.0.min.js" type="text/javascript" />
              <script src="assets/js/vendor/jquery-1.12.4.min.js" type="text/javascript" />
              <script src="assets/js/bootstrap.min.js" type="text/javascript" />
              <script src="assets/js/popper.min.js" type="text/javascript" />
              <script src="assets/js/jquery.easing.min.js" type="text/javascript" />
              <script src="assets/js/scrolling-nav.js" type="text/javascript" />
              <script src="assets/js/jquery.magnific-popup.min.js" type="text/javascript" />
              <script src="assets/js/main.js" type="text/javascript" />
            </Helmet>
            ...
        </div>
  
);
*/}

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Pricing />
      <Action />   
      <Contact /> 
      <Footer />
    </div>
    
  );
}

export default App;
