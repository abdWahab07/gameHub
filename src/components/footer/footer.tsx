import FooterHead from "./footerHead";
import FooterBottom from "./footerBottom";
import FooterCatalogue from "./footerCatalogue";
import "./footer.css";
import FooterContacts from "./footerContacts";
import FooterInfo from "./footerInfo";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollEvent = () => {
    const scrollY = window.scrollY + window.innerHeight; // total scroll position
    const documentHeight = document.documentElement.scrollHeight; // total document height
    setIsVisible(scrollY >= documentHeight - 100); // show footer when near bottom
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="bg">
    <div className={`footer bebas ${isVisible ? "fade-in" : ""}`}>
      <FooterHead />
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <FooterInfo />
          </div>
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <FooterCatalogue />
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mb-4 mx-auto">
            <FooterContacts />
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
    </div>
  );
};

export default Footer;
