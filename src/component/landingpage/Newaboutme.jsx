import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare ,faLinkedin, faBehanceSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";

import crop from '../../img/crop.webp';
import cv from '../../assets/CV_ATS_DAVID.pdf';

const Newaboutme = () => {

    return (
    <div id="main_newaboutme" name="main_newaboutme" className="min-w-[450px] md:h-[500px] xl:h-630 w-full md:w-full xl:w-full flex flex-col md:flex-row bg-hijauDAD7CD">
        
        <div id="hero_kiri"  className="  order-1 md:w-[35%] flex  pb-10 pt-10 md:py-0">
            <img src={crop} className=" mx-auto my-auto rounded-full w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]
        md:w-[250px] md:h-[250px] nv970:w-[300px] nv970:h-[300px] lg:w-[325px] lg:h-[325px] mw1145:w-[370px] mw1145:h-[370px] xl:w-[400px] xl:h-[400px] mw1500:w-[425px] mw1500:h-[425px] drop-shadow-md" alt="crop"></img>
        </div>
        
        <div id="hero_tengah" className=" order-2 md:w-[40%] flex flex-col pl-20 pr-20 pb-0 pt-0 xl:px-0 xl:pt-24 md:py-20 md:px-4  ">
            <span className="text-heading2 sm:text-headisng2 md:text-heading2 lg:text-heading2 xl:text-heading1 font-semibold text-hijau344E41">Hello World👋</span>
            
            <p class="leading-relaxed text-heading4 md:leading-relaxed md:text-heading5 lg:text-heading5 lg:leading-relaxed xl:leading-relaxed xl:text-heading4 font-normal text-justify mt-8">“ I am very interested in the UI/UX design Industry, now I'm focusing on learning UX research, design exploration and doing some case studies and because i have a basic of programming, i still struggled to learn javascript as a front end engineer ”</p>

            <div className="flex flex-row items-center ">
            <a href={cv} download className="w-full sm:w-[60%] md:w-full lg:w-[80%] p-4 group text-center bg-hijau588157 hover:bg-hijau3A5A40 mt-8" >
                    <FontAwesomeIcon icon={faDownload} className="pr-4 text-white"/>
                    <span className="transition text-heading5 sm:text-heading5 md:text-heading5 xl:text-heading5 font-bold text-white ">Download My Resume</span>
                </a>
            </div>
               
            
        </div>
        
        <div id="hero_kanan" className="order-3  md:w-[25%] flex justify-start flex-col pl-20 pr-20 pb-10 pt-10 xl:px-10 md:pl-4 md:pr-4 md:py-20 xl:pt-24 gap-4 ">

            <span className="text-heading2 md:text-heading3 font-normal mb-4">
                Let's Connect!
            </span>
            
            <div className="flex flex-row items-center group gap-4">
                <a href="https://github.com/david4lfian" className="w-full sm:w-[60%] md:w-full pl-12 md:pl-6 p-4 bg-[#050505] transition-all duration-300 hover:bg-[#313131] hover:rounded-md">
                    <FontAwesomeIcon icon={faGithubSquare} className="pr-4 text-white" />   
                    <span className="transition text-heading5 sm:text-heading5 md:text-heading5 text-white font-normal">Github</span>
                </a>
            </div>
             
            <div className="flex flex-row items-center group gap-4">
                <a href="https://www.linkedin.com/in/davidalfianariyoga/" className="w-full sm:w-[60%] md:w-full pl-12 md:pl-6 p-4 bg-[#00457a] transition-all duration-300 hover:bg-[#005493] hover:rounded-md ">
                    <FontAwesomeIcon icon={faLinkedin} className="pr-4 text-white"/>
                    <span className="transition text-heading5 sm:text-heading5 md:text-heading5 text-white font-normal ">Linkedin</span>
                </a>
            </div>
             
            <div className="flex flex-row items-center group gap-4">
                <a href="https://www.behance.net/david4lfian" className="w-full sm:w-[60%] md:w-full pl-12 md:pl-6 p-4 bg-[#0057ff] transition-all duration-300 hover:bg-[#064acc] hover:rounded-md ">
                    <FontAwesomeIcon icon={faBehanceSquare} className="pr-4 text-white"/>
                    <span className="transition text-heading5 sm:text-heading5 md:text-heading5 text-white font-normal">Behance</span>
                </a>
            </div>
            
            <div className="flex flex-row items-center group gap-4">
                <a href="https://www.instagram.com/alfian.dv/" className="w-full sm:w-[60%] md:w-full pl-12 md:pl-6 p-4 bg-[#ffffff]  transition-all duration-300 hover:bg-[#e5e5e5] hover:rounded-md ">
                    <FontAwesomeIcon icon={faInstagramSquare} className="pr-4 text-black"/>
                    <span className="transition text-heading5 sm:text-heading5 md:text-heading5 text-black font-normal">Instagram</span>
                </a>
            </div>
            
            
            
        </div>
    </div>   
    )
}

export default Newaboutme