import { motion } from 'framer-motion'
import { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { Link, useLocation } from 'react-router-dom'
import Scroll from 'react-scroll'

interface ImenuList {
  label: string
  link: string
}

const Navbar = () => {
  const [Auth, setAuth] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [onSelect, setOnSelect] = useState(-1)

  const location = useLocation()

  const menuList: ImenuList[] = [
    {
      label: 'รายละเอียด',
      link: 'hero'
    },
    {
      label: 'คุณสมบัติ',
      link: 'qualifications'
    },
    {
      label: 'รางวัล',
      link: 'rewards'
    },
    {
      label: 'ไทม์ไลน์',
      link: 'timeline'
    },
    {
      label: 'ขอบเขตเนื้อหา',
      link: 'scope'
    },
    {
      label: 'ติดต่อสอบถาม',
      link: 'footer'
    }
  ]

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
        <div className="fixed w-full p-9 z-[100]">
          <motion.div
            variants={menuVariants}
            animate={menuOpen ? 'closed' : 'open'}
            className={`flex w-full items-center justify-between rounded-[10px] bg-bg-200/40 px-6 py-2 ${menuOpen ? 'hidden' : ''}`}
          >
            <div>
              <Link to="/">
                <img src="Logo.svg" alt="Bangmod Hackathon 2024 Logo" className="h-12" />
              </Link>
            </div>

            <div className="hidden flex-1 justify-center lg:flex">
              <div className="flex gap-x-8 px-3 font-body text-white">
                {/* {menuList.map((item, index) => (
                  <button key={index} className=" group flex flex-col " onClick={() => handleOnSelect(index)}>
                    <p className={`nav duration-300`}>{item.label}</p>
                  </button>
                ))} */}
                {menuList.map((item, index) => (
                  <Scroll.Link
                    key={index}
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`nav duration-300 ${onSelect === index ? 'text-primary_yellow-200' : 'text-white'}`}
                    onClick={() => handleOnSelect(index)}
                  >
                    {item.label}
                  </Scroll.Link>
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
                  <Link to="/login">
                    <ButtonPrimary onClick={handleAuth}>ลงทะเบียน</ButtonPrimary>
                  </Link>
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
            <div
              className="flex w-full items-end justify-end text-2xl text-white"
              onClick={() => {
                toggleMenu()
                handleOnSelect(-1)
              }}
            >
              <HiX />
            </div>

            <Link to="/">
              <img src="Logo.svg" alt="Bangmod Hackathon 2024 Logo" className="h-12" />
            </Link>

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
                {item.label}
              </motion.button>
            ))}
            <div className="py-2">
              <Link to="/login">
                <ButtonPrimary>
                  <p className=" text-lg">ลงทะเบียน</p>
                </ButtonPrimary>
              </Link>
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
                  <p className=" text-lg text-white">{'chaiyapatInwza007@kmutt.ac.th'}</p> {/* Add email */}
                </div>
                <ButtonPrimary>ออกจากระบบ</ButtonPrimary>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    )
  }

  const navLoginPage = () => {
    return (
      <>
        <div className="fixed w-full p-9 z-[100]">
          <motion.div
            variants={menuVariants}
            animate={menuOpen ? 'closed' : 'open'}
            className={`flex w-full items-center justify-between rounded-[10px] bg-bg-200/40 px-6 py-2 ${menuOpen ? 'hidden' : ''}`}
          >
            <div className="flex">
              <Link to="/">
                <img src="Logo.svg" alt="Bangmod Hackathon 2024 Logo" className="h-12" />
              </Link>
            </div>

            <div className="hidden flex-1 justify-center lg:flex"></div>
            <div className="flex py-2">
              <ButtonPrimary>
                <Link to="/">กลับหน้าหลัก</Link>
              </ButtonPrimary>
            </div>
          </motion.div>
        </div>
      </>
    )
  }

  const navbarOnLocationList = [
    { '/': navLandingPage() },
    { '/login': navLoginPage() },
    { '/consent': navLoginPage() },
    { '/register': navRegisterPage() }
  ]

  return (
    <>
      {navbarOnLocationList.map((item, index) => (
        <div key={index}>{Object.keys(item)[0] === location.pathname && Object.values(item)[0]}</div>
      ))}
    </>
  )
}

export default Navbar
