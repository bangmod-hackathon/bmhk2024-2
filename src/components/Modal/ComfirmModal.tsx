import { LoadingOutlined } from '@ant-design/icons'
import { Modal as AntModal, Spin } from 'antd'
import React, { useState } from 'react'
import ButtonOutlined from '../Buttons/ButtonOutlined'
import ButtonPrimary from '../Buttons/ButtonPrimary'

interface Props {
  onSubmit: () => Promise<boolean>
  onConfirm?: () => void
  loading?: boolean
}

const ConfirmModal: React.FC<Props> = (props): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        className="text-bg-200 bg-secondary_blue-100 border font-normal text-lg py-4 px-8 rounded-[8px] disabled:cursor-wait"
        onClick={async () => {
          if (await props.onSubmit()) setIsModalOpen(true)
        }}
        disabled={props.loading}
      >
        {props.loading ? <Spin indicator={<LoadingOutlined spin className="text-white" />} size="large" /> : 'ยืนยัน'}
      </button>
      <AntModal
        open={isModalOpen}
        centered
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
            <ButtonPrimary
              key="confirm"
              onClick={() => {
                props.onConfirm && props.onConfirm()
                setIsModalOpen(false)
              }}
            >
              ยืนยัน
            </ButtonPrimary>
          </div>
        ]}
      >
        <div className="flex items-center justify-center">
          <img src="/Confirm_icon/AiTwotoneCheckCircle.png" alt="" />
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
