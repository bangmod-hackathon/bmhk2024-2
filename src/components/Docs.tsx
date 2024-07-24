function Docs() {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto ">
          <div className="font-chonburi mb-36 text-center text-5xl text-white">เอกสารในการสมัคร</div>
          <div className="m-auto flex justify-center gap-32 w-3/5">
            <div className="relative z-50 flex h-full w-full flex-col items-center justify-center p-10 text-center">
              <div className="absolute z-10 bottom-3/4 w-2/5 aspect-square rounded-full bg-white">docpic</div>
              <div className="font-normal text-primary_yellow-300 mt-20 mb-5 w-full text-3xl">อาจารย์ที่ปรึกษา</div>
              <ul className="list-disc font-normal w-full text-left text-lg text-white">
                <li className="font-ibm-plex-sans-thai w-full text-lg text-white ">
                  บัตรประจำตัวประชาชนอาจารย์ที่ปรึกษา หรือ บัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)
                </li>
                <li className="font-ibm-plex-sans-thai m-auto w-full text-lg text-white">
                  เอกสาร หรือ หนังสือยืนยันสถานภาพ การเป็นอาจารย์ประจำสถาบันการศึกษา (บัตรประจำตัวครูอาจารย์,
                  บัตรข้าราชการครูและบุคลากรทางการศึกษา)
                </li>
              </ul>
              <div className="absolute inset-0 -z-10 rotate-6 scale-105 rounded-3xl bg-secondary_blue-100/50"></div>
              <div className="absolute inset-0 -z-10 scale-105 rounded-3xl bg-primary-200 "></div>
            </div>
            <div className="relative z-50 flex h-full w-full flex-col items-center justify-center p-10 text-center">
              <div className="absolute z-10 bottom-3/4 w-2/5 aspect-square rounded-full bg-white">docpic</div>
              <div className="font-normal text-primary_yellow-300 mt-20 mb-5 w-full text-3xl">นักเรียน</div>
              <ul className="list-disc font-normal w-full text-left text-lg text-white">
                <li className="font-ibm-plex-sans-thai m-auto w-full text-lg text-white">
                  บัตรประจำตัวประชาชนผู้เข้าแข่งขัน หรือบัตรประจำตัวสำหรับบุคคลที่ไม่ได้ถือสัญชาติไทย (เฉพาะด้านหน้า)
                </li>
                <li className="font-ibm-plex-sans-thai m-auto w-full text-lg text-white">
                  ปพ.7 ของผู้เข้าแข่งขันฉบับจริง
                </li>
                <li className="font-ibm-plex-sans-thai m-auto w-full text-lg text-white">
                  รูปถ่ายนักเรียนผู้เข้าแข่งขัน
                </li>
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
