import { useState } from "react";
import { HeaderBtn, Bell } from "@/assets";
import { CustomInput } from "@/components";
import type { NavbarProps } from "@/components/types";

const Navbar = ({
  setOpen,
  className,
}: NavbarProps) => {

  const [search, setSearch] = useState("");

  return (
    <nav
      className={`
        w-full 
        lg:w-[calc(100%_-_290px)] 
        bg-white 
        border-b 
        border-b-[#E1E7EF] 
        h-[80px] 
        px-4 lg:px-8 
        py-3 lg:py-5 
        flex 
        item-center 
        justify-between 
        lg:ml-auto
        
        ${className}`}>

      <div className="flex items-center gap-5">
        <img src={HeaderBtn} alt="btn" className="block lg:hidden w-6 h-6 lg:w-9 lg:h-9 cursor-pointer" onClick={() => setOpen!(true)} />
        <CustomInput
          type="text"
          name="search"
          icon={<i className="fa-solid fa-search text-[#161819] !text-xl opacity-0 md:opacity-100"></i>}
          placeholder="Search listings, users, transactions..."
          value={search}
          onChange={(val) => { setSearch(val as string) }}
          className="hidden md:block text-xs !lg:text-base text-[#161819] bg-[#F1F5F9] border-[#F1F5F9] rounded-lg w-full xl:w-[380px] h-[40px] p-5"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          {/* <i className="fa-solid fa-search text-[#161819] !text-xl block md:hidden"></i> */}
          <img src={Bell} alt="bell" className="w-5 h-5 lg:w-7 lg:h-7" />
          <span className="w-4 h-4 lg:w-5 lg:h-5 bg-[#EF4343] rounded-full font-semibold text-xs text-white flex items-center justify-center
                    absolute top-[-10px] right-[-8px]">3</span>
        </div>
        <div className="flex items-center gap-2 lg:gap-5 border-l border-l-[#E1E7EF] pl-2">
          <span className="w-7 h-7 lg:w-11 lg:h-11 bg-[#2474F5] rounded-full font-normal text-xs text-white flex items-center justify-center">AD</span>
          <div className="flex flex-col items-center gap-0">
            <h5 className="font-semibold text-sm lg:text-lg ledaing-tight text-[#0F1729]">Admin User</h5>
            <h6 className="font-normal text-xs lg:text-base ledaing-tight text-[#161819]">Super Admin</h6>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;