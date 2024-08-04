import { Steps } from 'antd'
import React from 'react'
import './Stage.css'

const getIconClasses = (bgColor: string) => `flex h-9 w-9 items-center justify-center rounded-full ${bgColor} text-xl `

const statusColors: Record<'finish' | 'process' | 'wait', string> = {
  wait: 'bg-[#EBD176] bg-opacity-0 border-[#EBD176] border-2 text-[#EBD176] ',
  process: 'bg-[#EBD176] text-[#274464] shadow-xl shadow-primary_yellow-300/30',
  finish: 'bg-[#9EDFFA] text-[#274464]'
}

export type StageStatus = 'finish' | 'process' | 'wait'

interface StageProps {
  numberOfMembers: number
  statuses: StageStatus[]
}

const Stage: React.FC<StageProps> = ({ numberOfMembers, statuses }) => {
  const titles = ['ทีม-อาจารย์', ...Array.from({ length: numberOfMembers }, (_, i) => `สมาชิกคนที่ ${i + 1}`)]

  const items = titles.map((title, index) => ({
    title: <div className="hidden font-body text-white sm:block">{title}</div>,
    status: statuses[index],
    icon: <div className={getIconClasses(statusColors[statuses[index]])}>{index + 1}</div>
  }))

  return <Steps labelPlacement="vertical" responsive={false} items={items} />
}

export default Stage
