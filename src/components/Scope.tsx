import React from 'react'
import ButtonPrimary from './Buttons/ButtonPrimary'
import CategoryCard from './CategoryCard'
import ConfirmModal from './Modal/ComfirmModal'
import AlgorithmContent from './Scope_Content/AlgorithmContent'
import ComSciContent from './Scope_Content/ComSciContent'
import MathContent from './Scope_Content/MathContent'

const Scope: React.FC = (): JSX.Element => {
  return (
    <div className="flex h-full min-h-screen flex-col items-center gap-16 bg-[#0E2A3F] px-8 py-16 md:px-24 md:py-28">
      <h1 className="mb-8 text-center font-heading text-4xl text-[#fff] md:text-5xl">ขอบเขตเนื้อหา</h1>
      <div className="flex w-full flex-wrap justify-center gap-8">
        <CategoryCard title="หมวดคณิตศาสตร์" imgSrc="public/diamon_img/gem4 blue.png" content={<MathContent />} />
        <CategoryCard
          title="หมวดพื้นฐานวิทยาการคอมพิวเตอร์"
          imgSrc="public/diamon_img/gem5 red.png"
          content={<ComSciContent />}
        />
        <CategoryCard title="หมวดอัลกอริทึม" imgSrc="public/diamon_img/gem3 blue.png" content={<AlgorithmContent />} />
      </div>
      <div className="shadow-[0px 2px 4px 0px rgba(39,68,100,0.25)] flex flex-col items-center justify-center gap-6 rounded-[10px] border-[1px] border-[#274464] border-[solid] bg-[rgba(158,223,250,0.40)] p-4 md:flex-row md:bg-[rgba(6,89,115,0.80)]">
        <div className="text-center font-body text-[#FFF9F3]">ขอบเขตเนื้อหาการแข่งขันฉบับเต็ม (PDF)</div>
        <ButtonPrimary>
          <a href="public\ScopeContentPDF\ขอบเขตเนื้อหาที่ใช้ในการแข่งขัน.pdf" download>
            ดาวน์โหลด
          </a>
        </ButtonPrimary>
      </div>
      <ConfirmModal />
    </div>
  )
}

export default Scope
