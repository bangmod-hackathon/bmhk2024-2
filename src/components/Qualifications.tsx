import FirstStudent from '/images/student2.png'
import SecondStudent from '/images/student4.png'
import Teacher from '/images/teacher.png'

function Qualifications() {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="w-full m-auto flex flex-col justify-center items-center">
          <div className="font-heading mb-9 text-center text-5xl text-white ">คุณสมบัติผู้สมัคร</div>
          <div className="border-1px mb-4 flex w-10/12 rounded-full border-x border-y bg-gradient-to-b from-bg-400/25 to-secondary_blue-200/25 p-5 pr-12 ">
            <div className="mr-7 flex w-44 aspect-square justify-center overflow-visible rounded-full text-center bg-primary_yellow-200">
              <img className="scale-125" src={FirstStudent} />
            </div>
            <div className="font-body m-auto w-full lg:text-lg md:text-lg sm:text-xs text-white ">
              รับสมัครเป็นทีม ทีมละ 2-3 คน
            </div>
          </div>
          <div className="border-1px mb-4 flex w-10/12 rounded-full border-x border-y bg-gradient-to-b from-bg-400/25 to-secondary_blue-200/25 p-5 pr-12 ">
            <div className="mr-7 flex w-44 aspect-square justify-center overflow-visible rounded-full text-center bg-primary_yellow-200">
              <img className="scale-125" src={Teacher} />
            </div>
            <div className="font-body m-auto w-full lg:text-lg md:text-lg sm:text-xs text-white ">
              อาจารย์ที่ปรึกษาทีม 1 คน โดยอาจารย์ที่ปรึกษาต้องเป็นอาจารย์ที่สอนในสถานศึกษานั้น ๆ
            </div>
          </div>
          <div className="border-1px mb-4 flex w-10/12 rounded-full border-x border-y bg-gradient-to-b from-bg-400/25 to-secondary_blue-200/25 p-5 pr-12 ">
            <div className="mr-7 flex w-44 aspect-square justify-center overflow-visible rounded-full text-center bg-primary_yellow-200">
              <img className="scale-125" src={SecondStudent} />
            </div>
            <div className="font-body m-auto w-full lg:text-lg md:text-lg sm:text-xs text-white ">
              แต่ละสถานศึกษาสามารถส่งเข้าแข่งได้มากสุด 2 ทีม
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qualifications
