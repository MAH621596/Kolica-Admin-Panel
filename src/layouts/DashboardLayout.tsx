import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Navbar, Sidebar } from "@/components";
import type { DashboardLayoutProps } from "@/components/types";

const DashboardLayout = ({
    children,
}: DashboardLayoutProps) => {
    const [open, setOpen] = useState(false);
    const loggedIn = useSelector(
        (state: RootState) => state.auth.loggedIn
    );

    return (
        <>
            <div>
                <Navbar
                    setOpen={setOpen}
                    logStatus={loggedIn}
                />

                <div className="lg:ml-[290px] p-4 lg:p-10">
                    {children}
                </div>
            </div>

            <Sidebar
                open={open}
                setOpen={setOpen}
                logStatus={loggedIn}
            />
        </>
    );
};

export default DashboardLayout;