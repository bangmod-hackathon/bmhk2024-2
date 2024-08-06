import { Modal as AntModal } from 'antd'
import React, { useState } from 'react'
import ButtonOutlined from '../Buttons/ButtonOutlined'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { HiX } from 'react-icons/hi'

interface GenericModalProps {
  content: React.ReactNode
}
// Template Content Scope Modal

const GenericModal: React.FC<GenericModalProps> = ({ content }): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <ButtonOutlined onClick={() => setIsModalOpen(true)}>รายละเอียด</ButtonOutlined>
      <AntModal
        open={isModalOpen}
        centered
        width={768}
        classNames={{
          body: 'bg-transparent',
          header: 'bg-transparent',
          footer: 'bg-transparent text-center',
          content: 'bg-gradient-to-br from-[#132635] to-[#1E3B52] rounded-[25px]'
        }}
        closable={false}
        footer={[
          <ButtonPrimary key="confirm" onClick={() => setIsModalOpen(false)}>
            ปิด
          </ButtonPrimary>
        ]}
      >
        <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-2xl text-white">
          <HiX />
        </button>
        {content}
      </AntModal>
    </>
  )
}

export default GenericModal
