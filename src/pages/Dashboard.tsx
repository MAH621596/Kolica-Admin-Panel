import { DashboardLayout } from "@/layouts";
import { Badge, DashboardCard, LineChart, BarChart, HeroCard } from "@/components";
import { dashboardAdminData, dashboardListingData, dashboardRegUsersData } from '@/helper/data';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div>
        <div className="flex flex-col items-start gap-0 mb-6">
          <h5 className="font-semibold text-xl md:text-2xl leading-tight text-[#0F1729]">Dashboard</h5>
          <h6 className="font-normal text-base md:text-lg leading-tight text-[#161819]">Overview of your vehicle marketplace</h6>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dashboardAdminData.map((card) => (
            <DashboardCard key={card.id} className="h-[150px] border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
              <DashboardCard.Header
                headerClass={`flex items-start justify-between ${card.revenue! > 10 ? "text-[#1FB757]" : "text-[#EF4343]"}`}
                cardHeaderText={`${card.revenue! > 10 ? `+${card.revenue}%` : `-${card.revenue}%`}`}
                badgeIcon={<Badge icon={card.icon} variant={card.variant} className="!h-10 !w-10 !rounded-lg" />}
                pre={<i className={`fa ${card.revenue! > 10 ? "fa-arrow-up text-[#1FB757]" : "fa-arrow-down text-[#EF4343]"} !text-xl px-1 rotate-50`}></i>}
              />

              <DashboardCard.Body
                className="flex-col !items-start !py-4"
                cardBodyHeading={card.count}
                cardBodySubHeading={card.title}
              />
            </DashboardCard>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 my-[30px]">
          <div className="flex-1">
            <HeroCard parentClass="h-full !p-5 !mb-0 !rounded-[10px] flex-1 border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
              <div>
                <h2 className="font-semibold text-base md:text-2xl leading-tight">
                  Listings Posted (This Week)</h2>
                <div className="relative">
                  <LineChart
                    labels={['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']}
                    legendPosition="top"
                    categoryPercentage={0.9}
                    tooltipBg="#FFFFFF"
                    borderRadius={40}
                    datasets={[
                      { label: "Listings", fill: true, data: [35, 55, 50, 72, 85, 59, 35], color: "#2474F5", borderColor: "#2474F5", backgroundColor: "rgba(36, 116, 245, 0.2)", },
                    ]}
                  />
                </div>
              </div>
            </HeroCard>
          </div>

          <div className="basis-full md:basis-[230px]">
            <HeroCard parentClass="!p-5 !mb-0 !rounded-[10px] border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
              <div>
                <h2 className="font-semibold text-base md:text-2xl leading-tight">
                  User Growth</h2>
                <div className="relative">
                  <LineChart
                    labels={['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']}
                    legendPosition="top"
                    categoryPercentage={0.9}
                    tooltipBg="#FFFFFF"
                    borderRadius={40}
                    datasets={[
                      {
                        label: "Growth", fill: false, data: [850, 1100, 1600, 1850, 2300, 2600, 3200], color: "#1FB757", borderColor: "#1FB757",
                        pointRadius: 5, pointBorderWidth: 3, pointBackgroundColor: "#FFFFFF", pointBorderColor: "#1FB757"
                      },
                    ]}
                  />
                </div>
              </div>
            </HeroCard>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-4 my-[30px]">
          <div className="flex-1">
            <HeroCard parentClass="h-full !p-0 !mb-0 !rounded-[10px] border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
              <div>
                <h2 className="font-semibold text-base md:text-2xl leading-tight p-5">
                  Latest Listings</h2>
                {dashboardListingData.map((card) => (
                  <div key={card.id} className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-b border-[#C8C8C8] last:border-0">
                    <div className="flex flex-col items-center sm:items-start gap-0">
                      <h5 className="font-semibold text-base leading-tight text-[#0F1729]">{card.title}</h5>
                      <h6 className="font-normal text-sm leading-tight text-[#161819]">{card.subtitle}</h6>
                    </div>

                    <div className="flex items-center gap-4">
                      <h5 className="font-semibold text-base leading-tight text-[#0F1729]">{card.count}</h5>
                      <Badge text={card.badgeLabel} variant={card.variant} className="text-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </HeroCard>
          </div>

          <div className="basis-full md:basis-[230px]">
            <HeroCard parentClass="h-full !p-5 !mb-0 !rounded-[10px] border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
              <div>
                <h2 className="font-semibold text-base md:text-2xl leading-tight">
                  Top Categories</h2>
                <div className="relative">
                  <BarChart
                    labels={['Cars', 'Motors', 'Vans', 'Trucks', 'CaraVans', 'Equipment']}
                    ySuffix={['Cars', 'Motors', 'Vans', 'Trucks', 'CaraVans', 'Equipment']}
                    indexAxis="y"
                    legendPosition="top"
                    categoryPercentage={0.9}
                    tooltipBg="#2474F5"
                    borderRadius={0}
                    datasets={[
                      { label: "Vehicles", data: [13800, 3800, 1600, 900, 600, 500], color: "#2474F5" },
                    ]}
                  />
                </div>
              </div>
            </HeroCard>
          </div>
        </div>

        <div className="flex-1">
          <HeroCard parentClass="!p-0 !mb-0 !rounded-[10px] border border-[#E1E7EF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,.5)]">
            <div>
              <h2 className="font-semibold text-base md:text-2xl leading-tight p-5">
                Recently Registered Users</h2>
              {dashboardRegUsersData.map((card) => (
                <div key={card.id} className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-b border-[#C8C8C8] last:border-0">
                  <div className="flex flex-col items-center sm:items-start gap-0">
                    <h5 className="font-semibold text-base leading-tight text-[#0F1729]">{card.title}</h5>
                    <h6 className="font-normal text-sm leading-tight text-[#161819]">{card.subtitle}</h6>
                  </div>

                  <div className="flex items-center gap-4">
                    <h5 className="font-semibold text-base leading-tight text-[#0F1729]">{card.count}</h5>
                    <Badge text={card.badgeLabel} variant={card.variant} className="text-sm" />
                  </div>
                </div>
              ))}
            </div>
          </HeroCard>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;