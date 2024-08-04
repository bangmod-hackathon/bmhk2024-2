import React from 'react'
import FirstStudent from '/images/student2.webp'
import SecondStudent from '/images/student4.webp'
import Teacher from '/images/teacher.webp'

const Qualifications: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex w-full lg:py-[12rem] py-[8rem]">
        <div className="m-auto flex w-full flex-col items-center justify-center gap-y-7">
          <div className="mb-9 text-center font-heading text-3xl text-white md:text-4xl lg:text-5xl ">
            คุณสมบัติผู้สมัคร
          </div>
          <div className=" flex flex-col gap-y-7 w-10/12 md:w-3/4 lg:w-1/2">
            <div className=" flex rounded-full border border-secondary_blue-100  bg-gradient-to-b from-bg-400/25 to-secondary_blue-200/25 p-5 pr-12 shadow-md shadow-primary_yellow-300/20">
              <div className="mr-5 flex aspect-square w-44 justify-center overflow-visible rounded-full bg-primary_yellow-200 text-center md:mr-6 lg:mr-7">
                <img className="scale-125" src={FirstStudent} alt="" />
              </div>
              <div className="m-auto w-full font-body text-sm text-white md:text-base lg:text-lg ">
                รับสมัครเป็นทีม ทีมละ 2-3 คน
              </div>
            </div>
            <div className=" flex rounded-full border border-secondary_blue-100 bg-gradient-to-b from-bg-400/25 to-secondary_blue-200/25 p-5 pr-12 shadow-md shadow-primary_yellow-300/20">
              <div className="mr-5 flex aspect-square w-44 justify-center overflow-visible rounded-full bg-primary_yellow-200 text-center md:mr-6 lg:mr-7">
                <img className="scale-125" src={Teacher} alt="" />
              </div>
              <div className="m-auto w-full font-body text-sm text-white md:text-base lg:text-lg text-balance">
                อาจารย์ที่ปรึกษาทีม 1 คน โดยอาจารย์ที่ปรึกษาต้องเป็นอาจารย์ที่สอนในสถานศึกษานั้น ๆ
              </div>
            </div>
            <div className=" flex rounded-full border border-secondary_blue-100 bg-gradient-to-b from-bg-400/25 to-secondary_blue-200/25 p-5 pr-12 shadow-md shadow-primary_yellow-300/20">
              <div className="mr-5 flex aspect-square w-44 justify-center overflow-visible rounded-full bg-primary_yellow-200 text-center md:mr-6 lg:mr-7">
                <img className="scale-125" src={SecondStudent} alt="" />
              </div>
              <div className="m-auto w-full font-body text-sm text-white md:text-base lg:text-lg ">
                แต่ละสถานศึกษาสามารถส่งเข้าแข่งได้มากสุด 2 ทีม
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Qualifications
