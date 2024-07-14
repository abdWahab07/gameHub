import "./footer.css";

const FooterContacts = () => {
  return (
    <>
      <h6 className="text-black text-uppercase fw-bold">contacts</h6>
      <div className="text-danger">
        <p>
          <i style={{ fontSize: "medium" }} className="fas fa-home  mr-5">
          </i>
          Lahore, Pakistan
        </p>
        <p>
          <i style={{ fontSize: "medium" }} className="fas fa-envelope mr-5">
          </i>
          abdwahab0472@gmail.com
        </p>
        <p>
          <i style={{ fontSize: "medium" }} className="fas fa-phone  mr-5">
          </i>
          +92 3160445946
        </p>
      </div>
    </>
  );
};

export default FooterContacts;
