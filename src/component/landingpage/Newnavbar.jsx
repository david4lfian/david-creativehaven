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
        <div id="main_navbar" className="min-w-[450px] w-full block ">
        <div id="navbar" className="flex w-100% text-xl justify-center py-12 md:py-12 ">
            <div className="w-full flex justify-between px-20 sm:px-0 sm:justify-center relative">
                    <ul className="flex gap-x-7 mw950:gap-x-12 font-semibold">
                        <li >
                            {/* <a href="#main_aboutme" className="hidden lg:flex hover:text-hijauA3B18A">About Me</a> */}
                            <Link to="main_newaboutme" spy={true} smooth={true} offset={-80} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A cursor-pointer">About Me</Link>
                        </li>
                        <li>
                            {/* <a href="#main_skills" className="hidden lg:flex hover:text-hijauA3B18A">Skills</a> */}
                            <Link to="main_skills" spy={true} smooth={true} offset={-0} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A cursor-pointer">Skills</Link>
                        </li>
                        <li>
                            {/* <a href="#main_academic-history" className="hidden lg:flex hover:text-hijauA3B18A">History</a> */}
                            <Link to="main_academic-history" spy={true} smooth={true} offset={-42} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A cursor-pointer">History</Link>
                        </li>
                        <li>
                            {/* <a href="#mainPortfolio" className="hidden lg:flex hover:text-hijauA3B18A">Portfolio</a> */}
                            <Link to="mainPortfolio" spy={true} cursor='' smooth={true} offset={-42} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A cursor-pointer">Portfolio</Link>
                        </li>
                        <li>
                            {/* <a href="#mainPortfolio" className="hidden lg:flex hover:text-hijauA3B18A">Portfolio</a> */}
                            <Link to="main_certification" spy={true} cursor='' smooth={true} offset={-42} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A cursor-pointer">Certification</Link>
                        </li>
                    </ul>
                    <button onClick={handleNav} id="sidebar" name="sidebar" type="button" className="sm:hidden ">
                    {nav ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faTimes}/>}
                    </button>
                    <nav id="sidebar" className={nav ?  'hidden' : 'absolute bg-white shadow-lg rounded-lg  right-14 top-[150%] z-[9999]'}>
                        <ul className="gap-8 p-4">
                            <li className="group my-4 mb-6">
                                    <Link to="main_newaboutme"  spy={true} smooth={true} offset={0} duration={700} className=" text-heading4 px-6 py-4 pr-10  group-hover:text-hijau3A5A40 cursor-pointer ">About Me</Link>
                            </li>
                            <li className="group my-4 mb-6">
                                {/* <a href="#main_skills" className="text-heading4 mx-6 group-hover:text-hijau3A5A40">Skills</a> */}
                                <Link to="main_skills" spy={true} smooth={true} offset={20} duration={700} className="text-heading4 px-6 py-4 pr-20  group-hover:text-hijau3A5A40 cursor-pointer">Skills</Link>
                            </li>
                            <li className="group my-4 mb-6">
                                {/* <a href="#main_academic-history" className="text-heading4  mx-6 group-hover:text-hijau3A5A40">History</a> */}
                                <Link to="main_academic-history" spy={true} smooth={true} offset={-42} duration={700} className="text-heading4 px-6 py-4 pr-16  group-hover:text-hijau3A5A40 cursor-pointer">History</Link>
                            </li>
                            <li className="group my-4 mb-6">
                                {/* <a href="#mainPortfolio"  className="text-heading4 mx-6 group-hover:text-hijau3A5A40">Portofolio</a> */}
                                <Link to="mainPortfolio" spy={true} cursor='' smooth={true} offset={-42} duration={700} className="text-heading4 px-6 py-4 pr-14 group-hover:text-hijau3A5A40 cursor-pointer">Portfolio</Link>
                            </li>
                            <li className="group my-4 ">
                                {/* <a href="#mainPortfolio"  className="text-heading4 mx-6 group-hover:text-hijau3A5A40">Portofolio</a> */}
                                <Link to="main_certification" spy={true} cursor='' smooth={true} offset={-42} duration={700} className="text-heading4 px-6 py-4 pr-6  group-hover:text-hijau3A5A40 cursor-pointer">Certification</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </div>
    </div>
        
        
    )
}

export default Navbar