import React, { useEffect, useRef, useState } from 'react'
import TimelineCard from './TimelineCard'
import { motion, useInView } from 'framer-motion'
import { timelineData } from './timelineData'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth
}

const Timeline: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentDate = new Date()
  const desktopRef = useRef(null)
  const mobileRef = useRef(null)
  const isInViewDesktop = useInView(desktopRef)
  const isInViewMobile = useInView(mobileRef)

  const windowWidth = useWindowWidth()

  const getCurrentIndex = () => {
    const index = timelineData.findIndex((data, index) => {
      const nextDate = timelineData[index + 1]?.date
      return currentDate >= data.date && (nextDate ? currentDate < nextDate : true)
    })

    return index >= timelineData.length - 1 ? timelineData.length - 1 : index
  }

  useEffect(() => {
    setCurrentIndex(getCurrentIndex())
  }, [currentDate])

  const isDesktop = windowWidth >= 1280 // Example breakpoint for desktop

  return (
    <div className="w-full h-full">
      <div className=" flex w-full justify-center py-4">
        <p className=" text-5xl text-white font-heading">กำหนดการ</p>
      </div>
      {isDesktop ? (
        <div className="relative w-full h-auto pb-12 hidden xl:flex overflow-x-hidden">
          <div className="relative flex flex-col px-4 gap-y-24 justify-center w-fit m-auto">
            <div className="flex flex-row gap-x-5 justify-center">
              {timelineData.map((data, index) => {
                const isCurrent = currentIndex === index

                return (
                  <div ref={desktopRef} key={index} className="w-max h-max relative">
                    {isCurrent && isInViewDesktop ? (
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.2 }}
                        transition={{ stiffness: 300, damping: 10, type: 'spring' }}
                        className="px-5"
                      >
                        <TimelineCard
                          title={data.title}
                          title2={data.title2}
                          string_date={data.string_date}
                          gem_pic={data.gem_pic_secondary}
                          className={data.className}
                          date={data.date}
                        />
                      </motion.div>
                    ) : (
                      <motion.div initial={{ scale: 1 }} animate={{ scale: 1 }}>
                        <TimelineCard
                          title={data.title}
                          title2={data.title2}
                          string_date={data.string_date}
                          gem_pic={currentDate <= data.date ? data.gem_pic : data.gem_pic_secondary}
                          className={data.className}
                          date={data.date}
                        />
                      </motion.div>
                    )}
                    {isCurrent && (
                      <motion.div
                        key={index}
                        className="flex absolute right-[50%] translate-x-[50%] -bottom-[8rem] transform z-50"
                      >
                        <motion.img
                          ref={desktopRef}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
                          src="small star 4.svg"
                          alt="Star"
                          className="size-14"
                        />
                      </motion.div>
                    )}
                  </div>
                )
              })}
            </div>

            <div ref={desktopRef} className="relative flex flex-col justify-center pl-[4.5rem] pr-24">
              <div className="w-[97.5%] bg-slate-400 h-2 border-none rounded-full" />
              {timelineData.map((data, index) => {
                const isCurrent = currentIndex === index
                return (
                  isCurrent &&
                  isInViewDesktop && (
                    <motion.div
                      key={index}
                      initial={{ width: 0 }}
                      animate={{ width: `${data.progress}%` }}
                      transition={{ duration: 2, type: 'just' }}
                      className="absolute top-0 h-2 bg-primary_yellow-200 rounded-full"
                      style={{ width: `${data.progress}%` }}
                    ></motion.div>
                  )
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        // Mobile view
        <div className="relative w-full h-full py-6 flex flex-row xl:hidden justify-center items-center">
          <div className="flex flex-col h-full gap-y-2 mb-32">
            {timelineData.map((data, index) => {
              const isCurrent = currentIndex === index
              return (
                <div key={index} className="w-full h-full flex">
                  {index % 2 === 0 && (
                    <div className="w-full relative flex justify-end">
                      {isCurrent && isInViewMobile ? (
                        <motion.div
                          initial={{ scale: 1 }}
                          animate={{ scale: [1.2, 1] }}
                          transition={{ stiffness: 300, damping: 10, type: 'spring' }}
                          className=""
                        >
                          <TimelineCard
                            title={data.title}
                            title2={data.title2}
                            string_date={data.string_date}
                            gem_pic={data.gem_pic_secondary}
                            className={`${data.className}`}
                            date={data.date}
                          />
                        </motion.div>
                      ) : (
                        <motion.div initial={{ scale: 1 }} animate={{ scale: 1 }}>
                          <TimelineCard
                            title={data.title}
                            title2={data.title2}
                            string_date={data.string_date}
                            gem_pic={currentDate <= data.date ? data.gem_pic : data.gem_pic_secondary}
                            className={data.className}
                            date={data.date}
                          />
                        </motion.div>
                      )}
                      {isCurrent && ( // Star animation mobile
                        <motion.div
                          key={index}
                          className="flex top-[60%] translate-x-10 sm:translate-x-12  absolute transform z-50"
                        >
                          <motion.img
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
                            src="small star 4.svg"
                            alt="Star"
                            className="size-14"
                          />
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="relative flex flex-col h-full items-center px-2 sm:px-4 justify-end" ref={mobileRef}>
            <div className="w-[8px] h-[45rem] bg-slate-400 rounded-full flex justify-center mt-[5rem]">
              {timelineData.map((data, index) => {
                const isCurrent = currentIndex === index
                return (
                  isCurrent &&
                  isInViewMobile && (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${data.mobile_progress}%` }}
                      transition={{ duration: 2, type: 'just' }}
                      className="w-[8px] bg-primary_yellow-200 rounded-full "
                      style={{ height: `${data.mobile_progress}%` }}
                    ></motion.div>
                  )
                )
              })}
            </div>
          </div>

          <div className="flex flex-col h-full gap-y-2 mt-32">
            {timelineData.map((data, index) => {
              const isCurrent = currentIndex === index
              return (
                <div key={index} className="w-full h-full flex">
                  {index % 2 !== 0 && (
                    <div className="w-full h-max relative flex justify-start">
                      {isCurrent && isInViewMobile ? (
                        <motion.div
                          initial={{ scale: 1 }}
                          animate={{ scale: [1.2, 1] }}
                          transition={{ stiffness: 300, damping: 10, type: 'spring' }}
                        >
                          <TimelineCard
                            title={data.title}
                            title2={data.title2}
                            string_date={data.string_date}
                            gem_pic={data.gem_pic_secondary}
                            className={`${data.className}`}
                            date={data.date}
                          />
                        </motion.div>
                      ) : (
                        <motion.div initial={{ scale: 1 }} animate={{ scale: 1 }}>
                          <TimelineCard
                            title={data.title}
                            title2={data.title2}
                            string_date={data.string_date}
                            gem_pic={currentDate <= data.date ? data.gem_pic : data.gem_pic_secondary}
                            className={data.className}
                            date={data.date}
                          />
                        </motion.div>
                      )}
                      {isCurrent && ( // Star animation mobile
                        <motion.div
                          key={index}
                          className="flex top-[60%] -translate-x-10 sm:-translate-x-12  absolute transform z-50"
                        >
                          <motion.img
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
                            src="small star 4.svg"
                            alt="Star"
                            className="size-14"
                          />
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Timeline
