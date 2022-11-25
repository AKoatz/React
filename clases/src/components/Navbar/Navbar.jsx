import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Navbar/img/Logo.png";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-black bg-info bg-gradient">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" width="50" height="50"/>
        </a>    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
            <Categorias/>
        </div>
            <CartWidget/>
  </div>
</nav>

    );
}

export default Navbar;
