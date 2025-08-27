import './NavBar.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
function NavBar({setShowLogin}){

    const [menu,setMenu]=useState("home");
    const {getTotalAmout,token,setToken}=useContext(StoreContext);

    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")

    }
    return(
        <>
       <div className="navbar">
        <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link>
       <ul className='navbar-menu'>
  <Link to='/' onClick={() => setMenu("home")} className={menu==="home" ? "active" : ""}>
    Home
  </Link>
  <a
    href="#explore-menu"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("explore-menu").scrollIntoView({ behavior: "smooth" });
      setMenu("menu");
    }}
    className={menu==="menu" ? "active" : ""}
  >
    Menu
  </a>
  <a
    href="#app-download"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("app-download").scrollIntoView({ behavior: "smooth" });
      setMenu("mobile-app");
    }}
    className={menu==="mobile-app" ? "active" : ""}
  >
    Mobile App
  </a>
  <a
    href="#footer"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
      setMenu("contact-us");
    }}
    className={menu==="contact-us" ? "active" : ""}
  >
    Contact Us
  </a>
</ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalAmout()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>:<div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className='nav-profile-dropdown'>
                    <li onClick={()=>navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li  onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
                </div>}
            
        </div>
       </div>
        
        </>
    )
}
export default NavBar;