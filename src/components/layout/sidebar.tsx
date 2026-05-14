import { useEffect } from "react";
import { Logo, Avatar } from "@/assets";
import { navbarLinks } from '@/helper/data';
import { Link, useNavigate, useLocation } from "react-router-dom";
import type { SidebarProps } from "@/components/types";

const Sidebar = ({
  open,
  setOpen,
  className,
  logStatus,
}: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (linkName: string) => {
    console.log("link name ?", linkName, logStatus)
    if (!logStatus) {
      navigate(linkName);
    }
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <aside
      className={`
        w-[290px] 
        bg-[#253A86]  
        text-white 
        h-screen 
        p-0 
        fixed
        top-0
        left-0
        z-50
            flex flex-col
    overflow-hidden
    
        transition-transform
        duration-300
        ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        ${className}`}>

      {/* Top bar */}
      <div className="flex flex-col h-full w-full">

        <div className="flex items-center justify-between px-10 py-5 mb-5 w-full">

          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-[104px] h-[38px]" />
            </Link>
          </div>

          {/* Close */}
          <span onClick={() => { setOpen!(false) }}
            className="block lg:hidden text-2xl">
            ✕
          </span>
        </div>

        {/* Current Profile */}
        <div className="flex items-center gap-5 px-10 mb-5 w-full">
          <span className="w-12 h-12 bg-[#2474F5] rounded-full font-normal text-xs text-white flex items-center justify-center">
            <img src={Avatar} alt="btn" className="w-full h-full" />
          </span>
          <div className="flex flex-col items-center gap-0">
            <h5 className="font-medium text-xl ledaing-tight text-white">Jeremy martins</h5>
          </div>
        </div>

        {/* Links */} 
        <div className="flex flex-col gap-6 items-start px-10 py-6 w-full overflow-y-auto flex-1 min-h-0">
          {navbarLinks.map((link, index) => {
            const isActive = location.pathname === link.href ||
            (location.pathname === "/" && link.href === "/dashboard");

            return (
              <div key={index} onClick={() => handleClick(link.href)}
                className={`cursor-pointer flex items-center justify-start gap-[10px] font-normal 
                  text-base transition-all duration-200 hover:opacity-80
                  ${isActive ? "bg-white rounded-4xl h-[50px] text-[#0F1729] px-6.5 py-2" : "text-white"}`}>
                <div>{link.icon}</div>
                {link.link_text}
              </div>)
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;