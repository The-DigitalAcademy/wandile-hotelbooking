import "./navbar.css"
import { Link } from "react-router-dom";
// import { useRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {

    const navigate = useNavigate();

    const goTo = (path) =>{
        navigate(path, {replace: true});
      };
    

    // let router = useRouter();

    // const goTo = (path) => {
    //     history.pushState(path);
    //     window.location.reload();
    // };

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">iamWandile'sbooking</span>
                {/* <button  className="headerBtn">Register</button> */}
                <div className="navItems">
                <button onClick={() => goTo("/register")} className="navButton">Register</button>
                <Link to='/login'><button  className="navButton">Login / Sign in</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar