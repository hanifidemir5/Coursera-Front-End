import { AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { navDatas } from '../../Datas/NavbarQueryset.js';
import { socialDataSet } from "../../Datas/SocialsQueryset.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbarcss.css"

const NavItem = ({data}) => {
    const [isOpen, setIsopen] = useState(false);

    const mouseOverLink = () => {
        setIsopen(true)
    }

    const mouseLeaveLink = () => {
        setIsopen(false)
    }

    const handleClick = () => {
        setIsopen(false)
    }

    return(
            <div 
                className="nav-link-div"
                onMouseOver={mouseOverLink} onMouseLeave={mouseLeaveLink}
                onClick={handleClick}
                style={{flex:data.flex}}
            >
                <Link 
                    key={data.text} 
                    to={`${data.link}`} 
                    className='nav-link-child'
                >
                    {data.text}
                </Link>
                { isOpen && data.subRoutes && data.subRoutes.length > 0 && (
                <div className="sub-routes">
                    {
                        data.subRoutes.map((route, index) => (
                            <Link key={index} to={route.to}>
                                {route.title}
                            </Link>
                        ))
                    }
                </div>
                )}
            </div>
    )
}

const NavItemList = () => {
    return (
        <div className='nav-link-container'>
            <ul className="nav-links">
                { navDatas.map((data) =>
                    <NavItem data={data}></NavItem>
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
                    target = {
                        data.url == "/routes" 
                        ?  null
                        : "blank"
                    }
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
                        className="mobile-nav-link"
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
      <div className='w-full bg-[#504136]'>
        <div className='flex justify-center'>
            <div className="main-container">
                <Logos/>
                <NavItemList/>
                <div onClick={handleNav} className='toggle-button'>
                    {nav ? <AiOutlineClose style={{transition:"all ease 1s"}} size={35}/> : <AiOutlineMenu size={35} /> }
                </div>
            </div>
            <div className='side-menu' style={ nav ? {left:"0"}: {left:"-100%"} }>
                <div className="mobile-logo-container">
                    <MobileLogos/>  
                    <div onClick={handleNav} className='mobile-toggle-button'>
                        {nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35} /> }
                    </div>
                </div>
                <MobileNavItem/>
            </div>
        </div>
      </div>
    );
};

export default Navbar;



