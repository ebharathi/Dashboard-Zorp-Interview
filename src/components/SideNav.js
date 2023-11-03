import NavList from "./NavList";
import NavFooter from "./NavFooter";
import MenuIcon from '@mui/icons-material/Menu';
import { pink,white } from '@mui/material/colors';
import { useState } from "react";
const SideNav=({className=""})=>{
    const [openSide,setOpenSideNav]=useState(false);
    return (
        <div className={className}>
           <div className="title flex space-x-3">
                  <img className="w-10" style={{borderRadius:10}} src="data:image/png;base64,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"/>
                  <h1 className="mt-1 font-bold text-[23px] text-white">ZORP</h1>
                  <span className="flex-[5] text-right text-white pt-1" onClick={()=>setOpenSideNav(!openSide)}><MenuIcon/></span>
           </div>
           {
            openSide&&
             <div className="sidenav-transition">
                <div className="mt-7 text-white">
                        <NavList/>
                </div>
                <div className="text-white flex items-end h-40vh">
                    <NavFooter />
                </div>
            </div>
           }
        </div>
    )
}
export default SideNav;