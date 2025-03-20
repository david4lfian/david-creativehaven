import React, { useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll';
import {motion, useViewportScroll } from "framer-motion";


const Navbar = () => {
    const [nav, setNav] = useState (true)

    const handleNav = () => {
        setNav(!nav)
    }

    /** this hook gets the scroll y-axis **/
    const { scrollY } = useViewportScroll();
    /** this hook manages state **/
    const [hidden, setHidden] = React.useState(false);

    function update() {
        if (scrollY?.current < scrollY?.prev) {
          setHidden(false);
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
          setHidden(true);
        }
      }

    React.useEffect(() => {
        return scrollY.onChange(() => update());
    });

    return (
        
            <motion.nav 
                variants={{
                    visible: { y: 0},   
                    hidden: {opacity: 0, y: "-100%"},
                }}
                animate= {hidden ? "hidden" : "visible"}
           
                
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.8 }}

                className= "fixed z-50 bg-[#f6f6f6] bg-opacity-[0.65]  min-w-[450px] w-full flex w-100% text-xl py-10 sm:py-10 justify-between px-20 sm:px-0 sm:justify-center">
                    <ul className="flex gap-x-7 mw950:gap-x-12 font-medium">
                        <li >
                            {/* <a href="#main_aboutme" className="hidden lg:flex hover:text-hijauA3B18A">About Me</a> */}
                            <Link to="main_newaboutme" spy={true} smooth={true} offset={-80} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A text-hijau344E41 cursor-pointer">About Me</Link>
                        </li>
                        <li>
                            {/* <a href="#main_skills" className="hidden lg:flex hover:text-hijauA3B18A">Skills</a> */}
                            <Link to="main_skills" spy={true} smooth={true} offset={-0} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A text-hijau344E41 cursor-pointer">Skills</Link>
                        </li>
                        <li>
                            {/* <a href="#main_academic-history" className="hidden lg:flex hover:text-hijauA3B18A">History</a> */}
                            <Link to="main_academic-history" spy={true} smooth={true} offset={-42} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A text-hijau344E41 cursor-pointer">History</Link>
                        </li>
                        <li>
                            {/* <a href="#mainPortfolio" className="hidden lg:flex hover:text-hijauA3B18A">Portfolio</a> */}
                            <Link to="mainPortfolio" spy={true} cursor='' smooth={true} offset={-42} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A text-hijau344E41 cursor-pointer">Portfolio</Link>
                        </li>
                        <li>
                            {/* <a href="#mainPortfolio" className="hidden lg:flex hover:text-hijauA3B18A">Portfolio</a> */}
                            <Link to="main_certification" spy={true} cursor='' smooth={true} offset={-42} duration={700}  className="hidden sm:flex hover:text-hijauA3B18A text-hijau344E41 cursor-pointer">Certification</Link>
                        </li>
                    </ul>
                    <button onClick={handleNav} id="sidebar" name="sidebar" type="button" className="sm:hidden ">
                    {nav ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faTimes}/>}
                    </button>
                    <nav id="sidebar" className={nav ?  'hidden' : 'absolute bg-white shadow-lg rounded-lg  right-14 top-[100%] z-[9999]'}>
                        <ul className="gap-8 p-4">
                            <li className="group my-4 mb-6">
                                    <Link to="main_newaboutme"  spy={true} smooth={true} offset={0} duration={700} className=" text-heading4 px-6 py-4 pr-10   cursor-pointer ">About Me</Link>
                            </li>
                            <li className="group my-4 mb-6">
                                {/* <a href="#main_skills" className="text-heading4 mx-6 group-hover:text-hijau3A5A40">Skills</a> */}
                                <Link to="main_skills" spy={true} smooth={true} offset={20} duration={700} className="text-heading4 px-6 py-4 pr-20   cursor-pointer">Skills</Link>
                            </li>
                            <li className="group my-4 mb-6">
                                {/* <a href="#main_academic-history" className="text-heading4  mx-6 group-hover:text-hijau3A5A40">History</a> */}
                                <Link to="main_academic-history" spy={true} smooth={true} offset={-42} duration={700} className="text-heading4 px-6 py-4 pr-16  cursor-pointer">History</Link>
                            </li>
                            <li className="group my-4 mb-6">
                                {/* <a href="#mainPortfolio"  className="text-heading4 mx-6 group-hover:text-hijau3A5A40">Portofolio</a> */}
                                <Link to="mainPortfolio" spy={true} cursor='' smooth={true} offset={-42} duration={700} className="text-heading4 px-6 py-4 pr-14  cursor-pointer">Portfolio</Link>
                            </li>
                            <li className="group my-4 ">
                                {/* <a href="#mainPortfolio"  className="text-heading4 mx-6 group-hover:text-hijau3A5A40">Portofolio</a> */}
                                <Link to="main_certification" spy={true} cursor='' smooth={true} offset={-42} duration={700} className="text-heading4 px-6 py-4 pr-6   cursor-pointer">Certification</Link>
                            </li>
                        </ul>
                    </nav>
            </motion.nav>

        
    )
}

export default Navbar


// <motion.nav 
//         variants={{
//             visible: {y: 0},
//             hidden: {y: "-100%"},
//         }}
//         animate={hidden ? "hidden" : "visible"}
//         transition={{ duration: 0.75, ease: "easeInOut" }}
//         id="main_navbar" className="">

// </motion.nav>







//     const {scrollY} = useScroll();
//     const [hidden, setHidden] = useState(false);

//     useMotionValueEvent(scrollY, "change", (latest) => {
//         const previous = scrollY.getPrevious();
//         console.log(latest, previous);
//         if(latest > previous){
//             setHidden(true);
//         }else{
//             setHidden(false);
//         }
// });