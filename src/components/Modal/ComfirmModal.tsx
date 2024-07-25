import { Modal as AntModal } from 'antd'
import React, { useState } from 'react'
import ButtonOutlined from '../Buttons/ButtonOutlined'
import ButtonPrimary from '../Buttons/ButtonPrimary'

const ConfirmModal: React.FC = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <ButtonPrimary onClick={() => setIsModalOpen(true)}>Confirm Modal</ButtonPrimary>
      <AntModal
        open={isModalOpen}
        className="flex w-[534px] flex-col px-[63px] py-[36px]"
        classNames={{
          body: 'bg-transparent',
          header: 'bg-transparent',
          footer: 'bg-transparent text-center',
          content: 'bg-[#0C384E] rounded-[25px]'
        }}
        closable={false}
        footer={[
          <div key={'button'} className="flex w-full items-center justify-center gap-[12px]">
            <ButtonOutlined key="cancel" onClick={() => setIsModalOpen(false)}>
              ยกเลิก
            </ButtonOutlined>
            <ButtonPrimary key="confirm" onClick={() => setIsModalOpen(false)}>
              ยืนยัน
            </ButtonPrimary>
          </div>
        ]}
      >
        <div className="flex items-center justify-center">
          <img src="/Confirm_icon/AiTwotoneCheckCircle.png" />
        </div>
        <h1 className="mb-2 text-center text-2xl font-normal text-white">ยืนยันความถูกต้อง</h1>
        <p className="text-center font-body text-sm font-normal text-white">
          หากทีมงานตรวจสอบแล้วพบว่าข้อมูลไม่ตรงตามเงื่อนไข ขอใช้อำนาจในการตัดสิทธิ์ของผู้สมัคร
        </p>
      </AntModal>
    </>
  )
}

export default ConfirmModal
