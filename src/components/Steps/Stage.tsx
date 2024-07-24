import { Steps } from 'antd'
import React from 'react'
import './Stage.css'

const getIconClasses = (bgColor: string) => `flex h-9 w-9 items-center justify-center rounded-full ${bgColor} text-xl `

const statusColors: Record<'finish' | 'process' | 'wait', string> = {
  finish: 'bg-[#EBD176] bg-opacity-0 border-[#EBD176] border-2 text-[#EBD176] ',
  process: 'bg-[#EBD176] text-[#274464] drop-shadow-2xl drop-shadow-[0_35px_35px_rgba(235,209,118,0.25)]',
  wait: 'bg-[#9EDFFA] text-[#274464]'
}

type Status = 'finish' | 'process' | 'wait'

interface StageProps {
  numberOfMembers: number
  statuses: Status[]
}

const Stage: React.FC<StageProps> = ({ numberOfMembers, statuses }) => {
  const titles = ['ทีม-อาจารย์', ...Array.from({ length: numberOfMembers }, (_, i) => `สมาชิกคนที่ ${i + 1}`)]

  const items = titles.map((title, index) => ({
    title: <div className="hidden font-body text-white sm:block">{title}</div>,
    status: statuses[index],
    icon: <div className={getIconClasses(statusColors[statuses[index]])}>{index + 1}</div>
  }))

  return (
    <div className="bg-[#274464]">
      <Steps labelPlacement="vertical" responsive={false} items={items} />
    </div>
  )
}

export default Stage
