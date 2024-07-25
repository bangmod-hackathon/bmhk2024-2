import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#0D427E] via-[#0E2D4F] to-[#0a192f] text-white py-12">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start">
          <div className="text-left mb-6 md:mb-0 w-full md:w-1/3">
            <img src={'/Landing/Logo.svg'} alt="Bangmod Hackathon Logo" className="mb-4 w-32" />
            <p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
            <p className="pt-3">อาคารวิศววัฒนะ ชั้น 10 เลขที่ 126 ถ.ประชาอุทิศ</p>
            <p>แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร 10140</p>
          </div>
          <div className="text-center md:text-center mb-6 md:mb-0 w-full md:w-1/3">
            <h2 className="text-yellow-400 text-3xl md:text-5xl text-left md:text-right font-heading w-full">
              SENIOR CONTACT
            </h2>
            <div className="flex flex-col md:flex-row text-left md:text-right justify-between mt-4">
              <div>
                <p>พี่ฟ้า</p>
                <p>080 493 5928</p>
                <p>yanakorn.tang@mail.kmutt.ac.th</p>
              </div>
              <div>
                <p>พี่น้ำขิง</p>
                <p>061 506 6249</p>
                <p>wipada.kasi@mail.kmutt.ac.th</p>
              </div>
            </div>
          </div>
        </div>
        {/* เส้นขีดขั้น */}
        <div className="border-t border-white my-3"></div>
        <div className="flex justify-between items-center py-4">
          {/* ไอคอนทางซ้าย */}
          <div className="flex space-x-2">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
              alt="Facebook"
              className="w-8 h-8"
            />
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </div>
          {/* ไอคอนทางขวา */}
          <div className="flex space-x-2">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
              alt="Advice"
              className="w-12 h-12"
            />
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
              alt="HP"
              className="w-12 h-12"
            />
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
              alt="Line"
              className="w-12 h-12"
            />
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
              alt="NASA"
              className="w-12 h-12"
            />
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
              alt="Honda"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-200  text-center text-sm bg-[#0E1823] py-5   mt-100">
        &copy;2023 BangMod Hackathon 2024
      </div>
    </div>
  )
}

export default Footer
