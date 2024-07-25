import FirstStudent from '/images/student2.png'
import SecondStudent from '/images/student4.png'
import Teacher from '/images/teacher.png'

function Qualifications() {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="m-auto flex w-full flex-col items-center justify-center gap-4">
          <div className="mb-9 text-center font-heading text-3xl text-white md:text-4xl lg:text-5xl ">
            คุณสมบัติผู้สมัคร
          </div>
          <div className=" flex w-10/12 rounded-full  bg-gradient-to-b from-bg-400/25 to-secondary_blue-200/25 p-5 pr-12 ">
            <div className="mr-5 flex aspect-square w-44 justify-center overflow-visible rounded-full bg-primary_yellow-200 text-center md:mr-6 lg:mr-7">
              <img className="scale-125" src={FirstStudent} />
            </div>
            <div className="m-auto w-full font-body text-sm text-white md:text-base lg:text-lg ">
              รับสมัครเป็นทีม ทีมละ 2-3 คน
            </div>
          </div>
          <div className=" flex w-10/12 rounded-full bg-gradient-to-b from-bg-400/25 to-secondary_blue-200/25 p-5 pr-12 ">
            <div className="mr-5 flex aspect-square w-44 justify-center overflow-visible rounded-full bg-primary_yellow-200 text-center md:mr-6 lg:mr-7">
              <img className="scale-125" src={Teacher} />
            </div>
            <div className="m-auto w-full font-body text-sm text-white md:text-base lg:text-lg ">
              อาจารย์ที่ปรึกษาทีม 1 คน โดยอาจารย์ที่ปรึกษาต้องเป็นอาจารย์ที่สอนในสถานศึกษานั้น ๆ
            </div>
          </div>
          <div className=" flex w-10/12 rounded-full border bg-gradient-to-b from-bg-400/25 to-secondary_blue-200/25 p-5 pr-12 ">
            <div className="mr-5 flex aspect-square w-44 justify-center overflow-visible rounded-full bg-primary_yellow-200 text-center md:mr-6 lg:mr-7">
              <img className="scale-125" src={SecondStudent} />
            </div>
            <div className="m-auto w-full font-body text-sm text-white md:text-base lg:text-lg ">
              แต่ละสถานศึกษาสามารถส่งเข้าแข่งได้มากสุด 2 ทีม
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qualifications
