import { Typography } from 'antd'
import { useState } from 'react'
import ButtonOutlined from './components/Buttons/ButtonOutlined'
import ButtonPrimary from './components/Buttons/ButtonPrimary'
import ButtonSecondary from './components/Buttons/ButtonSecondary'
import Input from './components/Form/Input'
import Upload from './components/Form/Upload'
import ModalTemplate from './components/ModalTemplate'
import ThemeProvider from './lib/ThemeProvider'

function App() {
  const { Text } = Typography

  const [file1, setFile1] = useState<File>()
  const [file2, setFile2] = useState<File>()

  return (
    <ThemeProvider>
      <div className="flex h-full bg-[#0E2A3F]">
        <div className="m-auto px-3">
          <p className="font-heading text-3xl font-bold text-text_color-100">HOME</p>
          <Text className="text-lg font-normal text-text_color-100">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolores, veritatis qui error perspiciatis
            neque ratione vitae architecto nam, dolore eum repellendus laudantium, commodi fugiat. Doloribus voluptas
            unde eius iusto. <br />
            ปิกอัพแพทยสภาราเมนจิตเภท คอนเทนเนอร์หมายปองแอร์เรซิ่น เทคเที่ยงคืนตรวจสอบไวอะกร้ารุสโซ ควีน
            หมั่นโถวเอ็กซ์เพรสบ๊อบแอปเปิล คูลเลอร์สติ๊กเกอร์บรรพชนอิมพีเรียล อะเวอร์แม็กกาซีน ซิตี้ตังค์เกมส์วิกดีมานด์
            แฟกซ์รีโมตอพาร์ทเมนท์แฮนด์ ราชานุญาตคลาสสิกภควัมปติเบบี้ สะเด่าโค้กฟินิกซ์เป่ายิงฉุบ โบรกเกอร์เฝอ
            จังโก้พาวเวอร์บัส เจี๊ยวพุทธศตวรรษชัตเตอร์ซานตาคลอส เก๊ะ แชมปิยอง
          </Text>
          <div>
            <ButtonPrimary>Primary</ButtonPrimary>
            <ButtonPrimary disabled>Disabled</ButtonPrimary>
            <ButtonSecondary>Secondary</ButtonSecondary>
            <ButtonSecondary disabled>Disabled</ButtonSecondary>
            <ButtonOutlined>Secondary</ButtonOutlined>
            <ButtonOutlined disabled>Disabled</ButtonOutlined>
          </div>

          <div>
            <Input required title="Username" />
            <Upload
              title="1.รูปภาพนักเรียน 1.5 นิ้ว"
              description="อัปโหลดเอกสารไม่เกิน 10 MB ( JPG/PNG เท่านั้น )"
              required
              maxCount={1}
              imageUpload
              file={file1}
              setFile={setFile1}
            >
              <div className="flex flex-row gap-4 text-lg">
                เพิ่มไฟล์ <span className="text-primary-400">+</span>
              </div>
            </Upload>

            <Upload
              title="2.สำเนาบัตรประชาชนผู้เข้าแข่งขันพร้อมเซ็นสำเนาถูกต้อง  หรือบัตรประจำตัวคนซึ่งไม่ได้ถือสัญชาติไทย เฉพาะด้านหน้า"
              description="อัปโหลดเอกสารไม่เกิน 10 MB ( PDF เท่านั้น )"
              required
              maxCount={1}
              file={file2}
              setFile={setFile2}
            >
              <div className="flex flex-row gap-4 text-lg">
                เพิ่มไฟล์ <span className="text-primary-400">+</span>
              </div>
            </Upload>

            <ModalTemplate />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
