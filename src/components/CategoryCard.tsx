import React from 'react'
import GenericModal from './Modal/GenericModal'

interface CategoryCardProps {
  title: string
  imgSrc: string
  content: React.ReactNode
}
// Card Template for each Content
const CategoryCard: React.FC<CategoryCardProps> = ({ title, imgSrc, content }): JSX.Element => {
  return (
    <div className="mb-6 flex w-full flex-col md:w-[370px]">
      <div className="flex justify-center">
        <div className="h-[9px] w-[279px] rounded-tl-full rounded-tr-full bg-[#F7E49F] md:w-[336px]"></div>
      </div>
      <div className="inline-flex h-auto flex-col gap-6 rounded-[10px] bg-[#274464] p-6 md:h-[199px] md:gap-[30px] md:pb-[24px] md:pl-[20px] md:pr-[20px] md:pt-[24px]">
        <div className="flex items-center gap-6 text-[#FDEDDC] md:gap-[24px]">
          <img src={imgSrc} className="h-12 w-12 md:h-16 md:w-16" />
          <div className="shadow-[0px 2px 4px rgba(39, 68, 100, 0.25)] flex flex-col justify-center font-body text-lg text-[#FDEDDC] md:text-2xl">
            {title}
          </div>
        </div>
        <div className="flex justify-end">
          <GenericModal content={content} />
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
