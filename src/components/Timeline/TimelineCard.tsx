interface CardProps {
  title: string
  title2?: string
  string_date: string
  date: Date
  gem_pic: string
  className?: string
}

const TimelineCard = ({ title, title2, string_date, gem_pic, className }: CardProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className={` relative ${className}`}>
        <img src={gem_pic} alt="" />
      </div>
      <div className=" w-full h-full rounded-3xl border border-[#C7C7C7] bg-[#C7C7C7]/20">
        <div className="flex flex-col w-full h-full justify-center items-center gap-y-2 pt-9 pb-6 px-2 sm:px-4">
          <p className=" text-sm sm:text-lg h-16 flex flex-col justify-center text-center font-ibm font-semibold text-secondary_blue-100">
            {title}
            <br />
            {title2}
          </p>
          <p className=" font-ibm font-normal text-balance text-center text-primary_yellow-100">{string_date}</p>
        </div>
      </div>
    </div>
  )
}

export default TimelineCard
