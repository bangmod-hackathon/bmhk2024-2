import React from 'react'

const Docs: React.FC = () => {
  return (
    <React.Fragment>
      <div className="m-auto flex w-full flex-col items-center justify-center pb-[12rem]">
        <div className="pb-36 lg:pb-48 text-center font-heading text-3xl text-white md:text-4xl lg:text-5xl">
          เอกสารในการสมัคร
        </div>
        <div className="m-auto flex w-3/4 items-start justify-center gap-36 max-xl:flex-col md:w-2/3 md:gap-44 lg:w-3/5 xl:gap-x-36">
          <div className="relative z-50 flex size-full flex-col items-center justify-center p-8 text-center">
            <img
              className=" absolute -top-28 size-[12rem] md:size-[18rem] md:-top-44 z-50 drop-shadow-[0_10px_20px_rgba(255,255,255,0.20)]"
              src="/scroll/scroll_1.webp"
              alt=""
            />
            <div className="absolute -top-16 z-20 aspect-square w-1/2 max-w-28 rounded-full bg-[#4D6F81] md:-top-24 md:max-w-40 lg:-top-28 lg:max-w-44"></div>
            <div className="absolute -top-16 translate-y-1 z-10 aspect-square w-1/2 max-w-28 rounded-full bg-bg-200/70 md:-top-24 md:max-w-40 lg:-top-28 lg:max-w-44"></div>
            <div className="mb-5 mt-16 lg:mt-[4rem] w-full font-body font-medium text-2xl text-primary_yellow-300 max-2xl:mt-12 max-lg:mt-16 max-md:mt-16 max-sm:mt-12 md:text-3xl">
              อาจารย์ที่ปรึกษา
            </div>
            <ul className="w-full list-disc text-left text-sm font-light text-text_color-100 md:text-base lg:text-lg">
              <li className="w-full font-body leading-6 md:leading-7 text-pretty">
                สำเนาบัตรประจำตัวประชาชน หรือหนังสือเดินทาง (กรณีชาวต่างชาติ) ของอาจารย์่ที่ปรึกษาพร้อมเซ็นสำเนาถูกต้อง
                เฉพาะด้านหน้า
              </li>
              <li className="w-full font-body leading-6 md:leading-7 text-pretty">
                เอกสาร หรือหนังสือยืนยันสถานภาพการเป็นอาจารย์ประจำสถานศึกษา (บัตรประจำตัวครูอาจารย์,
                บัตรข้าราชการครูและบุคลากรทางการศึกษา)
              </li>
            </ul>
            <div className="absolute inset-0 -z-10 rotate-6 scale-105 rounded-3xl bg-secondary_blue-100/50"></div>
            <div className="absolute inset-0 -z-10 scale-105 rounded-3xl bg-primary-200 "></div>
          </div>
          <div className="relative z-50 flex size-full flex-col items-center justify-center p-8 text-center">
            <img
              className=" absolute -top-28 size-[12rem] md:size-[18rem] md:-top-44 z-50 drop-shadow-[0px_10px_20px_rgba(255,255,255,0.3)]"
              src="/scroll/scroll_2.webp"
              alt=""
            />
            <div className="absolute -top-16 z-20 aspect-square w-1/2 max-w-28 rounded-full bg-[#4D6F81] md:-top-24 md:max-w-40 lg:-top-28 lg:max-w-44"></div>
            <div className="absolute -top-16 translate-y-1 z-10 aspect-square w-1/2 max-w-28 rounded-full bg-bg-200/70 md:-top-24 md:max-w-40 lg:-top-28 lg:max-w-44"></div>
            <div className="mb-5 mt-16 lg:mt-[4rem] w-full font-medium font-ibm text-2xl text-primary_yellow-300 max-2xl:mt-12 max-lg:mt-16 max-md:mt-16 max-sm:mt-12 md:text-3xl">
              นักเรียน
            </div>
            <ul className=" w-full list-disc text-left text-sm text-pretty font-ibm font-light leading-6 md:leading-7 text-text_color-100 md:text-base lg:text-lg">
              <li className="m-auto w-full ">รูปถ่ายนักเรียนผู้เข้าแข่งขัน</li>
              <li className="m-auto w-full ">
                สำเนาบัตรประจำตัวประชาชน หรือหนังสือเดินทาง (กรณีชาวต่างชาติ) ของผู้เข้าแข่งขันพร้อมเซ็นสำเนาถูกต้อง
                เฉพาะด้านหน้า
              </li>
              <li className="m-auto w-full ">ปพ.7 ของผู้เข้าแข่งขันฉบับจริง</li>
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
