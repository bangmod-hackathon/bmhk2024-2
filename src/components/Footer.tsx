import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div className="relative bg-gradient-to-b from-[#0D437F] via-[#0E2D4F] to-[#0E1823] text-white py-12">
        <div className="container lg:mx-auto max-w-[1560px] px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start">
            <div className="text-left mb-6 md:mb-0 w-full md:w-1/3">
              <img src={'/Landing/Logo.svg'} alt="Bangmod Hackathon Logo" className="mb-4 w-32" />
              <div className="mt-6">
                <p className="font-[500]">
                  ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                </p>
                <div className="font-normal">
                  <p className="pt-3">อาคารวิศววัฒนะ ชั้น 10 เลขที่ 126 ถ.ประชาอุทิศ</p>
                  <p>แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร 10140</p>
                </div>
              </div>
            </div>
            <div className="text-center md:text-center mb-6 md:mb-0 w-full md:w-1/3">
              <h2 className="text-yellow-200 text-2xl md:text-3xl 2xl:text-5xl text-left md:text-right font-heading_chonburi w-full">
                SENIOR CONTACT
              </h2>
              <div className="flex flex-col xl:flex-row text-left text-sm xl:text-lg md:text-right md:justify-between mt-4">
                <div>
                  <p>พี่ตี๋</p>
                  <p>087 798 1578</p>
                  <p>thanakit.chok@kmutt.ac.th</p>
                </div>
                <div>
                  <p>พี่โมจิ</p>
                  <p>082 915 3942</p>
                  <p>jutamas.kaew@kmutt.ac.th</p>
                </div>
              </div>
            </div>
          </div>
          {/* เส้นขีดขั้น */}
          <div className="border-t border-white my-8"></div>
          <div className="md:flex md:justify-between md:items-center md:space-y-0 space-y-4 mt-4 mb-8">
            {/* ไอคอนทางซ้าย */}
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/BangmodHackathon/" target="_blank" rel="noreferrer">
                <FaFacebook className="w-12 h-12" />
              </a>
              <a
                href="https://www.instagram.com/cpe_studentunion/"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-full p-2"
              >
                <IoLogoInstagram className="w-8 h-8 text-black" />
              </a>
            </div>
            {/* ไอคอนทางขวา */}
            {/* <div className="flex flex-wrap space-x-2">
              <img src="footer/advice.webp" alt="Advice" className="w-12 h-12" />
              <img src="footer/hp.webp" alt="HP" className="w-12 h-12" />
              <img src="footer/line.webp" alt="Line" className="w-12 h-12" />
              <img src="footer/nasa.webp" alt="NASA" className="w-12 h-12" />
              <img src="footer/honda.webp" alt="Honda" className="w-12 h-12" />
            </div> */}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-200  text-center text-sm bg-[#0E1823] py-5   mt-100">
          &copy;2023 BangMod Hackathon 2024
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
