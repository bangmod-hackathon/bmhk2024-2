function Docs() {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="m-auto flex w-full flex-col items-center justify-center">
          <div className="mb-36 text-center font-heading text-5xl text-white">เอกสารในการสมัคร</div>
          <div className="m-auto flex w-3/5 items-center justify-center gap-32 max-xl:flex-col max-xl:gap-48 max-sm:gap-28">
            <div className="relative z-50 flex size-full flex-col items-center justify-center p-10 text-center">
              <div className="absolute z-10 aspect-square w-1/2 rounded-full bg-white max-lg:-top-28 max-lg:max-w-44 max-sm:-top-16 max-sm:max-w-32 md:-top-24 md:max-w-md lg:max-w-40"></div>
              <div className="mb-5 mt-16 w-full font-body text-3xl text-primary_yellow-300 max-2xl:mt-12 max-lg:mt-16 max-md:mt-16 max-sm:mt-12">
                อาจารย์ที่ปรึกษา
              </div>
              <ul className="w-full list-disc text-left text-lg font-normal text-white">
                <li className="w-full font-body text-lg text-white ">
                  บัตรประจำตัวประชาชนอาจารย์ที่ปรึกษา หรือ บัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)
                </li>
                <li className="m-auto w-full font-body text-lg text-white">
                  เอกสาร หรือ หนังสือยืนยันสถานภาพ การเป็นอาจารย์ประจำสถาบันการศึกษา (บัตรประจำตัวครูอาจารย์,
                  บัตรข้าราชการครูและบุคลากรทางการศึกษา)
                </li>
              </ul>
              <div className="absolute inset-0 -z-10 rotate-6 scale-105 rounded-3xl bg-secondary_blue-100/50"></div>
              <div className="absolute inset-0 -z-10 scale-105 rounded-3xl bg-primary-200 "></div>
            </div>
            <div className="relative z-50 flex size-full flex-col items-center justify-center p-10 text-center">
              <div className="absolute z-10 aspect-square w-1/2 rounded-full bg-white max-lg:-top-28 max-lg:max-w-44 max-sm:-top-16 max-sm:max-w-32 md:-top-24 md:max-w-md lg:max-w-40"></div>
              <div className="mb-5 mt-16 w-full font-body text-3xl text-primary_yellow-300 max-2xl:mt-12 max-lg:mt-16 max-md:mt-16 max-sm:mt-12">
                นักเรียน
              </div>
              <ul className="w-full list-disc text-left text-lg font-normal text-white">
                <li className="m-auto w-full font-body text-lg text-white">
                  บัตรประจำตัวประชาชนผู้เข้าแข่งขัน หรือบัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)
                </li>
                <li className="m-auto w-full font-body text-lg text-white">ปพ.7 ของผู้เข้าแข่งขันฉบับจริง</li>
                <li className="m-auto w-full font-body text-lg text-white">รูปถ่ายนักเรียนผู้เข้าแข่งขัน</li>
              </ul>
              <div className="absolute inset-0 -z-10 rotate-6 scale-105 rounded-3xl bg-secondary_blue-100/50"></div>
              <div className="absolute inset-0 -z-10 scale-105 rounded-3xl bg-primary-200 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Docs
