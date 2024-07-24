import React, { useEffect, useState } from 'react';
import Logo from '../public/Landing/Logo.svg';
import Start from '../public/Landing/watashiwastart.gif';
import ButtonPrimary from './components/Buttons/ButtonPrimary';

const getRandomPosition = (maxWidth: number, maxHeight: number) => {
  const x = Math.floor(Math.random() * maxWidth);
  const y = Math.floor(Math.random() * maxHeight);
  return { x, y };
};

function Hero() {
  const [positions, setPositions] = useState<{ x: number, y: number }[][]>([]);

  useEffect(() => {
    const updatePositions = () => {
      const container1 = document.getElementById('random-container-1');
      const container2 = document.getElementById('random-container-2');
      if (container1 && container2) {
        const { clientWidth: width1, clientHeight: height1 } = container1;
        const { clientWidth: width2, clientHeight: height2 } = container2;
        const newPositions = [
          Array.from({ length: 3 }, () => getRandomPosition(width1 - 130, height1 - 100)),
          Array.from({ length: 3 }, () => getRandomPosition(width2 - 130, height2 - 100)),
        ];
        setPositions(newPositions);
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  return (
    <div className="grid w-full grid-cols-[0.5fr_1fr_0.5fr] bg-[#0E2A3F]">
      <div id="random-container-1" className="relative">
        {positions[0] && positions[0].map((pos, index) => (
          <img
            key={index}
            src={Start}
            alt="Logo-bmhk2025"
            className="absolute h-[100px] w-[130px]"
            style={{ left: pos.x, top: pos.y }}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="pr-10">
            <img src={Logo} alt="Logo-bmhk2025" className="h-[410px] w-[330px]" />
          </div>
          <div className="m-0 flex w-[714px] flex-col items-center gap-[22px] px-[21.141px] pb-[30px] pt-[80px]">
            <h1 className="font-heading text-[48px] text-white">Now-5 August 2024</h1>
            <div className="text-center font-body text-[24px] font-normal text-white">
              <p>โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ </p>
              <p>BangMod Hackathon</p>
            </div>
            <ul className="text-center font-body text-lg font-normal text-white">
              <li> เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนต้น และตอนปลาย</li>
              <li> รวมถึงนักศึกษาอาชีวศึกษาในระดับ ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน โปรแกรม</li>
              <li>โดยใช้ภาษาซี ซึ่งจะเป็นการแข่งขันในรูปแบบทีม</li>
              <li>ทำให้ผู้เข้าแข่งขันนั้นได้รับทั้งประสบการณ์ใหม่ ๆ ในการเขียนโปรแกรม</li>
              <li>และฝึกการทำงานร่วมกันเป็นทีมอีกด้วย</li>
            </ul>
            <ButtonPrimary>
              <div className="font-body">ลงทะเบียน</div>
            </ButtonPrimary>
          </div>
        </div>
      </div>
      <div id="random-container-2" className="relative">
        {positions[1] && positions[1].map((pos, index) => (
          <img
            key={index}
            src={Start}
            alt="Logo-bmhk2025"
            className="absolute h-[100px] w-[130px]"
            style={{ left: pos.x, top: pos.y }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
