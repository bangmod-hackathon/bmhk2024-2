import React from 'react'

const Docs: React.FC = () => {
  return (
    <React.Fragment>
      <div className="m-auto flex w-full flex-col items-center justify-center lg:py-[12rem] py-[8rem]">
        <div className="mb-24 text-center font-heading text-3xl text-white md:mb-32 md:text-4xl lg:mb-36 lg:text-5xl">
          เอกสารในการสมัคร
        </div>
        <div className="m-auto flex w-3/4 items-start justify-center gap-28 max-xl:flex-col md:w-2/3 md:gap-40 lg:w-3/5 xl:gap-32">
          <div className="relative z-50 flex size-full flex-col items-center justify-center p-8 text-center">
            <div className="absolute -top-16 z-10 aspect-square w-1/2 max-w-28 rounded-full bg-white md:-top-24 md:max-w-40 lg:-top-28 lg:max-w-44"></div>
            <div className="mb-5 mt-16 w-full font-body text-2xl text-primary_yellow-300 max-2xl:mt-12 max-lg:mt-16 max-md:mt-16 max-sm:mt-12 md:text-3xl lg:text-4xl">
              อาจารย์ที่ปรึกษา
            </div>
            <ul className="w-full list-disc text-left text-sm font-normal text-white md:text-base lg:text-lg">
              <li className="w-full font-body text-white ">
                บัตรประจำตัวประชาชนอาจารย์ที่ปรึกษา หรือ บัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)
              </li>
              <li className="w-full font-body text-white">
                เอกสาร หรือ หนังสือยืนยันสถานภาพ การเป็นอาจารย์ประจำสถาบันการศึกษา (บัตรประจำตัวครูอาจารย์,
                บัตรข้าราชการครูและบุคลากรทางการศึกษา)
              </li>
            </ul>
            <div className="absolute inset-0 -z-10 rotate-6 scale-105 rounded-3xl bg-secondary_blue-100/50"></div>
            <div className="absolute inset-0 -z-10 scale-105 rounded-3xl bg-primary-200 "></div>
          </div>
          <div className="relative z-50 flex size-full flex-col items-center justify-center p-8 text-center">
            <div className="absolute -top-16 z-10 aspect-square w-1/2 max-w-28 rounded-full bg-white md:-top-24 md:max-w-40 lg:-top-28 lg:max-w-44"></div>
            <div className="mb-5 mt-16 w-full font-body text-2xl text-primary_yellow-300 max-2xl:mt-12 max-lg:mt-16 max-md:mt-16 max-sm:mt-12 md:text-3xl lg:text-4xl">
              นักเรียน
            </div>
            <ul className="w-full list-disc text-left text-sm font-normal text-white md:text-base lg:text-lg">
              <li className="m-auto w-full font-body text-white">
                บัตรประจำตัวประชาชนผู้เข้าแข่งขัน หรือบัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)
              </li>
              <li className="m-auto w-full font-body text-white">ปพ.7 ของผู้เข้าแข่งขันฉบับจริง</li>
              <li className="m-auto w-full font-body text-white">รูปถ่ายนักเรียนผู้เข้าแข่งขัน</li>
            </ul>
            <div className="absolute inset-0 -z-10 rotate-6 scale-105 rounded-3xl bg-secondary_blue-100/50"></div>
            <div className="absolute inset-0 -z-10 scale-105 rounded-3xl bg-primary-200 "></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Docs
