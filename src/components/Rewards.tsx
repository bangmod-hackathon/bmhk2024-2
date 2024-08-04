const AwardData = [
  {
    title: 'รางวัลชนะเลิศ',
    prize: '30,000 บาท',
    image: '/chest/chest1.png',
    trophy: 'พร้อมโล่เกียรติคุณ'
  },
  {
    title: 'รางวัลรองชนะเลิศอันดับที่ 1',
    prize: '15,000 บาท',
    image: '/chest/chest2.png',
    trophy: 'พร้อมโล่เกียรติคุณ'
  },
  {
    title: 'รางวัลรองชนะเลิศอันดับที่ 2',
    prize: '5,000 บาท',
    image: '/chest/chest3.png',
    trophy: 'พร้อมโล่เกียรติคุณ'
  }
]

const getOrderClass = (index: number) => {
  if (index === 1) return 'md:order-first'
  if (index === 0) return 'md:order-2'
  return 'md:order-3'
}

const RewardsWaviez = () => {
  return (
    <div className=" items-center py-32 flex flex-col justify-center sm:px-16 md:px-0">
      <p className="text-center text-4xl text-white font-heading py-12">รางวัลการแข่งขัน</p>
      <div className=" w-3/4 md:w-11/12 xl:w-9/12 2xl:w-[70%] flex flex-col md:flex-row justify-center gap-x-6 2xl:gap-x-9 gap-y-16 items-baseline">
        {AwardData.map((award, index) => (
          <div key={index} className={`w-full flex flex-col items-center justify-end ${getOrderClass(index)}`}>
            <div
              className={`${index === 1 || index === 2 ? ' w-4/5 lg:w-10/12 transform scale-x-[-1]' : 'w-full'}  flex justify-end`}
            >
              <img
                src={award.image}
                alt=""
                className={` hover:drop-shadow-[0_10px_80px_rgba(255,255,255,0.30)] duration-500`}
              />
            </div>
            <div className="w-full h-full bg-[#c7c7c7]/20 border border-[#c7c7c7] rounded-3xl flex flex-col items-center justify-center md:min-h-40">
              <div className="flex flex-col p-4 text-center gap-y-1 h-full justify-center">
                <p className=" text-xl md:text-2xl text-primary_yellow-100 font-ibm font-normal text_shadow text-balance md:text-wrap lg:whitespace-nowrap">
                  {award.title}
                </p>
                <p className=" md:text-lg text-[#9ddef9] font-ibm font-normal text_shadow">{award.prize}</p>
                <p className=" md:text-lg text-[#9ddef9] font-ibm font-normal text_shadow">{award.trophy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-8 w-3/4 md:w-1/3 bg-[#c7c7c7]/20 border border-[#c7c7c7] rounded-2xl items-center justify-center min-w-72">
        <div className="flex flex-row px-4 py-5 text-center items-center gap-x-4 gap-y-1 h-full justify-center">
          <p className=" text-xl md:text-2xl text-primary_yellow-100 font-ibm font-normal text_shadow text-balance md:text-wrap lg:whitespace-nowrap">
            รางวัลชมเชย
          </p>
          <p className=" md:text-lg text-[#9ddef9] font-ibm font-normal text_shadow">2,000 บาท</p>
        </div>
      </div>
    </div>
  )
}

export default RewardsWaviez
