import { Typography } from 'antd'
import ButtonOutlined from './components/Buttons/ButtonOutlined'
import ButtonPrimary from './components/Buttons/ButtonPrimary'
import ButtonSecondary from './components/Buttons/ButtonSecondary'
import Input from './components/Form/Input'
import ModalTemplate from './components/ModalTemplate'
import Stage from './components/Steps/Stage'
import ThemeProvider from './lib/ThemeProvider'

function App() {
  const { Text } = Typography

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-[#0E2A3F]">
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

          <Stage numberOfMembers={3} statuses={['finish', 'process', 'wait', 'wait']} />

          <div>
            <Input required title="Username" />
            <ModalTemplate />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
