import { useState } from "react";
import { DashboardLayout } from "@/layouts";
import { Plus, ListingBusiness, ListingUser } from "@/assets";
import { Badge, HeroCard, Button, CustomInput } from "@/components";
import { ListingsTableHeaderData, ListingsTableBodyData, ListingsTabData } from '@/helper/data';

const Listings = () => {
    const [search, setSearch] = useState("");

    return (
        <DashboardLayout>
            <div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between mb-8">
                    <div>
                        <h5 className="font-semibold text-xl md:text-2xl leading-tight text-[#0F1729]">Listings Management</h5>
                        <h6 className="font-normal text-base md:text-lg leading-tight text-[#161819]">Approve, reject and moderate vehicle listings</h6>
                    </div>
                    <Button pre={true} type="button" text="New Listing"
                        icon={<img src={Plus} alt="+" />}
                        className="w-max hover:scale-110 
                    flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs 
                    lg:text-sm !text-white h-[41px]" />
                </div>

                <HeroCard parentClass="!max-w-full !mx-0 h-full !p-5 !m-0 !rounded-[10px] flex-1 border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 mb-8">
                        <div className="bg-[#F1F5F9] rounded-lg h-full md:h-[50px] flex flex-wrap items-center">
                            {ListingsTabData.map((tab) => (
                                <span key={tab.id} className={`font-normal text-base lg:text-lg leading-tight text-[#161819] m-2 py-1.5 px-3.5
                                    ${tab.active ? "bg-[#F9FAFB] rounded-md font-semibold" : ""}`}>{tab.tab}</span>
                            ))}
                        </div>
                        <CustomInput
                            type="text"
                            name="search"
                            icon={<i className="fa-solid fa-search text-[#161819] !text-base mt-2"></i>}
                            placeholder="Search listings..."
                            value={search}
                            onChange={(val) => { setSearch(val as string) }}
                            className="!text-sm text-[#161819] bg-[#F1F5F9] border-[#F1F5F9] rounded-lg w-full xl:w-[270px] h-[50px] p-5"
                        />
                    </div>

                    <div className="rounded-[10px] border border-[#E1E7EF] max-h-[430px] overflow-x-auto overflow-y-auto hide_scrollbar">
                        <table className="w-full border-collapse">
                            <thead className="sticky -top-[2px] z-10 bg-[#F1F5F9]">
                                <tr className="border border-[#E1E7EF] rounded-t-[10px]">
                                    {ListingsTableHeaderData.map((tabular) => {
                                        return (
                                            <th key={tabular.id} className="px-4 py-2 text-sm lg:text-base font-semibold 
                                            capitalize text-[#161819] text-left">{tabular.tableHeader}</th>
                                        )
                                    })}
                                </tr>
                            </thead>

                            <tbody>
                                {ListingsTableBodyData.map((dataRow, index) => (
                                    <tr key={index} className="border border-[#E1E7EF]">
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.id}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base font-semibold">{dataRow.title}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.price}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base flex items-center gap-5 min-w-0">
                                            {dataRow.type == "user" ? <ListingUser className="min-h-6 min-w-6" /> : <ListingBusiness className="min-h-6 min-w-6" />}
                                            {dataRow.seller}
                                        </td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.location}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">
                                            <Badge text={dataRow.status} variant={dataRow.variant} className="text-sm" />
                                        </td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.posted}</td>
                                        <td className="py-3 text-[#0F1729] text-sm lg:text-base">
                                            <i className="fa fa-ellipsis"></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </HeroCard>
            </div>
        </DashboardLayout>
    );
}

export default Listings;