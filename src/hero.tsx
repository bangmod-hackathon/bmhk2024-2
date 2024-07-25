import { useEffect, useState } from 'react'
import Logo from '../public/Landing/Logo.svg'
import Start2 from '../public/Landing/Starr.gif'
import Start from '../public/Landing/watashiwastart.gif'
import ButtonPrimary from './components/Buttons/ButtonPrimary'
import './fade.css'

const getRandomPosition = (maxWidth, maxHeight) => {
  const x = Math.floor(Math.random() * maxWidth)
  const y = Math.floor(Math.random() * maxHeight)
  return { x, y }
}

const images = [Start, Start2]
const getRandomImage = () => images[Math.floor(Math.random() * images.length)]

function Hero() {
  const [positions, setPositions] = useState([[], []])
  const [animation, setAnimation] = useState('fade-out')

  const updatePositions = () => {
    const container1 = document.getElementById('random-container-1')
    const container2 = document.getElementById('random-container-2')
    if (container1 && container2) {
      const { clientWidth: width1, clientHeight: height1 } = container1
      const { clientWidth: width2, clientHeight: height2 } = container2
      const newPositions = [
        Array.from({ length: 5 }, () => ({ ...getRandomPosition(width1 - 130, height1 - 100), img: getRandomImage() })),
        Array.from({ length: 5 }, () => ({ ...getRandomPosition(width2 - 130, height2 - 100), img: getRandomImage() }))
      ]
      setPositions(newPositions)
    }
  }

  useEffect(() => {
    updatePositions()
    window.addEventListener('resize', updatePositions)
    return () => window.removeEventListener('resize', updatePositions)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('fade-out')
      setTimeout(() => {
        updatePositions()
        setAnimation('fade-in')
      }, 2000) // Match the duration of the fade-out animation
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid w-full grid-cols-[0.5fr_1fr_0.5fr] bg-[#0E2A3F]">
      <div id="random-container-1" className="relative">
        <div className={animation}>
          {positions[0].map((pos, index) => (
            <img
              key={index}
              src={pos.img}
              alt="Random GIF"
              className="absolute lg:size-12 xl:size-14"
              style={{ left: pos.x, top: pos.y }}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <img
            src={Logo}
            alt="Logo-bmhk2025"
            className="min-h-[280px] min-w-[349px] sm:h-[280px] sm:w-[349px] lg:h-[280px] lg:w-[349px] xl:h-[466px] xl:w-[580px]"
          />
          <div className="m-0 flex flex-col items-center gap-[22px] xl:h-[504px] xl:w-[756px] xl:px-[21.141px] xl:pb-[30px] xl:pt-[80px]">
            <div className="flex w-full items-center justify-center lg:h-[96px] lg:w-[333] xl:h-[58px] xl:w-[714]">
              <h1 className="font-heading text-[40px] text-white sm:text-[40px] lg:text-[40px] xl:text-[48px]">
                Now-5 August 2024
              </h1>
            </div>
            <div className="flex w-full flex-col items-center text-center font-body font-normal text-white lg:text-[16px] xl:h-full xl:w-[714] xl:text-[24px]">
              <div>
                <p>โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ </p>
                <p>BangMod Hackathon</p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center text-center font-body font-normal text-white lg:text-[16px] xl:w-[714] xl:text-[18px]">
              <p className='xl:w-[420px] lg:w-[400px]'>
                เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษา ตอนต้น และ ตอนปลาย รวมถึงนักศึกษาอาชีวศึกษาในระดับ
                ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน โปรแกรม โดยใช้ภาษาซี ซึ่งจะเป็นการแข่งขันในรูปแบบทีม
                ทำให้ผู้เข้าแข่งขันได้รับทั้งประสบการณ์ใหม่ ๆ ในการเขียนโปรแกรม และฝึกการทำงานร่วมกันเป็นทีม
              </p>
            </div>
            <ButtonPrimary>
              <div className="font-body">ลงทะเบียน</div>
            </ButtonPrimary>
          </div>
        </div>
      </div>
      <div id="random-container-2" className="relative">
        <div className={animation}>
          {positions[1].map((pos, index) => (
            <img
              key={index}
              src={pos.img}
              alt="Random GIF"
              className="absolute size-6 lg:size-12 xl:size-14"
              style={{ left: pos.x, top: pos.y }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
