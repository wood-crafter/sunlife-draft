import "./index.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src="/logo-name.webp" alt="Logo" />
      <h2 className="title">Sunny (Advisor Assistant)</h2>
      <img
        className="logo"
        src="/logo-name.webp"
        alt="Logo"
        style={{ opacity: 0, marginRight: "15%", marginLeft: 0 }}
      />
    </div>
  );
}

export default Header;
