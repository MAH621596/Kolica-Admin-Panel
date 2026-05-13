import type { BadgeProps } from "@/components/types";

const Badge = ({
    text,
    icon,
    className,
    variant = "primary",
}: BadgeProps) => {

    const styles = {
        primary: "bg-[#253A86] text-white border border-[#253A86]",
        secondary: "bg-[#F1F5F9] text-[#0F1729] border border-[#F1F5F9]",
        success: "bg-[#E5FBED] text-[#1FB757] border border-[#E5FBED]",
        danger: "bg-[#FDECEC] text-[#EF4343] border border-[#FDECEC]",
        info: "bg-[#E7F0FE] text-[#2474F5] border border-[#E7F0FE]",
        warning: "bg-[#FEF3E2] text-[#F59F0A] border border-[#FEF3E2]",
    };

    return (
        <div
            className={`${styles[variant]} h-[32px] font-medium text-base px-[15px] py-[10px] capitalize tracking-[1.2px] 
            leading-tight inline-flex items-center justify-center rounded-full
                    gap-2 ${className}`}
        >
            {icon && <span className="flex items-center justify-center w-5 h-5">{icon}</span>}
            {text}
        </div>

    );
};

export default Badge;