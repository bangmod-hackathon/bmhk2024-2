import { Typography } from 'antd'
import React from 'react'

const consolationPrize = {
  title: 'รางวัลชมเชย',
  amount: '2,000 บาท'
}

const Rewards: React.FC = () => {
  const { Text } = Typography

  const prizes = [
    {
      id: 1,
      title: 'รางวัลชนะเลิศ',
      amount: '30,000 บาท',
      image: '/img/chest1.png'
    },
    {
      id: 2,
      title: 'รางวัลรองชนะเลิศอันดับ1',
      amount: '15,000 บาท',
      image: '/img/chest2.png'
    },
    {
      id: 3,
      title: 'รางวัลรองชนะเลิศอันดับ2',
      amount: '5,000 บาท',
      image: '/img/chest3.png'
    }
  ]
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center bg-[#0E2A3F] lg:py-[12rem] py-[8rem]">
        <h1 className="mb-8 text-center font-heading text-4xl text-[#FDEDDC]">รางวัลการแข่งขัน</h1>
        <div className="grid grid-cols-1 flex-wrap justify-center gap-8 md:grid-cols-3 md:gap-4">
          <div className="flex flex-col items-center md:order-2">
            <img
              src={prizes[0].image}
              alt={prizes[0].title}
              className="pointer-events-none mb-4 transition duration-0 hover:scale-105 hover:drop-shadow-[0_20px_20px_rgba(255,255,255,0.15)] hover:duration-700 sm:size-64 md:h-72 md:w-80 lg:size-96"
            />
            <div className="rounded-3xl border border-[#C7C7C7] bg-[rgba(199,_199,_199,_0.21)] p-4 text-center sm:h-28 sm:w-64 md:h-36 md:w-56 lg:h-36 lg:w-96">
              <h2 className="my-1 font-body text-[#EBD176] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-xl md:text-xl lg:text-2xl">
                {prizes[0].title}
              </h2>
              <p className="my-1 font-body text-[#9EDFFA] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-sm md:text-base lg:text-lg">
                {prizes[0].amount}
              </p>
              <p className="my-1 font-body text-[#9EDFFA] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-sm md:text-base lg:text-lg">
                พร้อมโล่เกียรติคุณ
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:order-1 lg:mt-16">
            <img
              src={prizes[1].image}
              alt={prizes[1].title}
              className="pointer-events-none mb-4 transition duration-0 hover:scale-105 hover:drop-shadow-[0_20px_20px_rgba(255,255,255,0.15)] hover:duration-700 sm:size-64 md:h-72 md:w-80 lg:size-80"
            />
            <div className="rounded-3xl border border-[#C7C7C7] bg-[rgba(199,_199,_199,_0.21)] p-4 text-center sm:h-28 sm:w-64 md:h-36 md:w-56 lg:h-36 lg:w-96">
              <h2 className="my-1 font-body text-[#EBD176] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-xl md:text-xl lg:text-2xl">
                {prizes[1].title}
              </h2>
              <p className="my-1 font-body text-[#9EDFFA] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-sm md:text-base lg:text-lg">
                {prizes[1].amount}
              </p>
              <p className="my-1 font-body text-[#9EDFFA] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-sm md:text-base lg:text-lg">
                พร้อมโล่เกียรติคุณ
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:order-3 lg:mt-16">
            <img
              src={prizes[2].image}
              alt={prizes[2].title}
              className="pointer-events-none mb-4 transition duration-0 hover:scale-105 hover:drop-shadow-[0_20px_20px_rgba(255,255,255,0.15)] hover:duration-700 sm:size-64 md:h-72 md:w-80 lg:size-80"
            />
            <div className="rounded-3xl border border-[#C7C7C7] bg-[rgba(199,_199,_199,_0.21)] p-4 text-center sm:h-28 sm:w-64 md:h-36 md:w-56 lg:h-36 lg:w-96 ">
              <h2 className="my-1 font-body text-[#EBD176] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-lg md:text-lg lg:text-2xl">
                {prizes[2].title}
              </h2>
              <p className="my-1 font-body text-[#9EDFFA] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-sm md:text-base lg:text-lg">
                {prizes[2].amount}
              </p>
              <p className="my-1 font-body text-[#9EDFFA] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-sm md:text-base lg:text-lg">
                พร้อมโล่เกียรติคุณ
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="flex flex-row items-center justify-center rounded-xl border border-[#C7C7C7] bg-[rgba(199,_199,_199,_0.21)] p-4 text-center sm:h-12 sm:w-64 sm:rounded-xl md:h-12 md:w-64	md:rounded-xl	lg:h-24 lg:w-[586px]">
            <Text className="mr-2 text-center font-body text-[#EBD176] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-xl md:text-xl lg:lg:text-2xl">
              {consolationPrize.title}
            </Text>
            <Text className="font-body text-[#9EDFFA] [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] sm:text-sm md:text-base lg:text-lg">
              {consolationPrize.amount}
            </Text>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Rewards
