import { Plus } from "@/assets";
import { DashboardLayout } from "@/layouts";
import { Badge, HeroCard, Button, DashboardCard } from "@/components";
import { TransTableHeaderData, TransTableBodyData, TransCardsData } from '@/helper/data';

const Transactions = () => {

    return (
        <DashboardLayout>
            <div>
                <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between mb-8">
                    <div>
                        <h5 className="font-semibold text-xl md:text-2xl leading-tight text-[#0F1729]">Transactions Management</h5>
                        <h6 className="font-normal text-base md:text-lg leading-tight text-[#161819]">Approve, reject and moderate vehicle listings</h6>
                    </div>
                    <Button pre={true} type="button" text="Invite Dealer"
                        icon={<img src={Plus} alt="+" />}
                        className="w-max hover:scale-110 
                    flex justify-center !bg-[#B1222C] border-[#B1222C] font-semibold text-xs 
                    lg:text-sm !text-white h-[41px]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
                    {TransCardsData.map((card) => (
                        <DashboardCard key={card.id} className="h-[130px] border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
                            <DashboardCard.Body
                                className="flex-col !items-start !justify-center !py-4 !h-full"
                                cardBodyHeading={card.count}
                                cardHeadingClass="!text-4xl order-2"
                                cardSubHeadingClass="text-[#161819] order-1 mb-4"
                                cardBodySubHeading={card.title}
                            />
                        </DashboardCard>
                    ))}
                </div>

                <HeroCard parentClass="!max-w-full !mx-0 h-full !p-5 !m-0 !rounded-[10px] flex-1 border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
                    <div className="rounded-[10px] border border-[#E1E7EF] max-h-[430px] overflow-x-auto overflow-y-auto hide_scrollbar">
                        <table className="w-full border-collapse">
                            <thead className="sticky -top-[2px] z-10 bg-[#F1F5F9]">
                                <tr className="border border-[#E1E7EF] rounded-t-[10px]">
                                    {TransTableHeaderData.map((tabular) => {
                                        return (
                                            <th key={tabular.id} className="px-4 py-2 text-sm lg:text-base font-semibold 
                                            capitalize text-[#161819] text-left">{tabular.tableHeader}</th>
                                        )
                                    })}
                                </tr>
                            </thead>

                            <tbody>
                                {TransTableBodyData.map((dataRow, index) => (
                                    <tr key={index} className="border border-[#E1E7EF]">
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.id}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base font-semibold">{dataRow.title}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.type}</td>
                                        <td className="px-4 py-3 text-[#0F1729] text-sm lg:text-base">{dataRow.price}</td>
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

export default Transactions;