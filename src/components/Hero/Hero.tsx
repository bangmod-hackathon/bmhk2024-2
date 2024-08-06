import React, { useEffect, useState } from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import './fade.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Function to get a random position
const getRandomPosition = (maxWidth: number, maxHeight: number) => {
  const x = Math.floor(Math.random() * maxWidth)
  const y = Math.floor(Math.random() * maxHeight)
  return { x, y }
}

// Array of images
const images = ['Landing/watashiwastart.gif', 'Landing/Starr.gif']
const getRandomImage = () => images[Math.floor(Math.random() * images.length)]

const Hero: React.FC = () => {
  // State to hold the positions of the stars
  const [positions, setPositions] = useState({
    container1: Array.from({ length: 5 }, () => ({ ...getRandomPosition(0, 0), img: getRandomImage() })),
    container2: Array.from({ length: 5 }, () => ({ ...getRandomPosition(0, 0), img: getRandomImage() }))
  })

  // Function to update positions of stars
  const updatePositions = () => {
    const container1 = document.getElementById('random-container-1')
    const container2 = document.getElementById('random-container-2')

    if (container1 && container2) {
      const { clientWidth: width1, clientHeight: height1 } = container1
      const { clientWidth: width2, clientHeight: height2 } = container2

      const newPositions1 = positions.container1.map(() => ({
        ...getRandomPosition(width1 - 130, height1 - 100),
        img: getRandomImage()
      }))
      const newPositions2 = positions.container2.map(() => ({
        ...getRandomPosition(width2 - 130, height2 - 100),
        img: getRandomImage()
      }))

      // Update state with new positions
      setPositions({
        container1: newPositions1,
        container2: newPositions2
      })
    }
  }

  useEffect(() => {
    updatePositions()
    window.addEventListener('resize', updatePositions)

    return () => window.removeEventListener('resize', updatePositions)
  }, [])

  useEffect(() => {
    const fadeInterval = 5000 // Duration between fade animations
    const fadeDuration = 2000 // Duration of fade effect
    const fadeDelay = 500 // Delay between each star's fade-in

    // Function to apply fade-out effect
    const fadeOutStars = (containerId: string, callback: () => void) => {
      const container = document.getElementById(containerId)
      if (!container) return

      const stars = Array.from(container.getElementsByTagName('img'))
      stars.forEach((star, index) => {
        setTimeout(() => {
          star.classList.add('fade-out')
        }, index * fadeDelay)
      })
      setTimeout(callback, fadeDuration)
    }

    // Function to apply fade-in effect
    const fadeInStars = (containerId: string) => {
      const container = document.getElementById(containerId)
      if (!container) return

      const stars = Array.from(container.getElementsByTagName('img'))
      stars.forEach((star, index) => {
        setTimeout(() => {
          star.classList.remove('fade-out')
          star.classList.add('fade-in')
        }, index * fadeDelay)
      })
    }

    // Function to animate stars
    const animate = () => {
      fadeOutStars('random-container-1', () => {
        fadeOutStars('random-container-2', () => {
          updatePositions()
          fadeInStars('random-container-1')
          fadeInStars('random-container-2')
        })
      })
    }

    const interval = setInterval(animate, fadeInterval)

    return () => clearInterval(interval)
  }, [])

  return (
    <React.Fragment>
      <div className="grid w-full grid-cols-[0.5fr_1fr_0.5fr] lg:py-[12rem] py-[8rem] overflow-hidden">
        <div id="random-container-1" className="relative">
          {positions.container1.map((pos, index) => (
            <img
              key={index}
              src={pos.img}
              alt="Random GIF"
              className="fade-out absolute h-[12px] w-[16px] xl:h-[22px] xl:w-[26px]" // Ensure all images start hidden
              style={{ left: pos.x, top: pos.y }}
            />
          ))}
        </div>
        <div className="main-content flex justify-center">
          <div className="flex flex-col items-center">
            <motion.img
              animate={{ y: [10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              src={'Landing/Logo.svg'}
              alt="Logo-bmhk2025"
              className="min-h-[280px] min-w-[349px] sm:h-[280px] sm:w-[349px] lg:h-[280px] lg:w-[349px] xl:h-[466px] xl:w-[580px]"
            />
            <div className="m-0 flex w-full flex-col items-center gap-[22px] xl:h-[504px] xl:w-[756px] xl:px-[21.141px] xl:pb-[30px] xl:pt-[80px]">
              <div className="flex w-full items-center justify-center lg:h-[96px] lg:w-[333] xl:h-[58px] xl:w-[714]">
                <h1 className="font-heading tracking-wide text-center text-[40px] text-white sm:text-[40px] lg:text-[40px] xl:text-[48px]">
                  Now-31 August 2024
                </h1>
              </div>
              <div className="flex w-full flex-col items-center text-center font-ibm font-normal text-text_color-100 lg:text-[16px] xl:h-full xl:w-[714] xl:text-[24px]">
                <div>
                  <p>โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ </p>
                  <p>BangMod Hackathon</p>
                </div>
              </div>
              <div className="flex w-full flex-col items-center text-center font-body text-[14px] font-normal text-text_color-100 xl:w-[714] xl:text-[18px]">
                <p className="lg:w-[400px] xl:w-[420px]">
                  เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลาย รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช.
                  หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียนโปรแกรมโดยใช้ภาษาซี ซึ่งจะเป็นการแข่งขันในรูปแบบทีม
                  ทำให้ผู้เข้าแข่งขันได้รับทั้งประสบการณ์ใหม่ ๆ ในการเขียนโปรแกรม และฝึกการทำงานร่วมกันเป็นทีม
                </p>
              </div>
              <Link to="/login">
                <ButtonPrimary>
                  <div className="font-body text-[18px]">ลงทะเบียน</div>
                </ButtonPrimary>
              </Link>
            </div>
          </div>
        </div>
        <div id="random-container-2" className="relative">
          {positions.container2.map((pos, index) => (
            <img
              key={index}
              src={pos.img}
              alt="Random GIF"
              className="fade-out absolute h-[12px] w-[16px] xl:h-[22px] xl:w-[26px]" // Ensure all images start hidden
              style={{ left: pos.x, top: pos.y }}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero
