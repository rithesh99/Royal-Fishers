import React from "react";
import "./Home.css";
import Main from "../../Components/Main/Main";
import Products from "../../Components/Products/Products";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Main />
      <h1>...</h1>
      <Products />

      {/* About */}
      {/* <About /> */}
      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
