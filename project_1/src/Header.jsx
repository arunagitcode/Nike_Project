const Header = () => {
  return (
    <nav className="header_container">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1978-present.jpg"
        alt="logo"
        width="80px"
        height="40px"
      />

      <div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>LOCATION</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div>
        <button>LOGIN</button>
      </div>
    </nav>
  );
};
export default Header;
