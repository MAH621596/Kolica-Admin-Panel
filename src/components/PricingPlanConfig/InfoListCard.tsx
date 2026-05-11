import type { InfoListProps } from "@/components/types";

const InfoListCard = ({ title, data }: InfoListProps) => {
  return (
    <div className="w-full lg:w-[35%] bg-white rounded-[20px] px-[20px] py-[40px] text-left">
      <h2 className="capitalize font-medium text-base md:text-2xl lg:text-medium 
          leading-tight text-black mb-6 lg:mb-[30px]">{title}</h2>

      {data.map((item) => {
        return (
          <>
            <div key={item.id}>
              {item.list && (
                <ul className="list-disc list-outide px-5 my-6 lg:my-5">
                  {item.list.map((point) => (
                    <li key={point.id} className="font-medium text-bermuda text-sm lg:text-lg leading-[27px]">
                      {point.point}
                    </li>
                  ))}
                </ul>
              )}

              {item.package_details_list && (
                <>
                  {item.package_details_list.map((pg) => (
                    <h4 key={pg.id} className="mb-[15px] font-medium text-bermuda text-sm lg:text-lg leading-[27px]">
                      {pg.point}</h4>
                  ))}
                </>)}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default InfoListCard