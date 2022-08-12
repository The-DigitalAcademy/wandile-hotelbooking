import "./navbar.css"
import { Link } from "react-router-dom";
// import { useRouter } from "react-router-dom";

const Navbar = () => {

    // let router = useRouter();

    // const goTo = (path) => {
    //     history.pushState(path);
    //     window.location.reload();
    // };

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">iamWandile'sbooking</span>
                <div className="navItems">
                {/* <button className="navButton">Register</button> */}
                <Link to='/login'><button  className="navButton">Login / Sign in</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar