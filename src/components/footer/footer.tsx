import FooterHead from "./footerHead";
import FooterBottom from "./footerBottom";
import FooterCatalogue from "./footerCatalogue";
import "./footer.css";
import FooterContacts from "./footerContacts";
import FooterInfo from "./footerInfo";

const Footer = () => {
  return (
    <div className="footer bebas">
      <FooterHead></FooterHead>
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <FooterInfo></FooterInfo>
          </div>
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <FooterCatalogue></FooterCatalogue>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mb-4 mx-auto">
            <FooterContacts></FooterContacts>
          </div>
        </div>
      </div>
      <FooterBottom></FooterBottom>
    </div>
  );
};

export default Footer;
