import { AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
import { navDatas } from '../../Datas/NavbarQueryset.js';
import { socialDataSet } from "../../Datas/SocialsQueryset.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbarcss.css';


const NavItem = () => {
    return (
        <div className='nav-link-container'>
            <ul className="nav-links">
                { navDatas.map((data) =>
                    <Link 
                        key={data.text} 
                        to={`${data.link}`} 
                        className="nav-link"
                    >
                        {data.text}
                    </Link>
                )}
            </ul>
        </div>
    )
}

const Logos = () =>  {
    return (
        <div className='nav-icon-container'>
            { socialDataSet.map((data) =>
                <Link 
                    key={data.url} 
                    to={`${data.url}`} 
                    className="socials-logo"
                    target="blank"
                >
                   <FontAwesomeIcon icon={data.icon} /> 
                </Link>
            )}
        </div> 
    )
}

const MobileNavItem = () => {
    return (
        <div>
            <ul className='mobile-nav-links'>
                { navDatas.map((data) =>
                    <Link 
                        key={data.id} 
                        to={`${data.link}`} 
                        className="nav-link"
                    >
                        {data.text}
                    </Link>
                )}
            </ul>
        </div>
    )
}

const MobileLogos = () =>{
    return(
        <>
            { socialDataSet.map((data) =>
                <Link 
                    key={data.url} 
                    to={`${data.url}`} 
                    className="socials-logo"
                    target="blank"
                >
                    <FontAwesomeIcon icon={data.icon} /> 
                </Link>
            )}
        </>
    )
}

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    return (
        <>
        <div className="main-container">
            <Logos/>
            <NavItem/>
            <div onClick={handleNav} className='toggle-button'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
            </div>
        </div>
        <div className='side-menu' style={ nav ? {left:"0"}: {left:"-100%"} }>
            <div className="mobile-logo-container">
                <MobileLogos/>  
                <div onClick={handleNav} className='md:hidden absolute top-8 right-10'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
                </div>
            </div>
            <MobileNavItem/>
        </div>
        </>
            
    );
};

export default Navbar;


