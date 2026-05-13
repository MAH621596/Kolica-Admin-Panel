import { Plus } from "@/assets";
import { DashboardLayout } from "@/layouts";
import { Badge, HeroCard, Button } from "@/components";
import { MerchantsTableHeaderData, MerchantTableBodyData } from '@/helper/data';

const Merchants = () => {
    return (
        <DashboardLayout>
            <div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between mb-8">
                    <div>
                        <h5 className="font-semibold text-xl md:text-2xl leading-tight text-[#0F1729]">Merchants</h5>
                        <h6 className="font-normal text-base md:text-lg leading-tight text-[#161819]">€10 package merchants and their listings</h6>
                    </div>
                    <Button pre={true} type="button" text="Add Merchant"
                        icon={<img src={Plus} alt="+" />}
                        className="w-max hover:scale-110 
                    flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs 
                    lg:text-sm !text-white h-[41px]" />
                </div>

                <HeroCard parentClass="h-full !p-5 !m-0 !rounded-[10px] flex-1 border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
                    <div className="rounded-[10px] border border-[#E1E7EF] max-h-[430px] overflow-x-auto overflow-y-auto hide_scrollbar">
                        <table className="w-full border-collapse">
                            <thead className="sticky -top-[2px] z-10 bg-[#F1F5F9]">
                                <tr className="border border-[#E1E7EF] rounded-t-[10px]">
                                    {MerchantsTableHeaderData.map((tabular) => {
                                        return (
                                            <th key={tabular.id} className="px-4 py-2 text-sm lg:text-base font-semibold 
                                            capitalize text-[#161819] text-left">{tabular.tableHeader}</th>
                                        )
                                    })}
                                </tr>
                            </thead>

                            <tbody>
                                {MerchantTableBodyData.map((dataRow, index) => (
                                    <tr key={index} className="border border-[#E1E7EF]">
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.id}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base font-semibold">{dataRow.title}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.username}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.email}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.listings}</td>
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

export default Merchants;