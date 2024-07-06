import "./Footer.css";

function Footer() {
  return (
    <>
      <hr />
      <div className="footer">
        <ul>
          <li>Contact us!</li>
          <li>Career</li>
        </ul>
        <p>&copy;{new Date().getFullYear()} Buy Stuff</p>
      </div>
    </>
  );
}

export default Footer;
