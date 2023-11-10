import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState (true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div id="main_navbar" className="min-w-[450px] w-full block">
        <div id="navbar" className="flex w-full md:w-[60%] text-xl justify-between items-center">
            <div className="flex items-center">
                <span className=" font-semibold pl-20 md:pl-20 xl:pl-30 my-12 md:my-12">DAA.</span>
            </div>
            <div className="flex items-center pr-20 md:pr-10 relative ">
                    <ul className="flex gap-x-8 font-semibold">
                        <li>
                            {/* <a href="#main_aboutme" className="hidden lg:flex hover:text-hijauA3B18A">About Me</a> */}
                            <Link to="main_aboutme" spy={true} smooth={true} offset={-230} duration={700}  className="hidden lg:flex hover:text-hijauA3B18A cursor-pointer">About Me</Link>
                        </li>
                        <li>
                            {/* <a href="#main_skills" className="hidden lg:flex hover:text-hijauA3B18A">Skills</a> */}
                            <Link to="main_skills" spy={true} smooth={true} offset={-0} duration={700}  className="hidden lg:flex hover:text-hijauA3B18A cursor-pointer">Skills</Link>
                        </li>
                        <li>
                            {/* <a href="#main_academic-history" className="hidden lg:flex hover:text-hijauA3B18A">History</a> */}
                            <Link to="main_academic-history" spy={true} smooth={true} offset={-42} duration={700}  className="hidden lg:flex hover:text-hijauA3B18A cursor-pointer">History</Link>
                        </li>
                        <li>
                            {/* <a href="#mainPortfolio" className="hidden lg:flex hover:text-hijauA3B18A">Portfolio</a> */}
                            <Link to="mainPortfolio" spy={true} cursor='' smooth={true} offset={-42} duration={700}  className="hidden lg:flex hover:text-hijauA3B18A cursor-pointer">Portfolio</Link>
                        </li>
                        {/* <li> */}
                            {/* <a href="#mainPortfolio" className="hidden lg:flex hover:text-hijauA3B18A">Portfolio</a> */}
                            {/* <Link to="main_certification" spy={true} cursor='' smooth={true} offset={-42} duration={700}  className="hidden lg:flex hover:text-hijauA3B18A cursor-pointer">Certification</Link>
                        </li> */}
                    </ul>
                <button onClick={handleNav} id="sidebar" name="sidebar" type="button" className=" lg:hidden">
                {nav ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faTimes}/>}
                </button>
                <nav id="sidebar" className={nav ?  'hidden' : 'absolute bg-white shadow-lg rounded-lg max-w-[250px] w-full right-6 top-[125%] z-[9999]'}>
                        <ul className="block">
                            <li className="group my-4 ">
                                {/* <a href="#main_aboutme" className="text-heading4 mx-6 group-hover:text-hijau3A5A40">About Me</a> */}
                                <Link to="main_aboutme" spy={true} smooth={true} offset={-230} duration={700} className="text-heading4 mx-6 group-hover:text-hijau3A5A40 cursor-pointer">About Me</Link>
                            </li>
                            <li className="group my-4">
                                {/* <a href="#main_skills" className="text-heading4 mx-6 group-hover:text-hijau3A5A40">Skills</a> */}
                                <Link to="main_skills" spy={true} smooth={true} offset={20} duration={700} className="text-heading4 mx-6 group-hover:text-hijau3A5A40 cursor-pointer">Skills</Link>
                            </li>
                            <li className="group my-4">
                                {/* <a href="#main_academic-history" className="text-heading4  mx-6 group-hover:text-hijau3A5A40">History</a> */}
                                <Link to="main_academic-history" spy={true} smooth={true} offset={-42} duration={700} className="text-heading4 mx-6 group-hover:text-hijau3A5A40 cursor-pointer">History</Link>
                            </li>
                            <li className="group my-4">
                                {/* <a href="#mainPortfolio"  className="text-heading4 mx-6 group-hover:text-hijau3A5A40">Portofolio</a> */}
                                <Link to="mainPortfolio" spy={true} cursor='' smooth={true} offset={-42} duration={700} className="text-heading4 mx-6 group-hover:text-hijau3A5A40 cursor-pointer">Portfolio</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </div>
    </div>
        
        
    )
}

export default Navbar