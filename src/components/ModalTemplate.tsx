import { Modal as AntModal } from 'antd'
import React, { useState } from 'react'
import ButtonPrimary from './Buttons/ButtonPrimary'

const ModalTemplate: React.FC = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <ButtonPrimary onClick={() => setIsModalOpen(true)}>Open Modal</ButtonPrimary>
      <AntModal
        open={isModalOpen}
        className="size-[800px]"
        classNames={{
          body: 'bg-transparent',
          header: 'bg-transparent',
          footer: 'bg-transparent text-center',
          content: 'bg-gradient-to-br from-[#132635] to-[#1E3B52] rounded-[25px]'
        }}
        closable={false}
        footer={[
          <ButtonPrimary key="confirm" onClick={() => setIsModalOpen(false)}>
            ยืนยัน
          </ButtonPrimary>
        ]}
      >
        <h1 className="mb-5 text-center font-heading text-2xl text-primary_yellow-100">หมวดอัลกอริทึม</h1>
        <p className="font-body text-lg font-normal text-text_color-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolores, veritatis qui error perspiciatis neque
          ratione vitae architecto nam, dolore eum repellendus laudantium, commodi fugiat. Doloribus voluptas unde eius
          iusto. <br />
          ปิกอัพแพทยสภาราเมนจิตเภท คอนเทนเนอร์หมายปองแอร์เรซิ่น เทคเที่ยงคืนตรวจสอบไวอะกร้ารุสโซ ควีน
          หมั่นโถวเอ็กซ์เพรสบ๊อบแอปเปิล คูลเลอร์สติ๊กเกอร์บรรพชนอิมพีเรียล อะเวอร์แม็กกาซีน ซิตี้ตังค์เกมส์วิกดีมานด์
          แฟกซ์รีโมตอพาร์ทเมนท์แฮนด์ ราชานุญาตคลาสสิกภควัมปติเบบี้ สะเด่าโค้กฟินิกซ์เป่ายิงฉุบ โบรกเกอร์เฝอ
          จังโก้พาวเวอร์บัส เจี๊ยวพุทธศตวรรษชัตเตอร์ซานตาคลอส เก๊ะ แชมปิยอง
        </p>
        <p className="font-body text-lg font-normal text-text_color-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolores, veritatis qui error perspiciatis neque
          ratione vitae architecto nam, dolore eum repellendus laudantium, commodi fugiat. Doloribus voluptas unde eius
          iusto. <br />
          ปิกอัพแพทยสภาราเมนจิตเภท คอนเทนเนอร์หมายปองแอร์เรซิ่น เทคเที่ยงคืนตรวจสอบไวอะกร้ารุสโซ ควีน
          หมั่นโถวเอ็กซ์เพรสบ๊อบแอปเปิล คูลเลอร์สติ๊กเกอร์บรรพชนอิมพีเรียล อะเวอร์แม็กกาซีน ซิตี้ตังค์เกมส์วิกดีมานด์
          แฟกซ์รีโมตอพาร์ทเมนท์แฮนด์ ราชานุญาตคลาสสิกภควัมปติเบบี้ สะเด่าโค้กฟินิกซ์เป่ายิงฉุบ โบรกเกอร์เฝอ
          จังโก้พาวเวอร์บัส เจี๊ยวพุทธศตวรรษชัตเตอร์ซานตาคลอส เก๊ะ แชมปิยอง
        </p>
      </AntModal>
    </>
  )
}

export default ModalTemplate
