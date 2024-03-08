import "../assets/css/NavbarViewStyles.css"
import { AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
import { navDatas } from '../Datas/NavbarQueryset.js';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    return (
        <div className="flex items-center self-center h-24  px-[20px] md:px-[152px] max-w-[1575px] w-full bg-[#504136]">
            <div className='w-1/2'>
                <Link key="default-logo" to="/">
                    <img src={"TÜBİTAK_logo.svg.png"} alt="" className="h-10" />
                </Link>  
            </div>  
            <div className='w-1/2  items-center'>
                <ul className="hidden xl:flex text-center flex-nowrap">
                    { navDatas.map((data) =>
                        <Link key={data.id} to={`${data.link}`} className="hover:bg-[#1A412E] hover:text-white font-bold py-2 text-[#EFF1ED] rounded-full flex-1 self-center">{data.text}</Link>
                    )}
                </ul>
            </div>
            <div onClick={handleNav} className='block xl:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
            </div>
            <div className={`xl:hidden ${nav ? 'fixed left-0 top-0 bottom-0 w-5/6 max-w-sm py-6 px-6 bg-[#504136] border-r overflow-y-auto ease-in-out duration-500' : 'top-0 bottom-0 w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto ease-in-out duration-500 fixed left-[-100%]'} flex flex-col space-y-4`}>
                <div className="flex justify-center items-center mb-8">
                    <Link className="text-3xl flex" key="mobile-key" to="/">
                        <img src={"TÜBİTAK_logo.svg.png"} alt="Logo" className="h-10"/>
                    </Link>
                    <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col text-center flex-nowrap'>
                        { navDatas.map((data) =>
                            <Link key={data.id} to={`${data.link}`} className="hover:bg-[#1A412E] hover:text-white text-[#EFF1ED] font-bold py-2 rounded-full block w-full self-center">{data.text}</Link>
                        )}
                    </ul>
                </div>
            </div>
        </div>
            
    );
};

export default Navbar;



