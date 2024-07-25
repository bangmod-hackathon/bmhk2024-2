import { motion } from 'framer-motion'
import { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import ButtonPrimary from '../Buttons/ButtonPrimary'

const Navbar = () => {
  const [Auth, setAuth] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [onSelect, setOnSelect] = useState(-1)

  const menuList = ['รายละเอียด', 'คุณสมบัติ', 'รางวัล', 'ไทม์ไลน์', 'ขอบเขตเนื้อหา', 'ติดต่อสอบถาม']

  const handleAuth = () => {
    setAuth(!Auth)
  }

  const handleOnSelect = (index: number) => {
    setOnSelect(index)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.5 }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5 }
    }
  }

  const menuItemVariants = {
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    }),
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  }

  const menuIconVariants = {
    open: {
      rotate: 90,
      scale: 1.2,
      transition: { duration: 0.3 }
    },
    closed: {
      rotate: 0,
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

  const navLandingPage = () => {
    return (
      <>
        <div className="fixed w-full p-9">
          <motion.div
            variants={menuVariants}
            animate={menuOpen ? 'closed' : 'open'}
            className={`flex w-full items-center justify-between rounded-[10px] bg-bg-200/40 px-6 py-2 ${menuOpen ? 'hidden' : ''}`}
          >
            <div className="flex items-center">
              <button>
                <img src="Logo.svg" alt="Bangmod Hackathon 2024 Logo" className="h-12" />
              </button>
            </div>

            <div className="hidden flex-1 justify-center lg:flex">
              <div className="flex gap-x-8 px-3 font-body text-white">
                {menuList.map((item, index) => (
                  <button key={index} className=" group flex flex-col " onClick={() => handleOnSelect(index)}>
                    <p className={`nav duration-300`}>
                      {item}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex py-2">
              {/* {Auth && (
                <div className="hidden items-center justify-end gap-x-3 lg:flex">
                  <ButtonPrimary className="bg-primary_yellow-100 px-6 py-2 text-primary-200 hover:bg-primary_yellow-300 hover:text-primary-300">
                    <p className=" font-normal">ลงทะเบียนต่อ</p>
                  </ButtonPrimary>
                  <button
                    className="rounded-[5px] border-2 border-primary_yellow-200 bg-transparent p-[6px] text-2xl text-primary_yellow-200 duration-300 hover:bg-red-500 hover:text-white"
                    onClick={handleAuth}
                  >
                    <IoLogOutOutline />
                  </button>
                </div>
              )} */}
              <div className="hidden items-center space-x-4 lg:flex">
                {Auth ? (
                  <ButtonPrimary onClick={handleAuth}>ออกจากระบบ</ButtonPrimary>
                ) : (
                  <ButtonPrimary onClick={handleAuth}>ลงทะเบียน</ButtonPrimary>
                )}
              </div>
            </div>
            <motion.button
              className="py-[12px] lg:hidden"
              onClick={toggleMenu}
              variants={menuIconVariants}
              animate={menuOpen ? 'open' : 'closed'}
            >
              {menuOpen ? <HiX className="text-3xl text-white" /> : <HiOutlineMenu className="text-3xl text-white" />}
            </motion.button>
          </motion.div>

          <motion.div
            animate={menuOpen ? 'open' : 'closed'}
            variants={menuVariants}
            className="relative flex flex-col items-center overflow-hidden rounded-[10px] bg-[#18232B] p-6 font-body lg:hidden"
          >
            <button
              className="flex w-full items-end justify-end text-2xl text-white"
              onClick={() => {
                toggleMenu()
                handleOnSelect(-1)
              }}
            >
              <HiX />
            </button>

            <img src="Logo.svg" alt="Bangmod Hackathon 2024 Logo" className="" />

            {menuList.map((item, index) => (
              <motion.button
                key={index}
                className={`nav py-2 text-lg ${onSelect === index ? 'text-primary_yellow-200' : 'text-white'}`}
                variants={menuItemVariants}
                initial="closed"
                animate={menuOpen ? 'open' : 'closed'}
                custom={index}
                onClick={() => handleOnSelect(index)}
              >
                {item}
              </motion.button>
            ))}
            <div className="py-2">
              <ButtonPrimary
                className="bg-primary_yellow-100 text-primary-200 hover:bg-primary_yellow-300 hover:text-primary-300"
                onClick={handleAuth}
              >
                <p className="font-normal text-black">{Auth ? 'ออกจากระบบ' : 'ลงทะเบียน'}</p>
              </ButtonPrimary>
            </div>
          </motion.div>
        </div>
      </>
    )
  }

  const navRegisterPage = () => {
    return (
      <>
        <div className="fixed w-full p-9">
          <motion.div
            variants={menuVariants}
            animate={menuOpen ? 'closed' : 'open'}
            className={`flex w-full items-center justify-between rounded-[10px] bg-bg-200/40 px-6 py-2 ${menuOpen ? 'hidden' : ''}`}
          >
            <div className="flex items-center">
              <button>
                <img src="Logo.svg" alt="Bangmod Hackathon 2024 Logo" className="h-12" />
              </button>
            </div>

            <div className="hidden flex-1 justify-center lg:flex"></div>
            <div className="flex py-2">
              <div className=" flex items-center space-x-7">
                <div className="hidden items-center space-x-2 sm:flex">
                  <div className=" flex h-full items-center">
                    <CgProfile className="text-xl text-white" />
                  </div>
                  <p className=" text-lg text-white">chaiyapatInwza007@kmutt.ac.th</p>
                </div>
                <ButtonPrimary>ออกจากระบบ</ButtonPrimary>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    )
  }

  return <>{location.pathname === '/register' ? navRegisterPage() : navLandingPage()}</>
}

export default Navbar
